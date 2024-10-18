"use client";

import { cn } from "../../../../lib/utils";
import Image from "next/image";
import CountUp from "react-countup";

interface DataItem {
    title: string;
    icon: string;
    amount: string;
  }

  const data: DataItem[] = [
    {
      title: "Years of Operation",
      icon: "/icons/years-of-operation.svg",
      amount: "10",
    },
    {
      title: "Completed Projects",
      icon: "/icons/completed-projects.svg",
      amount: "150",
    },
    {
      title: "Loyal Clients",
      icon: "/icons/loyal-clients.svg",
      amount: "70",
    },
    {
      title: "New Projects",
      icon: "/icons/new-projects.svg",
      amount: "07",
    },
  ];


const NumberOfAchievements:React.FC = () => {
  return (
    <div className="relative  flex flex-col items-center gap-16 bg-[url('/our-achievements-bg.webp')] bg-cover bg-center p-12 lg:p-16">
      <div className="absolute inset-0 bg-primary/80"></div>
      <div className="z-10 flex flex-col items-center">
        <div>
          <p
            className={cn(
              "landing-page-subheading",
              "!mb-4 text-center !normal-case !text-white",
            )}
          >
            Some Facts
          </p>
          <h2 className={cn("landing-page-heading", "!text-white")}>
            Number of Achievements
            {/* <HeadingText text1="Number Of" text2="Achievements"/> */}
          </h2>
        </div>
      </div>

      <div className="grid w-full max-w-[1600px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16 xl:grid-cols-4">
        {data.map((item, i) => (
          <div
            key={i}
            data-aos="flip-down"
            data-aos-once="true"
            className="before:content-[' '] relative flex aspect-square h-full w-full flex-col items-center justify-center before:absolute before:left-0 before:right-0 before:top-0 before:block before:h-2/5 before:border before:border-b-0 before:border-white after:absolute after:bottom-0 after:left-0 after:right-0 after:block after:h-2/5 after:border after:border-t-0 after:border-white after:content-['']"
          >
            <div className="relative mb-4 ">
              <Image src={item.icon} loading="lazy" width={75} height={75} alt={item?.title} />
            </div>
            <h3 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl 2xl:text-7xl">
              <CountUp end={parseInt(item.amount)} duration={3} delay={1} />
              {/* {item.amount} */}
            </h3>
            <p className="text-center text-xl text-white lg:text-2xl 2xl:text-3xl">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NumberOfAchievements;
