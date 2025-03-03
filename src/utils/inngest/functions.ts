import { prisma } from "../prisma";
import { inngest } from "./client";

export const handleJobExpiration = inngest.createFunction(
  { id: "job-expiration" },
  { event: "job/created" },

  async ({ event, step }) => {
    const { jobId, expirationDays } = event.data;
    console.log('THE job expiration', expirationDays,'the job id', jobId);

    // Wait for the specified duration
    await step.sleep("wait-for-expiration", `${expirationDays}d`);

    // Update job status to expired
    await step.run("update-job-status", async () => {
      await prisma.jobPost.update({
        where: { id: jobId },
        data: { status: "EXPIRED" },
      });
    });

    return { jobId, message: "Job marked as expired" };
  }
);
