'use server';
import arcjet, { detectBot, shield } from '@/utils/arcjet';
import { prisma } from '@/utils/prisma';
import { requireUser } from '@/utils/require-user';
import { companySchema } from '@/utils/schema';
import { request } from '@arcjet/next';
import { redirect } from 'next/navigation';
import {z} from 'zod'

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


export async function createCompany(data: z.infer<typeof companySchema>) {
    const user = await requireUser();
  
      // Access the request object so Arcjet can analyze it
  const req = await request();
  // Call Arcjet protect
  const decision = await aj.protect(req);

  if (decision.isDenied()) {
    throw new Error("Forbidden");
  }
  
  
    // Server-side validation
    const validatedData = companySchema.parse(data);
  
    console.log(validatedData);
  
    await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        onboardingCompleted: true,
        userType: "COMPANY",
        Company: {
          create: {
            ...validatedData,
          },
        },
      },
    });
  
    return redirect("/");
  }
  