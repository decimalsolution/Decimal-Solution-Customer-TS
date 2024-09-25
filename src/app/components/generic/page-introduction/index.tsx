import Image from "next/image";
import React from "react";

interface PageIntroductionProps {
    title : string;
    image : string;
  }

const PageIntroduction:React.FC<PageIntroductionProps> = ({ title, image }) => {
  return (
    <div className="relative h-[240px] w-full sm:h-[280px] md:h-[320px] lg:h-[400px] xl:h-[450px] 2xl:h-[500px]">
      <Image src={image} alt="image" priority={true} fill className="z-0 object-cover" />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
        <h2 className="text-center text-2xl font-semibold uppercase text-white md:text-4xl lg:text-5xl 2xl:text-6xl">
          {title}
        </h2>
      </div>
    </div>
  );
}

export default PageIntroduction;
