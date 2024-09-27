import Link from "next/link";
import { Job } from "../../../../types";

export interface Params {
    params: {
      job : string 
    };
}

const SpecificJob:React.FC<Params> = async ({ params }) => {
    const job = params.job;

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/jobs/${job}`,
  
      {
        next: {
          revalidate: 300,
        },
      },
    );
  
    const data = await res.json();
    const jobListing:Job = data.data;
  
    // console.log(jobListing)


  return (
    <div>
      <div className="flex flex-col items-stretch gap-16 px-8 py-24 sm:px-12 md:px-20 lg:px-28 xl:px-32 2xl:px-36">
        <div className="mx-auto">
          <p className="landing-page-subheading !mb-4 text-center">
            Decimal Solution
          </p>
          <h2 className="landing-page-heading text-center">
            {jobListing.title}
          </h2>
        </div>
        <div>
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:gap-4">
            <div className="flex flex-col gap-4">
              <p className="text-base font-medium text-black lg:text-lg xl:text-[28px]">
                Minimum Qualification:{" "}
                <span className="text-base font-light lg:text-lg xl:text-xl 2xl:text-2xl">
                  {jobListing.minimumQualifications}
                </span>
              </p>
              <p className="text-base font-medium text-black lg:text-lg xl:text-[28px]">
                Experience Level:{" "}
                <span className="text-base font-light lg:text-lg xl:text-xl 2xl:text-2xl">
                  {jobListing.jobLevel}
                </span>
              </p>
              <p className="text-base font-medium text-black lg:text-lg xl:text-[28px]">
                Experience Length:{" "}
                <span className="text-base font-light lg:text-lg xl:text-xl 2xl:text-2xl">
                  {jobListing.minimumExperience}
                </span>
              </p>
              <p className="text-base font-medium text-black lg:text-lg xl:text-[28px]">
                Location:{" "}
                <span className="text-base font-light lg:text-lg xl:text-xl 2xl:text-2xl">
                  {jobListing.location}
                </span>
              </p>
              <p className="text-base font-medium text-black lg:text-lg xl:text-[28px]">
                Application Deadline:{" "}
                <span className="text-base font-light lg:text-lg xl:text-xl 2xl:text-2xl">
                  {new Date(
                    jobListing.jobApplicationDeadline,
                  ).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </p>
              <p className="text-base font-medium text-black lg:text-lg xl:text-[28px]">
                Salary Range:{" "}
                <span className="text-base font-light lg:text-lg xl:text-xl 2xl:text-2xl">
                  {jobListing.minimumJobSalary.toLocaleString("en-PK", {
                    style: "currency",
                    currency: "PKR",
                  })}{" "}
                  -
                  {jobListing.maximumJobSalary.toLocaleString("en-PK", {
                    style: "currency",
                    currency: "PKR",
                  })}
                </span>
              </p>
            </div>
            <Link href={`/careers/${params.job}/apply-for-job`}>
              <button className="rounded-full bg-primary px-4 py-2 text-sm text-white md:px-8 md:py-3 md:text-base lg:px-16 lg:py-4 lg:text-lg xl:text-xl">
                Apply Now
              </button>
            </Link>
          </div>
        </div>
        <div>
          <p className="mb-4 text-base font-semibold  text-black lg:text-lg xl:text-[28px]">
            Job Description:
          </p>
          <p className="text-base font-light !leading-relaxed lg:text-lg xl:text-2xl">
            {jobListing.description}
          </p>
        </div>
        <div>
          <p className="mb-4 text-base font-semibold  text-black lg:text-lg xl:text-[28px]">
            Job Requirements:
          </p>
          <p className="text-base font-light !leading-relaxed lg:text-lg xl:text-2xl">
            {jobListing.jobRequirements}
          </p>
        </div>
        <div>
          <p className="mb-4 text-base font-semibold  text-black lg:text-lg xl:text-[28px]">
            Job Responsibilities:
          </p>
          <p className="text-base font-light !leading-relaxed lg:text-lg xl:text-2xl">
            {jobListing.jobResponsibilities}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SpecificJob;
