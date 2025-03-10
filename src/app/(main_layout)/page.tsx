// import JobListings from "@/components/general/JobListings";
// import JobListingsLoading from "@/components/general/JobListingsLoading";
import { JobFilters } from "@/components/general/Job-filter";
import JobListings from "@/components/general/Job-listing";
import JobListingsLoading from "@/components/general/job-listing-loading";
import { inngest } from "@/utils/inngest/client";
import { Suspense } from "react";

type SearchParamsProps = {
  searchParams: Promise<{
    page?: string;
    jobTypes?: string;
    location?: string;
  }>;
};

export default async function Home({ searchParams }: SearchParamsProps) {
  const params = await searchParams;
  const currentPage = Number(params.page) || 1;
  const jobTypes = params.jobTypes?.split(",") || [];
  const location = params.location || "";
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

  notifyJobSeekers()
  

  // Create a composite key from all filter parameters
  const filterKey = `page=${currentPage};types=${jobTypes.join(
    ","
  )};location=${location}`;

  return (
    <div className="grid grid-cols-3 gap-8">
      <JobFilters />
      <div className="col-span-2 flex flex-col gap-6">
      <Suspense key={filterKey} fallback={<JobListingsLoading />}>
          <JobListings
            currentPage={currentPage}
            jobTypes={jobTypes}
            location={location}
          />
        </Suspense>
      </div>
    </div>
  );
}
