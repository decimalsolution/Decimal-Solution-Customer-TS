import Link from "next/link";
import { Job } from "../../../../types";
import { Metadata } from "next";

export interface Params {
  params: {
    job: string;
  };
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const job = params.job;

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/jobs/${job}`, {
      next: {
        revalidate: 300,
      },
    });

    const data = await res.json();
    const jobListing: Job = data.data;

    if (!jobListing) {
      return {
        title: "Job Not Found | Decimal Solution",
        description: "The job you are looking for could not be found.",
      };
    }

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://www.decimalsolution.com";
    const jobUrl = `${baseUrl}/careers/${job}`;

    return {
      title: `${jobListing.title} | Decimal Solution Careers`,
      description: `${jobListing.title} - ${jobListing.description.substring(
        0,
        150
      )}... Join our team at Decimal Solution.`,
      keywords: [
        jobListing.title.toLowerCase(),
        "careers",
        "jobs",
        "employment",
        "decimal solution",
        "software development",
        "IT jobs",
        jobListing.location.toLowerCase(),
        jobListing.jobLevel.toLowerCase(),
      ].join(", "),
      authors: [{ name: "Decimal Solution" }],
      creator: "Decimal Solution",
      publisher: "Decimal Solution",
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
      openGraph: {
        type: "website",
        locale: "en_US",
        url: jobUrl,
        title: `${jobListing.title} | Decimal Solution Careers`,
        description: `${jobListing.title} - ${jobListing.description.substring(0, 150)}...`,
        siteName: "Decimal Solution",
        images: [
          {
            url: `${baseUrl}/work-with-us/image-1.png`,
            width: 1200,
            height: 630,
            alt: `${jobListing.title} - Decimal Solution Careers`,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: `${jobListing.title} | Decimal Solution Careers`,
        description: `${jobListing.title} - ${jobListing.description.substring(0, 150)}...`,
        images: [`${baseUrl}/work-with-us/image-1.png`],
        creator: "@decimalsolution",
        site: "@decimalsolution",
      },
      alternates: {
        canonical: jobUrl,
      },
      other: {
        "application/ld+json": JSON.stringify({
          "@context": "https://schema.org",
          "@type": "JobPosting",
          title: jobListing.title,
          description: jobListing.description,
          datePosted: new Date(jobListing.createdAt).toISOString(),
          validThrough: new Date(jobListing.jobApplicationDeadline).toISOString(),
          employmentType: jobListing.type,
          hiringOrganization: {
            "@type": "Organization",
            name: "Decimal Solution",
            url: baseUrl,
            logo: `${baseUrl}/logo.png`,
            sameAs: [
              "https://www.facebook.com/decimalsolution",
              "https://www.linkedin.com/company/decimalsolution",
              "https://www.instagram.com/decimalsolution",
            ],
          },
          jobLocation: {
            "@type": "Place",
            address: {
              "@type": "PostalAddress",
              addressLocality: jobListing.location,
              addressCountry: "Pakistan",
            },
          },
          baseSalary: {
            "@type": "MonetaryAmount",
            currency: "PKR",
            value: {
              "@type": "QuantitativeValue",
              minValue: jobListing.minimumJobSalary,
              maxValue: jobListing.maximumJobSalary,
              unitText: "YEAR",
            },
          },
          qualifications: jobListing.minimumQualifications,
          experienceRequirements: jobListing.minimumExperience,
          skills: jobListing.jobSkills,
          responsibilities: jobListing.jobResponsibilities,
          benefits: jobListing.otherBenefits,
        }),
      },
    };
  } catch (error) {
    console.error("Error fetching job data:", error);
    return {
      title: "Job Not Found | Decimal Solution",
      description: "The job you are looking for could not be found.",
    };
  }
}

const SpecificJob: React.FC<Params> = async ({ params }) => {
  const job = params.job;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/jobs/${job}`,

    {
      next: {
        revalidate: 300,
      },
    }
  );

  const data = await res.json();
  const jobListing: Job = data.data;

  return (
    <div>
      <div className="flex flex-col items-stretch gap-16 px-8 py-24 sm:px-12 md:px-20 lg:px-28 xl:px-32 2xl:px-36">
        <div className="mx-auto">
          <p className="landing-page-subheading !mb-4 text-center">Decimal Solution</p>
          <h2 className="landing-page-heading text-center">{jobListing.title}</h2>
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
                <span className="text-base font-light lg:text-lg xl:text-xl 2xl:text-2xl">{jobListing.jobLevel}</span>
              </p>
              <p className="text-base font-medium text-black lg:text-lg xl:text-[28px]">
                Experience Length:{" "}
                <span className="text-base font-light lg:text-lg xl:text-xl 2xl:text-2xl">
                  {jobListing.minimumExperience}
                </span>
              </p>
              <p className="text-base font-medium text-black lg:text-lg xl:text-[28px]">
                Location:{" "}
                <span className="text-base font-light lg:text-lg xl:text-xl 2xl:text-2xl">{jobListing.location}</span>
              </p>
              <p className="text-base font-medium text-black lg:text-lg xl:text-[28px]">
                Application Deadline:{" "}
                <span className="text-base font-light lg:text-lg xl:text-xl 2xl:text-2xl">
                  {new Date(jobListing.jobApplicationDeadline).toLocaleDateString("en-GB", {
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
          <p className="mb-4 text-base font-semibold  text-black lg:text-lg xl:text-[28px]">Job Description:</p>
          <p className="text-base font-light !leading-relaxed lg:text-lg xl:text-2xl">{jobListing.description}</p>
        </div>
        <div>
          <p className="mb-4 text-base font-semibold  text-black lg:text-lg xl:text-[28px]">Job Requirements:</p>
          <p className="text-base font-light !leading-relaxed lg:text-lg xl:text-2xl">{jobListing.jobRequirements}</p>
        </div>
        <div>
          <p className="mb-4 text-base font-semibold  text-black lg:text-lg xl:text-[28px]">Job Responsibilities:</p>
          <p className="text-base font-light !leading-relaxed lg:text-lg xl:text-2xl">
            {jobListing.jobResponsibilities}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SpecificJob;
