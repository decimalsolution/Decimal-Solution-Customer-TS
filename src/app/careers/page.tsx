import AvailableJobs from "./available-jobs";
import { Job } from "../../../types";
import Image from "next/image";
import Head from "next/head";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | Decimal Solution - Join Our Team",
  description:
    "Join the innovation journey at Decimal Solution. Explore exciting career opportunities in Web and Mobile Development, ERP Solutions, AR/VR, Game Development, Graphics Designing, and Digital Marketing. Elevate your career with us and be a part of cutting-edge solutions.",
  keywords: [
    "careers",
    "jobs",
    "employment opportunities",
    "software development jobs",
    "web development careers",
    "mobile app development jobs",
    "ERP developer jobs",
    "AR/VR developer positions",
    "game development careers",
    "graphics design jobs",
    "digital marketing careers",
    "IT jobs",
    "tech careers",
    "decimal solution careers",
    "join our team",
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
    url: "https://decimalsolution.com/careers",
    title: "Careers | Decimal Solution - Join Our Team",
    description:
      "Join the innovation journey at Decimal Solution. Explore exciting career opportunities in Web and Mobile Development, ERP Solutions, AR/VR, Game Development, Graphics Designing, and Digital Marketing.",
    siteName: "Decimal Solution",
    images: [
      {
        url: "https://decimalsolution.com/work-with-us/image-1.png",
        width: 1200,
        height: 630,
        alt: "Decimal Solution Careers - Join Our Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers | Decimal Solution - Join Our Team",
    description:
      "Join the innovation journey at Decimal Solution. Explore exciting career opportunities in Web and Mobile Development, ERP Solutions, AR/VR, Game Development, Graphics Designing, and Digital Marketing.",
    images: ["https://decimalsolution.com/work-with-us/image-1.png"],
    creator: "@decimalsolution",
    site: "@decimalsolution",
  },
  alternates: {
    canonical: "https://decimalsolution.com/careers",
  },
};

export default async function Careers() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/jobs`, {
    next: {
      revalidate: 300,
    },
  });

  const data = await res.json();
  const jobs: Job[] = data.data;

  return (
    <div>
      <Head>
        {jobs.map((job, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "JobPosting",
                title: job.title,
                description: job.description,
                employmentType: job.category,
                hiringOrganization: {
                  "@type": "Organization",
                  name: "Decimal Solution",
                  sameAs: "https://decimalsolutions.com",
                },
                jobLocation: {
                  "@type": "Place",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: job.location,
                    addressCountry: "Pakistan",
                  },
                },
                baseSalary: {
                  "@type": "MonetaryAmount",
                  currency: "USD",
                  value: {
                    "@type": "QuantitativeValue",
                    minValue: job.minimumJobSalary,
                    maxValue: job.maximumJobSalary,
                    unitText: "YEAR",
                  },
                },
              }),
            }}
          />
        ))}
      </Head>

      <div className="flex flex-col-reverse gap-8 px-8 py-24 sm:px-12 md:px-20 lg:px-28 xl:flex-row xl:px-32 2xl:gap-16 2xl:px-36">
        <div className="flex-[3]">
          <p className="landing-page-subheading">Job Positions</p>
          <h2 className="landing-page-heading mb-8">Start Work with Us!</h2>
          <p className="text-sm !leading-loose md:text-base lg:text-lg xl:text-xl 2xl:text-[25px]">
            If you are passionate about providing solutions to IT needs then Decimal Solution is a perfect place for you
            to work. We believe in serving our customers with the best by using the right tools. If you have it in you
            to contribute to the digital world; submit your resume today and we&apos;ll get back to you.
          </p>
          <h3 className="mb-4 mt-6 text-sm font-semibold md:mb-5 md:mt-8 md:text-base lg:mb-6 lg:mt-10 lg:text-lg xl:mb-8 xl:mt-12 xl:text-xl 2xl:text-[25px]">
            Why Work with Us?
          </h3>
          <p className="text-sm !leading-loose md:text-base lg:text-lg xl:text-xl 2xl:text-[25px]">
            Decimal Solution provides a challenging yet innovative platform for all the enthusiasts looking to leave a
            mark in the digital world. We provide a comfortable and friendly working environment, market-competitive
            salaries, and continuous opportunities for growth by increasing your learning while working with us.
          </p>
        </div>

        {/* Grid */}
        <div className="grid h-full max-h-[800px] flex-[2] grid-cols-[repeat(16,minmax(0,1fr))] grid-rows-[repeat(26,minmax(0,1fr))]">
          <Image
            src="/work-with-us/image-1.png"
            alt="Work with us"
            height={100}
            width={100}
            className="col-span-9 col-start-1 row-span-13 row-start-5 h-full w-full object-cover"
          />

          <Image
            src="/work-with-us/image-2.png"
            alt="Work with us"
            height={100}
            width={100}
            className="col-span-6 col-start-11 row-span-9 h-full w-full object-cover"
          />

          <Image
            src="/work-with-us/image-3.png"
            alt="Work with us"
            height={100}
            width={100}
            className="col-span-7 col-start-3 row-span-full row-start-[19] h-full w-full object-cover"
          />

          <Image
            src="/work-with-us/image-4.png"
            alt="Work with us"
            height={100}
            width={100}
            className="col-span-full col-start-[11] row-span-full row-start-[11] h-full w-full object-cover"
          />
        </div>
      </div>

      <AvailableJobs jobs={jobs} />
    </div>
  );
}
