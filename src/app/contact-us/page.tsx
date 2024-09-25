
import CustomInput from "../components/generic/custom-input";
import CustomTextArea from "../components/generic/custom-textarea";
import PageIntroduction from "../components/generic/page-introduction";
// import { Facebook, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
// import Link from "next/link";
import { Metadata , ContactInfo } from "../../../types";


export const metadata:Metadata = {
  title: "Contact Us",
  description:
    "Connect with Decimal Solutions - Your gateway to unparalleled expertise in Web and Mobile Development, ERP Solutions, AR/VR, Game Development, Graphics Designing, and Digital Marketing. Reach out for a seamless collaboration and elevate your digital presence",
};


const ContactUs = async () => {
  const data = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/contactUs`, {
    next: {
      revalidate: 300,
    },
  });

  const response = await data.json();
  const contactInfo:ContactInfo = response.data[0];
  console.log(contactInfo);

  return (
    <div>
      <PageIntroduction title="Contact Us" image={"/contact-us.png"} />
      <div className="mb-4 flex flex-col items-stretch justify-center gap-4 lg:flex-row xl:gap-16">
        <div className="relative flex flex-1 flex-col gap-8 bg-gray-100  p-4 px-16 py-8 md:py-12 lg:px-8 lg:py-16 xl:!px-[60px] xl:py-20  2xl:py-24 ">
          <div className="absolute right-0 top-0 hidden h-full w-[50px] py-24 xl:block">
            <div className="h-full w-full bg-primary/70"></div>
          </div>
          <div>
            <h2 className="landing-page-heading">Get in Touch with Us</h2>
          </div>
          <div className="border-l-4 border-primary pl-8">
            <h3 className="mb-2  text-primary md:text-lg lg:text-xl xl:text-[25px]">
              Contact Number:
            </h3>
            <p className=" md:text-lg lg:text-xl xl:text-[25px]">
              {" "}
              {contactInfo.primaryContact}{" "}
            </p>
          </div>
          <div className="border-l-4 border-primary pl-8">
            <h3 className="mb-2  text-primary md:text-lg lg:text-xl xl:text-[25px]">
              Email:
            </h3>
            <p className=" md:text-lg lg:text-xl xl:text-[25px]">
              {contactInfo.primaryEmail}
            </p>
          </div>
          <div className="border-l-4 border-primary pl-8">
            <h3 className="mb-2  text-primary md:text-lg lg:text-xl xl:text-[25px]">
              Office Address:
            </h3>
            <p className=" md:text-lg lg:text-xl xl:text-[25px]">
              {contactInfo.primaryAddress}
            </p>
          </div>
          <div className="flex items-center justify-center gap-4 sm:justify-start xl:gap-6 2xl:gap-8">
            <a
              href={contactInfo.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/Social Icons/purple/facebook.png"
                alt="facebook logo"
                width={100}
                height={100}
                className="h-7 w-7 sm:h-9 sm:w-9 lg:h-11 lg:w-11"
              />
            </a>

            <a
              href={contactInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/Social Icons/purple/instagram-2.png"
                alt="instagram logo"
                width={100}
                height={100}
                className="h-7 w-7 sm:h-9 sm:w-9 lg:h-11 lg:w-11"
              />
            </a>
            <a
              href={contactInfo.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/Social Icons/purple/linkedin.png"
                alt="linkedin logo"
                width={100}
                height={100}
                className="h-7 w-7 sm:h-9 sm:w-9 lg:h-11 lg:w-11"
              />
            </a>

            <a
              href={contactInfo.youtube}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/Social Icons/purple/youtube.png"
                alt="youtube logo"
                width={100}
                height={100}
                className="h-7 w-7 sm:h-9 sm:w-9 lg:h-11 lg:w-11"
              />
            </a>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-4 p-4 px-16 py-8 md:py-12 lg:gap-8 lg:px-8 lg:py-16 xl:py-20 xl:pr-36 2xl:py-24">
          <div>
            <h2 className="landing-page-heading">Fill up the Form</h2>
          </div>
          <div className="grid gap-4 lg:gap-8 xl:grid-cols-2">
            <CustomInput placeholder="Full Name" />
            <CustomInput placeholder="Email" type="email" />
            <CustomInput
              placeholder="Interested In"
              className="xl:col-span-2"
            />
            <CustomTextArea
              placeholder="Write your Message"
              className="xl:col-span-2"
            />
          </div>
          <button className="self-center rounded-lg bg-primary px-6 py-2 text-base text-white md:px-8 md:py-3 md:text-lg lg:px-12 lg:py-4 lg:text-xl xl:self-end xl:px-16 xl:text-2xl">
            Get Quote
          </button>
        </div>
      </div>
      <div className="relative aspect-[1.5] md:aspect-[2.5] lg:aspect-[3]">
        <Image
          src="/location.png"
          fill
          alt="location"
          quality={100}
          className="object-cover"
        />
      </div>
    </div>
  );
}


export default ContactUs;