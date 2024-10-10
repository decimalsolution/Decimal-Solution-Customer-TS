import Image from "next/image";
import PageIntroduction from "../components/generic/page-introduction";
import { ContactInfo } from "../../../types";
import Form from "./Form";
import { Metadata } from "../../../types";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Connect with Decimal Solutions - Your gateway to unparalleled expertise in Web and Mobile Development, ERP Solutions, AR/VR, Game Development, Graphics Designing, and Digital Marketing. Reach out for a seamless collaboration and elevate your digital presence",
};

const ContactUs = async () => {
  const data = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/contactUs`, {
    next: { revalidate: 300 },
  });
  const response = await data.json();
  const contactInfo: ContactInfo = response.data[0];

  return (
    <div>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Decimal Solution",
              url: "https://decimalsolution.com",
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: contactInfo.primaryContact,
                  contactType: "Customer Service",
                  areaServed: "Worldwide",
                  availableLanguage: ["English"],
                },
              ],
              address: {
                "@type": "PostalAddress",
                streetAddress: contactInfo.primaryAddress,
                addressLocality: "Islamabad",
                addressRegion: "Islamabad",
                postalCode: "44790",
                addressCountry: "Pakistan",
              },
            }),
          }}
        />
      </Head>

      <PageIntroduction title="Contact Us" image="/contact-us.png" />

      {/* Contact Information Section */}
      <div className="flex flex-col items-stretch  justify-center gap-4 lg:flex-row lg:items-stretch xl:gap-16">

        {/* Contact Info */}
        <div className="relative w-full lg:w-1/2 flex flex-col gap-8 bg-gray-100 p-4 px-16 py-8 md:py-12 lg:px-8 lg:py-16 xl:!px-[60px] xl:py-20">
          <div className="absolute right-0 top-0 hidden h-full w-[50px] py-24 xl:block">
            <div className="h-full w-full bg-primary/70"></div>
          </div>
          <div>
            <h2 className="landing-page-heading">Get in Touch with Us</h2>
          </div>
          <div className="border-l-4 border-primary pl-8">
            <h3 className="mb-2 text-primary md:text-lg lg:text-xl xl:text-[25px]">
              Contact Number:
            </h3>
            <p className="md:text-lg lg:text-xl xl:text-[25px]">
              {contactInfo?.primaryContact}
            </p>
          </div>
          <div className="border-l-4 border-primary pl-8">
            <h3 className="mb-2 text-primary md:text-lg lg:text-xl xl:text-[25px]">
              Email:
            </h3>
            <p className="md:text-lg lg:text-xl xl:text-[25px]">
              {contactInfo?.primaryEmail}
            </p>
          </div>
          <div className="border-l-4 border-primary pl-8">
            <h3 className="mb-2 text-primary md:text-lg lg:text-xl xl:text-[25px]">
              Office Address:
            </h3>
            <p className="md:text-lg lg:text-xl xl:text-[25px]">
              {contactInfo?.primaryAddress}
            </p>
          </div>
          <div className="flex items-center justify-center gap-4 sm:justify-start xl:gap-6 2xl:gap-8">
            {/* Social Media Icons */}
            <a
              href={contactInfo?.facebook}
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
              href={contactInfo?.instagram}
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
              href={contactInfo?.linkedIn}
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
              href={contactInfo?.youtube}
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

        {/* Form */}
        <div className="w-full lg:w-1/2">
          <Form />
        </div>
      </div>

      {/* Google Map */}
      <div className="relative aspect-[1.5] md:aspect-[2.5] lg:aspect-[3]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.8853167590564!2d73.0739308740979!3d33.66013333833592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa21b669c4f87bdff%3A0xb82073d15173bbc5!2sDecimal%20Solution!5e0!3m2!1sen!2s!4v1727802532626!5m2!1sen!2s"
          width="100%"
          height="100%"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
