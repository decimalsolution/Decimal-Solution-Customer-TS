// 'use client'

import { cn } from "../../../../../lib/utils";
import Image from "next/image";
import Link from "next/link";
// import { useState , useMemo } from "react";

interface Service {
  reverse: boolean;
  title: string;
  description: string;
  image: string;
  showButton?: boolean;
  link?: string;
  buttonText?: string;
  externalLink?: boolean;
  showBackground?: boolean;
}

const ServiceCard: React.FC<Service> = ({ reverse, title, description, image, showButton, link, buttonText, showBackground, externalLink,}) => {
  
  
  return (
    <div
      className={cn(
        "flex flex-col xl:flex-row items-stretch justify-between xl:gap-16 2xl:gap-20 p-8 md:p-12 lg:p-16 xl:p-20 2xl:p-24 w-full",
        reverse ? "xl:flex-row-reverse" : "",
        showBackground ? "bg-primary/[0.15]" : ''
      )}
    >
      <div
        className={cn(
          "flex-[2] flex flex-col gap-8",
          reverse ? "items-end" : ""
        )}
      >
        <div className=" w-24 md:w-28 xl:w-32 h-2 bg-primary"></div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-[40px] uppercase font-semibold">
          {title}
        </h2>
        <p
          className={cn(
            "text-base md:text-lg lg:text-xl 2xl:text-2xl md:!leading-normal lg:!leading-relaxed xl:!leading-loose",
            reverse ? "text-right" : ""
          )}
        >
          {description}
        </p>
        {showButton && link && ( // Only render Link if link is defined
          <Link href={link} rel="noopener noreferrer" target={externalLink ? "_blank" : "_self"}>
            <button className={cn("text-base md:text-lg xl:text-xl text-white bg-primary px-4 md:px-8 lg:px-12 xl:px-16 py-2 md:py-3 lg:py-4 rounded-md md:rounded-lg lg:rounded-xl", reverse ? "self-end" : "self-start")}>
              {buttonText}
            </button>
          </Link>
        )}
      </div>
      <div
        className={cn(
          "hidden xl:block flex-1 relative xl:h-[330px] xl:w-[500px] 2xl:h-[400px] 2xl:w-[600px]  before:content-[''] before:absolute before:w-3/4 before:h-3/4 before:bg-primary before:-bottom-8 mb-8 before:blur-[1px]",
          reverse ? "before:-right-8 mr-8" : "before:-left-8 ml-8"
        )}
      >
        <Image
          src={image}
          fill
          alt="web-development"
          className="object-cover "
        />
      </div>
    </div>
  );
};

export default ServiceCard;
