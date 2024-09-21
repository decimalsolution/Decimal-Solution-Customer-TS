import Link from "next/link";
import OurPortfolioContent from "./OurPortfolioContent";
import {  Project } from "../../../../types"; // Assuming these are the correct types
import HeadingText from "./HeadingText";

const OurProjects = async () => {
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

  const projects: Project[] = data1.data;
  const services= data2.data;
  services.unshift({ title : "All" });


  return (
    <div className="flex flex-col flex-wrap justify-center w-full gap-4 py-8 sm:gap-8 lg:gap-12 lg:py-12">
      <div className="ml-24">
        <HeadingText text1="Our" text2="Portfolio" />
      </div>
      <div className="flex flex-col items-center">
        <h2 className="landing-page-heading">Some Latest Client Projects</h2>
      </div>

      {/* <div className="border-2 border-black"> */}
      <OurPortfolioContent projects={projects} services={services} />
      {/* </div> */}

      <div className="flex justify-center">
        <Link
          href="/portfolio"
          className="flex justify-center sm:w-36 md:w-40 md:text-base lg:w-40 lg:py-3 lg:text-lg xl:w-35 xl:text-xl 2xl:w-50 2xl:text-2xl"
        >
          <button className="block rounded-xl bg-primary  px-4 py-2 text-sm font-medium text-white ">
            View All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OurProjects;
