"use client";

import { cn } from "../../../../lib/utils";
import { useMemo, useState } from "react";
import Carousel from "../generic/carousel";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Link } from "lucide-react";
import NextLink from "next/link";
import { Service , Project } from '../../../../types';

interface OurProjectsContentProps {
    projects: Project[];
    services: Service[];
  }

const buttons = [
  "All",
  "Web Development",
  "Mobile Development",
  "Graphic Designing",
  "Digital Marketing",
  "ERP & Business Solutions",
  "AR/VR Games",
];

const OurProjectsContent:React.FC<OurProjectsContentProps> = ({ projects, services }) => {
  const [selected, setSelected] = useState<string>("All");

  const filteredProjects = useMemo(() => {
    if (selected === "All") {
      return projects;
    } else {
      return projects.filter(
        (item) =>
          item.category?.title?.toLowerCase() === selected.toLowerCase(),
      );
    }
  }, [selected, projects]);

  return (
    <>
      <div className=" flex flex-wrap items-center  justify-center gap-2 sm:gap-4">
        {services.map((service, index) => (
          <button
            key={"our-projects-buttons-" + index + "-key"}
            className={cn(
                "rounded-lg border px-4 py-2 text-xs transition-all duration-200 hover:bg-primary hover:text-white sm:text-sm md:text-base lg:text-md",
                selected === service.title ? "bg-primary text-white" : ""
              )}
              
            onClick={() => {
              setSelected(service.title);
            }}
          >
            {service.title}
          </button>
        ))}
      </div>

      <div className="flex justify-center w-full">
        <Carousel className="">
          {filteredProjects.map((item, index) => (
            <SwiperSlide key={"our-projects-" + index + "-key"}>
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
                    aria-label={item.title}
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
    </>
  );
}


export default OurProjectsContent;