import PageIntroduction from "../components/generic/page-introduction";
import { ReactNode } from "react";
import Image from "next/image";


const steps = [
  {
    title: "Resume Submission",
    image: "/hiring-steps/step-1.png",
  },
  {
    title: "Telephonic Interview",
    image: "/hiring-steps/step-2.png",
  },
  {
    title: "Online Skill Assessment",
    image: "/hiring-steps/step-3.png",
  },
  {
    title: "Technical & Final Interview",
    image: "/hiring-steps/step-4.png",
  },
];

interface CareersProps {
    children: ReactNode;
  }

export default function Careers({ children }: CareersProps) {
  return (
    <div>
      <PageIntroduction title={"Careers"} image={"/careers.png"} />

      <div className="p-12 md:p-16 lg:p-20 xl:p-24 flex flex-col gap-8 bg-gray-100">
        <div>
          <p className="landing-page-subheading">Hiring Steps</p>
          <h2 className="landing-page-heading">Our Recruitment Process</h2>
        </div>

        <div className="grid grid-cols-2  md:grid-cols-3 xl:grid-cols-5  min-h-[400px] h-full gap-8 items-center ">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center justify-between h-full ">
              <div className="relative flex-1 h-full w-full">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-contain w-full h-full"
                />
              </div>
              <h3 className="text-sm md:text-base lg:text-lg xl:text-[22px] font-semibold text-center">
                {step.title}
              </h3>
            </div>
          ))}
          <div className="col-span-2 xl:col-span-1 xl:-rotate-90 ">
            <h3 className="text-4xl md:text-[5vw] mt-8 md:mt-0 font-semibold text-primary/30 text-center ">
              JOIN
            </h3>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
