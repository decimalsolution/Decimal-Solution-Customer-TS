"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import OurPortfolioContent from "./OurPortfolioContent";
import { Service, Project } from '../../../../types'; // Assuming these are the correct types
import HeadingText from "./HeadingText";

const OurProjects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [services, setServices] = useState<Service[]>([]);
//   const [loading, setLoading] = useState<boolean>(true); // Optional loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [res1, res2] = await Promise.all([
          fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/homeScreenProjects/all`, {
            next: { revalidate: 300 },
          }),
          fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/activeservices`, {
            next: { revalidate: 300 },
          }),
        ]);

        const data1 = await res1.json();
        const data2 = await res2.json();

        setProjects(data1.data);
        setServices([{ title: "All" }, ...data2.data]); // Add 'All' at the beginning of the services array
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        // setLoading(false); // Stop loading once data is fetched
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs only once on mount

//   if (loading) {
//     return <p>Loading...</p>; // You can replace this with a loading spinner or skeleton UI
//   }

  return (
    <div className="flex flex-col flex-wrap justify-center gap-4 py-8 sm:gap-8 lg:gap-12 lg:py-12">
        <div className="ml-24">
            <HeadingText text1="Our" text2="Portfolio"/>
        </div>
      <div className="flex flex-col items-center">
          <h2 className="landing-page-heading">Some Latest Client Projects</h2>
      </div>

      <OurPortfolioContent projects={projects} services={services} />

      <Link href="/portfolio" className="flex justify-center">
        <button className="block rounded-xl bg-primary px-4 py-2 text-sm font-medium text-white sm:w-36 md:w-40 md:text-base lg:w-56 lg:py-4 lg:text-lg xl:w-64 xl:text-xl 2xl:w-72 2xl:text-2xl">
          View All
        </button>
      </Link>
    </div>
  );
};

export default OurProjects;
