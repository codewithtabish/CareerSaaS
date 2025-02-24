'use server';
import { prisma } from "@/utils/prisma";
import { requireUser } from "@/utils/require-user";
import { jobSeekerSchema } from "@/utils/schema";
import { redirect } from "next/navigation";
import { z } from "zod";

export async function createJobSeeker(data: z.infer<typeof jobSeekerSchema>) {
    const user = await requireUser();
  
    // Access the request object so Arcjet can analyze it
    // const req = await request();
    // Call Arcjet protect
    // const decision = await aj.protect(req);
  
    // if (decision.isDenied()) {
    //   throw new Error("Forbidden");
    // }
  
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