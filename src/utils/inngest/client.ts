import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "saas-job-hier",
//   eventKey: process.env.INNGEST_EVENT_KEY || "", // Allow empty key in dev mode
//   schemas: "development", // Explicitly set development mode
});
