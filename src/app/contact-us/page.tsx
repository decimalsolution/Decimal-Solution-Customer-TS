// import Image from "next/image";
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
      <div className="flex flex-col items-stretch justify-center gap-4 lg:flex-row lg:items-stretch xl:gap-16">
        {/* Contact Info */}
        <div className=" relative w-full lg:w-1/2 flex flex-col gap-8 bg-gray-100 p-4 px-16 py-8 md:py-12 lg:px-8 lg:py-16 xl:!px-[60px] xl:py-20">
          {/* Contact details */}
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
