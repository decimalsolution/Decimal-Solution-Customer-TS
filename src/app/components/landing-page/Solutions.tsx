import HeadingText from "./HeadingText";
import solution from "../../../../public/images/solutions.webp";
import { Service } from "../../../../types";
import Image from "next/image";
import SolutionCard from "./SolutionCard";

const Solutions = async () => {
  let services: Service[] = [];

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/services`, {
      next: {
        revalidate: 300,
      },
    });

    if (!res.ok) {
      throw new Error(`Error: ${res.statusText}`);
    }

    const data = await res.json();
    services = data.data;
  } catch (error) {
    console.error("Failed to fetch services:", error);
    // Optionally, you can return a fallback UI
    return <p>Failed to load Services. Please try again later.</p>;
  }

  const firstItem = services[0];
  const secondItem = services[1];
  const thirdItem = services[2];

  const fourthItem = services[3];
  const fifthItem = services[4];
  const sixthItem = services[5];

  return (
    <section className=" mb-10">
      <div className="my-4 px-2 sm:px-16 xl:ml-14 mb-12">
      <HeadingText text1={"Our"} text2={"Services"} />
      </div>

      <div className="text-center">
        <h2 className=" text-2xl md:text-4xl font-medium">We Provide IT & Business Solutions</h2>
        <p className="text-[#616060] mt-4">
          &quot;Providing cutting-edge IT solutions and business services. Enhancing efficiency, productivity, <br />
          and profitability. Delivering results that matter.&quot;
        </p>
      </div>
      <div className="flex justify-center items-center w-full mt-16">
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex flex-col items-center">
            <div className="relative flex justify-around items-center border-2 border-primary shadow-lg p-3 w-[340px] sm:w-[400px] md:w-[300px] lg:w-[250px] xl:w-[340px] h-[130px] text-center m-6 sm:mt-6 group overflow-hidden">
              <SolutionCard service={firstItem} href={"/services/website-development"} />
            </div>

            <div className="relative flex justify-around items-center lg:mr-14 xl:mr-24 border-2 border-primary shadow-lg p-3 w-[340px] sm:w-[400px] md:w-[300px] lg:w-[250px] xl:w-[340px] h-[130px] text-center m-6 sm:mt-6 group overflow-hidden">
              <SolutionCard service={secondItem} href={"/services/erp"} />
            </div>

            <div className="relative flex justify-around items-center border-2 border-primary shadow-lg p-3 w-[340px] sm:w-[400px] md:w-[300px] lg:w-[250px] xl:w-[340px] h-[130px] text-center m-6 sm:mt-6 group overflow-hidden">
              <SolutionCard service={thirdItem} href={"/services/mobile-app-development"} />
            </div>
          </div>

          <div className="hidden lg:block lg:items-center">
            <Image src={solution} alt="Services" loading="lazy" className="w-150 h-150" />
          </div>

          <div className="flex flex-col items-center">
            <div className="relative flex justify-around items-center border-2 border-primary shadow-lg p-3 w-[340px] sm:w-[400px] md:w-[300px] lg:w-[250px] xl:w-[340px] h-[130px] text-center m-6 sm:mt-6 group overflow-hidden">
              <SolutionCard service={fourthItem} href={"/services/ar-vr"} />
            </div>

            <div className="relative flex justify-around items-center lg:ml-14 xl:ml-24 border-2 border-primary shadow-lg p-3 w-[340px] sm:w-[400px] md:w-[300px] lg:w-[250px] xl:w-[340px] h-[130px] text-center m-6 sm:mt-6 group overflow-hidden">
              <SolutionCard service={fifthItem} href={"/services/graphics-designing"} />
            </div>

            <div className="relative flex justify-around items-center border-2 border-primary shadow-lg p-3 w-[340px] sm:w-[400px] md:w-[300px] lg:w-[250px] xl:w-[340px] h-[130px] text-center m-6 sm:mt-6 group overflow-hidden">
              <SolutionCard service={sixthItem} href={"/services/digital-marketing"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
