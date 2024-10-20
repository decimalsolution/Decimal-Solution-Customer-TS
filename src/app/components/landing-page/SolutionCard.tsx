import React from "react";
import Image from "next/image";
import NextLink from "next/link";
import { Service } from "../../../../types";
import { Link } from "lucide-react"; // Don't forget to import Link from lucide-react

interface SolutionCardProps {
    service: Service; // Rename to 'service' to match the usage
    href: string
}

const SolutionCard: React.FC<SolutionCardProps> = ({ service , href }) => {
  return (
    // <div className="relative flex justify-around items-center border-2 border-[#A1258F] shadow-lg p-3 w-[340px] sm:w-[400px] md:w-[300px] lg:w-[250px] xl:w-[340px] h-[130px] text-center m-6 sm:mt-6 group overflow-hidden">
      <>
      <div className="">
        <Image
          src={service.homeImage}
          width={100}
          height={100}
          loading="lazy"
          alt={service.title} // Use service.title for alt text
          className="w-[80px] md:w-[70px] lg:w-[50px] xl:w-[70px]"
        />
      </div>
      <div className="text-left ml-6 sm:ml-4 lg:ml-8 xl:ml-6 w-full">
        <h3 className="text-[17px] md:text-[15px] xl:text-[20px] font-bold">
          {service.title}
        </h3>
        <p className="text-[#616060] text-[14px] md:text-[12px] xl:text-[15px]">
          {service.shortDescription}
        </p>
      </div>

      {/* Overlay */}
      <div className="flex justify-center items-center text-white absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-90 transition-opacity duration-300">
        <NextLink href={href} aria-label={service.title}>
          <div className="grid h-10 w-10 place-items-center rounded-full bg-white text-primary 2xl:h-16 2xl:w-16">
            <Link strokeWidth={3} className="h-1/2 w-1/2" />
          </div>
        </NextLink>
      </div>
    {/* </div> */}
    </>
  );
};

export default SolutionCard;
