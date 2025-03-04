import { prisma } from "../prisma";
import { requireUser } from "../require-user";
import { inngest } from "./client";
import {Resend} from 'resend'

const resend=new Resend(process.env.RESEND_API_KEY)

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


// export const sendPerodicJobListing=inngest.createFunction(
//   {id:'send-job-listing'},
//   {event: 'jobseeker/created'},
//   async ({event, step})=>{
//     // const { userId,email }=event.data;
//     const session=await requireUser()
//     const userData=await prisma.user.findUnique({
//       where:{
//         email:session.email?.toString(),
//         userType:'JOB_SEEKER'

//       },
        
//     })
//     const totalDays=30
//     const daysInterval=1
//     let currentDays=0
//     while(currentDays<totalDays){
//       await step.sleep("wait-for-interval", `${daysInterval}m`);
//       currentDays+=daysInterval
//       const recentJobs=await step.run("get-recent-jobs", async () => {
//         return await prisma.jobPost.findMany({
//           where:{
//             status: 'ACTIVE',
//           },
//           orderBy:{
//             createdAt: 'desc',
//           },
//           take: 5,
//           include:{
//             company:{
//               select:{
//                 name: true,
//               }
//             }
//           }
          
//         })
//       })
//       if(recentJobs.length>0){
//         await step.run("send-email", async () => {
//           const jobListingHtml = `
//           <html>
//           <head>
//             <style>
//               body { font-family: Arial, sans-serif; line-height: 1.6; }
//               .container { max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px; }
//               .job { padding: 10px; border-bottom: 1px solid #eee; }
//               .job:last-child { border-bottom: none; }
//               .job-title { font-size: 18px; font-weight: bold; color: #333; }
//               .company { font-size: 14px; color: #666; }
//               .apply-button { display: inline-block; margin-top: 10px; padding: 8px 12px; color: #fff; background: #007bff; text-decoration: none; border-radius: 4px; }
//             </style>
//           </head>
//           <body>
//             <div class="container">
//               <h2>Latest Job Listings</h2>
//               ${recentJobs
//                 .map(
//                   (job) => `
//                   <div class="job">
//                     <div class="job-title">${job.jobTitle}</div>
//                     <div class="company">${job?.company?.name || "Unknown Company"}</div>
//                     <a href="https://yourjobportal.com/jobs/${job?.id}" class="apply-button">View Job</a>
//                   </div>
//                 `
//                 )
//                 .join("")}
//             </div>
//           </body>
//           </html>
//         `;

//         await resend.emails.send({
//           from: 'Acme <onboarding@resend.dev>',
//           to:[userData?.email.toString()],
//           subject: 'Recent Job Listings',
//           html: jobListingHtml,

//         })







          
//         })
//       }

//     }
//     return {email:userData?.email, message: "Email sent with recent job listings" }

//   }

// )



export const sendPerodicJobListing = inngest.createFunction(
  { id: "send-job-listing" },
  { event: "jobseeker/created" },
  async ({ event, step }) => {
    const session = await requireUser();
    if (!session?.email) return { message: "No session found" };

    const userData = await prisma.user.findUnique({
      where: {
        email: session.email.toString(),
        userType: "JOB_SEEKER",
      },
    });

    if (!userData?.email) return { message: "User email not found" };

    const totalDays = 30;
    const daysInterval = 2;
    let currentDays = 0;

    while (currentDays < totalDays) {
      await step.sleep("wait-for-interval", `${daysInterval}m`);
      currentDays += daysInterval;

      const recentJobs = await step.run("get-recent-jobs", async () => {
        return prisma.jobPost.findMany({
          where: { status: "ACTIVE" },
          orderBy: { createdAt: "desc" },
          take: 5,
          include: {
            company: { select: { name: true } },
          },
        });
      });

      if (recentJobs.length > 0) {
        await step.run("send-email", async () => {
          const jobListingHtml = `
          <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; background: #f4f4f4; margin: 0; padding: 0; }
              .container { max-width: 600px; margin: 20px auto; background: #fff; padding: 20px; border-radius: 8px; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); }
              h2 { color: #333; text-align: center; }
              .job { padding: 15px; border-bottom: 1px solid #eee; }
              .job:last-child { border-bottom: none; }
              .job-title { font-size: 18px; font-weight: bold; color: #007bff; }
              .company { font-size: 14px; color: #666; margin-top: 5px; }
              .apply-button { display: inline-block; margin-top: 10px; padding: 10px 15px; font-size: 14px; font-weight: bold; color: #fff; background: #007bff; text-decoration: none; border-radius: 4px; }
              .footer { text-align: center; font-size: 12px; color: #888; margin-top: 20px; }
              @media (max-width: 600px) {
                .container { padding: 15px; }
              }
            </style>
          </head>
          <body>
            <div class="container">
              <h2>🔥 Latest Job Listings Just for You!</h2>
              ${recentJobs
                .map(
                  (job) => `
                  <div class="job">
                    <div class="job-title">${job.jobTitle}</div>
                    <div class="company">${job?.company?.name || "Unknown Company"}</div>
                    <a href="https://yourjobportal.com/jobs/${job?.id}" class="apply-button">View Job</a>
                  </div>
                `
                )
                .join("")}
              <div class="footer">
                You are receiving this email because you signed up for job alerts. 
                <br> If you wish to unsubscribe, click <a href="#">here</a>.
              </div>
            </div>
          </body>
          </html>`;

          await resend.emails.send({
            from: "JobNest <notifications@codewithtabish.com>", // Use a verified email
            to: [userData.email],
            subject: "🚀 Hot Job Listings Just for You!",
            html: jobListingHtml,
          });
        });
      }
    }

    return { email: userData.email, message: "Email sent with recent job listings" };
  }
);
