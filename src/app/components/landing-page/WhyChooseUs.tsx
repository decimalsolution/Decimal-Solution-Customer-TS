// import { cn } from "../../../../lib/utils";
import Image from "next/image";
import "./WhyChooseUs.css";
import HeadingText from "./HeadingText";


const WhyChooseUs:React.FC = () => {
  return (
    <div className="flex flex-col  gap-4 p-4 md:gap-8 lg:gap-12 lg:p-12 xl:gap-16 mt-16">
      <div className="2xl:px- ml-8">
        {/* <h2 className="landing-page-heading">Our Working Process</h2> */}
        <div className="mb-12">
          <HeadingText text1="Our Working" text2="Process" />
        </div>
        {/* <p className={cn("landing-page-subheading", "!normal-case")}>
          Why Choose Us
        </p> */}
        <p className=" text-[20px] mt-6">
          We ensure that all your digital needs are met at an affordable price
          and in promised time.
        </p>
      </div>

      <div className="relative grid grid-cols-1 xl:h-[600px] xl:grid-cols-3">
        <Image
          src={"/why-choose-us.webp"}
          alt="Why Choose Us"
          fill
          className="col-span-2 col-start-1 hidden object-contain xl:block"
        />
        <div className="relative my-8 flex h-full grid-rows-4 flex-col gap-4 xl:col-start-3 xl:grid">
          <div className="card card-1">
            <h4 className="text-md  font-semibold md:text-lg lg:text-xl 2xl:text-2xl">
              Product Analysis
            </h4>
            <p className="lg:text-md text-sm md:text-base 2xl:text-lg">
              We analyze your product on market trends and price value to
              observe its life expectancy in the market.
            </p>
          </div>
          <div className="card card-2">
            <h4 className="text-md  font-semibold md:text-lg lg:text-xl 2xl:text-2xl">
              Wireframe or UI/UX Design
            </h4>
            <p className="lg:text-md text-sm md:text-base 2xl:text-lg">
            We suggest solutions or modifications for your product using 
            UI/UX design to enhance creativity and interaction
            </p>
          </div>
          <div className="card card-3">
            <h4 className="text-md  font-semibold md:text-lg lg:text-xl 2xl:text-2xl">
              Product Development
            </h4>
            <p className="lg:text-md text-sm md:text-base 2xl:text-lg">
            We develop high-quality software tailored to your needs, 
            ensuring it complements your business effectively.
            </p>
          </div>
          <div className="card card-4">
            <h4 className="text-md  font-semibold md:text-lg lg:text-xl 2xl:text-2xl">
              Product Testing
            </h4>
            <p className="lg:text-md text-sm md:text-base 2xl:text-lg">
              Our team rigorously tests products for reliability, quality,
              cost-effectiveness, and reduced aftercare.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
