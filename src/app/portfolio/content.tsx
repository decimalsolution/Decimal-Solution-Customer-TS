"use client";

import Carousel from "../components/generic/carousel";
import { cn } from "../../../lib/utils";
import { Link } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";
import { SwiperSlide } from "swiper/react";
// import NextLink from "next/link";
import ServiceCard from "../components/generic/service-card";
import { ProjectGroup, Project } from "../../../types";

interface PortfolioContentProps {
    groups:ProjectGroup[];
    recentProjects: Project[];
    categories: string[];
}

const PortfolioContent:React.FC<PortfolioContentProps> = ({
  groups,
  recentProjects,
  categories,
}) => {

  const [selected, setSelected] = useState<string>("All");

  const filteredGroups = useMemo(() => {
    return groups.filter(
      (group) => group.category === selected || selected === "All",
    );
  }, [selected, groups]);

  return (
    <div className="flex flex-col items-center gap-5 pt-24">
      <div className="mb-16 flex flex-wrap items-center justify-center gap-4">
        {categories.map((category, index) => (
          <button
            key={"our-projects-buttons-" + index + "-key" + category}
            className={cn(
              "rounded-lg border px-4 py-2 text-xs transition-all duration-200 hover:bg-primary hover:text-white sm:text-sm md:text-base lg:text-lg xl:text-xl",
              selected === category ? "bg-primary text-white" : '',
            )}
            onClick={() => {
              setSelected(category);
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {filteredGroups.map((group, index) => (
        <div
          className="mb-16 flex w-full flex-col items-center"
          key={"our-projects-group-" + index + "-key" + group.category}
        >
          <p
            className={cn(
              "landing-page-subheading",
              "!mb-8 w-full px-24 text-center",
            )}
          >
            {group.category}
          </p>
          <Carousel>
            {group.projects.map((item, i) => (
              <SwiperSlide key={"our-projects-" + i + "-key" + item.title}>
                <div className="group relative flex h-full w-full flex-col items-center justify-center gap-8 overflow-hidden rounded-3xl border-[3px] border-primary ">
                  <div>
                    <Image
                      src={item.coverImage}
                      alt={item.title}
                      fill
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-primary/90 p-8 opacity-0 transition-all duration-500 group-hover:opacity-100">
                    <h4 className="text-center text-lg font-bold uppercase text-white md:text-xl lg:text-2xl xl:text-3xl">
                      {item.title}
                    </h4>
                    <p className="md:text-md line-clamp-6 text-center text-sm text-white lg:text-lg xl:text-xl">
                      {item.shortDescription}
                    </p>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="grid h-10 w-10 place-items-center rounded-full bg-white text-primary 2xl:h-16 2xl:w-16">
                        <Link strokeWidth={3} className="h-1/2 w-1/2" />
                      </div>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Carousel>
        </div>
      ))}

      <div>
        <p className="landing-page-subheading text-center">Our Projects</p>
        <h2 className="landing-page-heading">Some Latest Client Projects</h2>
      </div>

      {recentProjects?.map((project, index) => (
        <ServiceCard
          key={"our-projects-card-" + index + "-key" + project.title}
          title={project.title}
          description={project.description}
          image={project.coverImage}
          showBackground
          showButton
          buttonText='View Demo'
          reverse={index % 2 !== 0}
          link={project.link}
          externalLink
        />
      ))}
    </div>
  );
}

export default PortfolioContent;
