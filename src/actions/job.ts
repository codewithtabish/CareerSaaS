'use server';
import arcjet from "@/utils/arcjet";
import { prisma } from "@/utils/prisma";
import { requireUser } from "@/utils/require-user";
import { jobSchema, jobSeekerSchema } from "@/utils/schema";
import { detectBot, request, shield } from "@arcjet/next";
import { redirect } from "next/navigation";
import { z } from "zod";
import Stripe from "stripe";
import { stripe } from "@/utils/stripe";
import { pricing_data } from "@/utils/pricing-data";
import { inngest } from "@/utils/inngest/client";
import { revalidatePath } from "next/cache";


const aj = arcjet
  .withRule(
    shield({
      mode: "LIVE",
    })
  )
  .withRule(
    detectBot({
      mode: "LIVE",
      allow: [],
    })
  );


export async function createJobSeeker(data: z.infer<typeof jobSeekerSchema>) {
  const user = await requireUser();


  // Access the request object so Arcjet can analyze it
  const req = await request();
  // Call Arcjet protect
  const decision = await aj.protect(req);

  if (decision.isDenied()) {
    throw new Error("Forbidden");
  }

  const validatedData = jobSeekerSchema.parse(data);

  await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      onboardingCompleted: true,
      userType: "JOB_SEEKER",
      JobSeeker: {
        create: {
          ...validatedData,
        },
      },
    },
  });

  return redirect("/");
}






export async function createJob(data: z.infer<typeof jobSchema>) {
  const user = await requireUser();

  const validatedData = jobSchema.parse(data);


  // Access the request object so Arcjet can analyze it
  const req = await request();
  // Call Arcjet protect
  const decision = await aj.protect(req);

  if (decision.isDenied()) {
    throw new Error("Forbidden");
  }

  const company = await prisma.company.findUnique({
    where: {
      userId: user.id,
    },
    select: {
      id: true,
      user: {
        select: {
          stripeCustomerId: true,
        },
      },
    },
  });

  if (!company?.id) {
    return redirect("/");
  }

  let stripeCustomerId = company.user.stripeCustomerId;

  if (!stripeCustomerId) {
    const customer = await stripe.customers.create({
      email: user.email!,
      name: user.name || undefined,
    });

    stripeCustomerId = customer.id;

    // Update user with Stripe customer ID
    await prisma.user.update({
      where: { id: user.id },
      data: { stripeCustomerId: customer.id },
    });
  }

  const jobPost = await prisma.jobPost.create({
    data: {
      companyId: company.id,
      jobDescription: validatedData.jobDescription,
      jobTitle: validatedData.jobTitle,
      employmentType: validatedData.employmentType,
      location: validatedData.location,
      salaryFrom: validatedData.salaryFrom,
      salaryTo: validatedData.salaryTo,
      listingDuration: validatedData.listingDuration,
      benefits: validatedData.benefits,
    },
  });

  // // Trigger the job expiration function
  try {
    await inngest.send({
      name: "job/created",
      data: {
        jobId: jobPost.id,
        expirationDays: validatedData.listingDuration,
      },
    });

    



  } catch (error) {
    console.error("Error triggering job expiration function:", error);
    
  }

  // Get price from pricing tiers based on duration
  const pricingTier = pricing_data.find(
    (tier) => tier.days === validatedData.listingDuration
  );

  if (!pricingTier) {
    throw new Error("Invalid listing duration selected");
  }

  const session = await stripe.checkout.sessions.create({
    customer: stripeCustomerId,
    line_items: [
      {
        price_data: {
          product_data: {
            name: `Job Posting - ${pricingTier.days} Days`,
            description: pricingTier.description,
            images: [
              "https://zt0frp69jd.ufs.sh/f/N7gxrj0Djnkdok5gqWurTJ8RZ0iE6941CLeFUbIdOWfpXSKo"
              // "https://pve1u6tfz1.ufs.sh/f/Ae8VfpRqE7c0gFltIEOxhiBIFftvV4DTM8a13LU5EyzGb2SQ",
            ],
          },
          currency: "USD",
          unit_amount: pricingTier.price * 100, // Convert to cents for Stripe
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    metadata: {
      jobId: jobPost.id,
    },
    success_url: `${process.env.NEXT_PUBLIC_URL}/payment/success`,
    cancel_url: `${process.env.NEXT_PUBLIC_URL}/payment/cancel`,
  });

  // notifyJobSeekers()
  return redirect(session.url as string);


}









async function notifyJobSeekers() {
  try {
    await inngest.send({
      name: "jobseeker/created",
      data:{

      }
     
    });
  } catch (error) {
    console.error("Error sending jobseeker notification event:", error);
  }
}






export async function saveJobPost(jobId: string) {
  const user = await requireUser();

  await prisma.savedJobPost.create({
    data: {
      jobId: jobId,
      userId: user.id as string,
    },
  });

  revalidatePath(`/job/${jobId}`);
}

export async function unsaveJobPost(savedJobPostId: string) {
  const user = await requireUser();

  const data = await prisma.savedJobPost.delete({
    where: {
      id: savedJobPostId,
      userId: user.id as string,
    },
    select: {
      jobId: true,
    },
  });

  revalidatePath(`/job/${data.jobId}`);
}