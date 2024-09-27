import HeadingText from "./HeadingText";
import solution from "../../../../public/images/solutions.png";
import { Link } from "lucide-react";
import { Service } from "../../../../types";
import Image from "next/image";
import NextLink from "next/link";


const Solutions = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/services`, {
    next: {
      revalidate: 300,
    },
  });
  const data = await res.json();
  const services: Service[] = data.data;

  // const firstThreeItems = services.slice(0, 3);
  // const nextThreeItems = services.slice(3, 6);

  const firstItem = services[0];
  const secondItem = services[1];
  const thirdItem = services[2];

  const fourthItem = services[3];
  const fifthItem = services[4];
  const sixthItem = services[5];

  return (
    <section className=" mb-10  ">
      <div className="my-4 px-16  xl:ml-14 mb-12">
        <HeadingText text1={"Our"} text2={"Services"} />
      </div>

      <div className="text-center">
        <h2 className=" text-2xl md:text-4xl font-medium">
          We Provide IT & Business Solutions
        </h2>
        <p className="text-[#616060] mt-4">
        &quot;Providing cutting-edge IT solutions and business services. Enhancing
          efficiency, productivity, <br />
          and profitability. Delivering results that matter.&quot;
        </p>
      </div>

      <div className="flex justify-center  items-center  w-full mt-16">
        <div className="flex flex-col md:flex-row items-center ">
          {/* Left Column */}
          <div className="flex flex-col items-center ">
            
            {/* Box 1 */}
            <div className="relative flex justify-around items-center shadow-[0_6px_6px_0_rgba(0,0,0,0.2)] p-3 w-[340px] sm:w-[400px] md:w-[300px] lg:w-[250px] xl:w-[340px] h-[130px] text-center m-6 sm:mt-6 group overflow-hidden">
              <div className="">
                <Image
                  src={firstItem.homeImage}
                  width={100}
                  height={100}
                  alt="Web Development"
                  className="w-[80px] md:w-[70px] lg:w-[50px] xl:w-[70px]"
                />
              </div>
              <div className="text-left ml-6 sm:ml-4 lg:ml-8 xl:ml-6 w-full">
                <h3 className="text-[17px] md:text-[15px] xl:text-[20px] font-bold">
                  {firstItem.title}
                </h3>
                <p className="text-[#616060] text-[14px] md:text-[12px] xl:text-[15px]">
                  {firstItem.shortDescription}
                </p>
              </div>

              {/* Overlay */}
              <div className="flex justify-center items-center text-white absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-90 transition-opacity duration-300">
                <NextLink
                  href="/services/website-development"
                  aria-label="Web Development"
                >
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-white text-primary 2xl:h-16 2xl:w-16">
                    <Link strokeWidth={3} className="h-1/2 w-1/2" />
                  </div>
                </NextLink>
              </div>
            </div>

            {/* Box 2  */}

            <div className="relative flex justify-around items-center lg:mr-14 shadow-[0_6px_6px_0_rgba(0,0,0,0.2)] p-3 w-[340px] sm:w-[400px] md:w-[300px] lg:w-[250px] xl:w-[340px] h-[130px] text-center m-6 sm:mt-6 group overflow-hidden">
              <div className="">
                <Image
                  src={secondItem.homeImage}
                  width={100}
                  height={100}
                  alt="ERP Solutions"
                  className="w-[80px] md:w-[70px] lg:w-[50px] xl:w-[70px]"
                />
              </div>
              <div className="text-left ml-6 sm:ml-4 lg:ml-8 xl:ml-6 mr- w-full ">
                <h3 className="text-[17px]  md:text-[15px] xl:text-[20px] font-bold">
                  {secondItem.title}
                </h3>
                <p className="text-[#616060] text-[14px] md:text-[12px] xl:text-[15px] ">
                  {secondItem.shortDescription}
                </p>
              </div>

              {/* Overlay */}
              <div className="flex justify-center items-center text-white absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-90 transition-opacity duration-300">
                <NextLink
                  href="/services/erp"
                  aria-label="ERP Solutions"
                >
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-white text-primary 2xl:h-16 2xl:w-16">
                    <Link strokeWidth={3} className="h-1/2 w-1/2" />
                  </div>
                </NextLink>
              </div>
              
            </div>

            {/* Box 3  */}
            <div className="relative flex justify-around items-center shadow-[0_6px_6px_0_rgba(0,0,0,0.2)] p-3 w-[340px] sm:w-[400px] md:w-[300px] lg:w-[250px] xl:w-[340px] h-[130px] text-center m-6 sm:mt-6 group overflow-hidden">
              <div className="">
                <Image
                  src={thirdItem.homeImage}
                  width={100}
                  height={100}
                  alt="Mobile app development"
                  className="w-[80px] md:w-[70px] lg:w-[50px] xl:w-[70px]"
                />
              </div>
              <div className="text-left ml-6 sm:ml-4 lg:ml-8 xl:ml-6 mr- w-full ">
                <h3 className="text-[17px] md:text-[15px] xl:text-[20px] font-bold">
                  {thirdItem.title}
                </h3>
                <p className="text-[#616060] text-[14px] md:text-[12px] xl:text-[15px] ">
                  {thirdItem.shortDescription}
                </p>
              </div>

              {/* Overlay */}
                <div className="flex justify-center items-center text-white absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-90 transition-opacity duration-300">
                    <NextLink
                    href="/services/mobile-app-development"
                    aria-label="Mobile app development"
                    >
                    <div className="grid h-10 w-10 place-items-center rounded-full bg-white text-primary 2xl:h-16 2xl:w-16">
                        <Link strokeWidth={3} className="h-1/2 w-1/2" />
                    </div>
                    </NextLink>
                </div>

            </div>            

          </div>

          {/* Center Image */}
          <div className=" hidden lg:block lg:items-center">
            <Image src={solution} alt="Center Image" className="w-150 h-150" />
          </div>

          {/* Right Column */}
          <div className="flex flex-col items-center ">
            {/* Box 4  */}
            <div className="relative flex justify-around items-center shadow-[0_6px_6px_0_rgba(0,0,0,0.2)] p-3 w-[340px] sm:w-[400px] md:w-[300px] lg:w-[250px] xl:w-[340px] h-[130px] text-center m-6 sm:mt-6 group overflow-hidden">
              <div className="">
                <Image
                  src={fourthItem.homeImage}
                  width={100}
                  height={100}
                  alt="Ar/Vr Games"
                  className="w-[80px] md:w-[70px] lg:w-[50px] xl:w-[70px]"
                />
              </div>
              <div className="text-left ml-6 sm:ml-4 lg:ml-8 xl:ml-6 mr- w-full ">
                <h3 className="text-[17px] md:text-[15px] xl:text-[20px] font-bold">
                  {fourthItem.title}
                </h3>
                <p className="text-[#616060] text-[14px] md:text-[12px] xl:text-[15px] ">
                  {fourthItem.shortDescription}
                </p>
              </div>

              {/* Overlay */}
              <div className="flex justify-center items-center text-white absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-90 transition-opacity duration-300">
                    <NextLink
                    href="/services/ar-vr"
                    aria-label="Ar/Vr Games"
                    >
                    <div className="grid h-10 w-10 place-items-center rounded-full bg-white text-primary 2xl:h-16 2xl:w-16">
                        <Link strokeWidth={3} className="h-1/2 w-1/2" />
                    </div>
                    </NextLink>
                </div>

            </div>

            {/* Box 5  */}
            <div className="relative flex justify-around items-center lg:ml-14 shadow-[0_6px_6px_0_rgba(0,0,0,0.2)] p-3 w-[340px] sm:w-[400px] md:w-[300px] lg:w-[250px] xl:w-[340px] h-[130px] text-center m-6 sm:mt-6 group overflow-hidden">
              <div className="">
                <Image
                  src={fifthItem.homeImage}
                  width={100}
                  height={100}
                  alt="Graphic Designing"
                  className="w-[80px] md:w-[70px] lg:w-[50px] xl:w-[70px]"
                />
              </div>
              <div className="text-left ml-6 sm:ml-4 lg:ml-8 xl:ml-6 mr- w-full ">
                <h3 className="text-[17px] md:text-[15px] xl:text-[20px] font-bold">
                  {fifthItem.title}
                </h3>
                <p className="text-[#616060] text-[14px] md:text-[12px] xl:text-[15px] ">
                  {fifthItem.shortDescription}
                </p>
              </div>

              {/* Overlay */}
              <div className="flex justify-center items-center text-white absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-90 transition-opacity duration-300">
                    <NextLink
                    href="/services/graphics-designing"
                    aria-label="Graphic Designing"
                    >
                    <div className="grid h-10 w-10 place-items-center rounded-full bg-white text-primary 2xl:h-16 2xl:w-16">
                        <Link strokeWidth={3} className="h-1/2 w-1/2" />
                    </div>
                    </NextLink>
                </div>

            </div>

            {/* Box 6 */}
            <div className="relative flex justify-around items-center shadow-[0_6px_6px_0_rgba(0,0,0,0.2)] p-3 w-[340px] sm:w-[400px] md:w-[300px] lg:w-[250px] xl:w-[340px] h-[130px] text-center m-6 sm:mt-6 group overflow-hidden">
              <div className="">
                <Image
                  src={sixthItem.homeImage}
                  width={100}
                  height={100}
                  alt="Digital Marketing"
                  className="w-[80px] md:w-[70px] lg:w-[50px] xl:w-[70px]"
                />
              </div>
              <div className="text-left ml-6 sm:ml-4 lg:ml-8 xl:ml-6 mr- w-full ">
                <h3 className="text-[17px] md:text-[15px] xl:text-[20px] font-bold">
                  {sixthItem.title}
                </h3>
                <p className="text-[#616060]  text-[14px] md:text-[12px] xl:text-[15px] ">
                  {sixthItem.shortDescription}
                </p>
              </div>

              {/* Overlay */}
              <div className="flex justify-center items-center text-white absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-90 transition-opacity duration-300">
                    <NextLink
                    href="/services/digital-marketing"
                    aria-label="Digital Marketing"
                    >
                    <div className="grid h-10 w-10 place-items-center rounded-full bg-white text-primary 2xl:h-16 2xl:w-16">
                        <Link strokeWidth={3} className="h-1/2 w-1/2" />
                    </div>
                    </NextLink>
                </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
