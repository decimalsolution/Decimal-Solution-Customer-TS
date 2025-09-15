import React from "react";
import ApplyForJobForm from "./apply-for-job-form";
import { Job } from "../../../../../types";
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
        title: "Job Application | Decimal Solution",
        description: "Apply for a position at Decimal Solution.",
      };
    }

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://decimalsolution.com";
    const applicationUrl = `${baseUrl}/careers/${job}/apply-for-job`;

    return {
      title: `Apply for ${jobListing.title} | Decimal Solution`,
      description: `Apply for ${jobListing.title} position at Decimal Solution. Join our team and be part of innovative software development projects.`,
      keywords: [
        "job application",
        "careers",
        "employment",
        "decimal solution",
        jobListing.title.toLowerCase(),
        "apply now",
        "software development jobs",
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
        url: applicationUrl,
        title: `Apply for ${jobListing.title} | Decimal Solution`,
        description: `Apply for ${jobListing.title} position at Decimal Solution. Join our team and be part of innovative software development projects.`,
        siteName: "Decimal Solution",
        images: [
          {
            url: `${baseUrl}/work-with-us/image-1.png`,
            width: 1200,
            height: 630,
            alt: `Apply for ${jobListing.title} - Decimal Solution`,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: `Apply for ${jobListing.title} | Decimal Solution`,
        description: `Apply for ${jobListing.title} position at Decimal Solution. Join our team and be part of innovative software development projects.`,
        images: [`${baseUrl}/work-with-us/image-1.png`],
        creator: "@decimalsolution",
        site: "@decimalsolution",
      },
      alternates: {
        canonical: applicationUrl,
      },
    };
  } catch (error) {
    console.error("Error fetching job data:", error);
    return {
      title: "Job Application | Decimal Solution",
      description: "Apply for a position at Decimal Solution.",
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
  const jobListing = data.data;

  return (
    <div>
      <div className="flex flex-col items-stretch gap-2 px-8 py-24 sm:px-12 md:gap-4 md:px-20 lg:gap-8 lg:px-28 xl:px-32 2xl:px-36">
        <ApplyForJobForm job={jobListing} />
      </div>
    </div>
  );
};

export default SpecificJob;
