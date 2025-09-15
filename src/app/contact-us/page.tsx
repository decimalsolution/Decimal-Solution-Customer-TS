import Image from "next/image";
import PageIntroduction from "../components/generic/page-introduction";
import { ContactInfo } from "../../../types";
import Form from "./Form";
import Head from "next/head";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Decimal Solution - Get In Touch",
  description:
    "Connect with Decimal Solution - Your gateway to unparalleled expertise in Web and Mobile Development, ERP Solutions, AR/VR, Game Development, Graphics Designing, and Digital Marketing. Reach out for a seamless collaboration and elevate your digital presence.",
  keywords: [
    "contact us",
    "get in touch",
    "contact decimal solution",
    "software development contact",
    "web development consultation",
    "mobile app development contact",
    "ERP solutions contact",
    "AR/VR development contact",
    "game development contact",
    "graphics design contact",
    "digital marketing contact",
    "business consultation",
    "project inquiry",
    "support contact",
  ].join(", "),
  authors: [{ name: "Decimal Solution" }],
  creator: "Decimal Solution",
  publisher: "Decimal Solution",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://decimalsolution.com/contact-us",
    title: "Contact Us | Decimal Solution - Get In Touch",
    description:
      "Connect with Decimal Solution - Your gateway to unparalleled expertise in Web and Mobile Development, ERP Solutions, AR/VR, Game Development, Graphics Designing, and Digital Marketing.",
    siteName: "Decimal Solution",
    images: [
      {
        url: "https://decimalsolution.com/contact-us.png",
        width: 1200,
        height: 630,
        alt: "Contact Decimal Solution - Get In Touch",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Decimal Solution - Get In Touch",
    description:
      "Connect with Decimal Solution - Your gateway to unparalleled expertise in Web and Mobile Development, ERP Solutions, AR/VR, Game Development, Graphics Designing, and Digital Marketing.",
    images: ["https://decimalsolution.com/contact-us.png"],
    creator: "@decimalsolution",
    site: "@decimalsolution",
  },
  alternates: {
    canonical: "https://decimalsolution.com/contact-us",
  },
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
        <div className=" relative w-full lg:w-1/2 flex flex-col gap-8 bg-gray-100 p-4 px-16 py-8 md:py-12 lg:px-8 lg:py-16 xl:!px-[60px] xl:py-20">
          <div className="absolute right-0 top-0 hidden h-full w-[50px] py-24 xl:block">
            <div className="h-full w-full bg-primary/70"></div>
          </div>
          <div>
            <h2 className="landing-page-heading">Get in Touch with Us</h2>
          </div>
          <div className="border-l-4 border-primary pl-8">
            <h3 className="mb-2 text-primary md:text-lg lg:text-xl xl:text-[25px]">Contact Number:</h3>
            <p className="md:text-lg lg:text-xl xl:text-[25px]">{contactInfo?.primaryContact}</p>
          </div>
          <div className="border-l-4 border-primary pl-8">
            <h3 className="mb-2 text-primary md:text-lg lg:text-xl xl:text-[25px]">Email:</h3>
            <p className="md:text-lg lg:text-xl xl:text-[25px]">{contactInfo?.primaryEmail}</p>
          </div>
          <div className="border-l-4 border-primary pl-8">
            <h3 className="mb-2 text-primary md:text-lg lg:text-xl xl:text-[25px]">Office Address:</h3>
            <p className="md:text-lg lg:text-xl xl:text-[25px]">{contactInfo?.primaryAddress}</p>
          </div>
          <div className="flex items-center justify-center gap-4 sm:justify-start xl:gap-6 2xl:gap-8">
            {/* Social Media Icons */}
            <a href={contactInfo?.facebook} target="_blank" rel="noopener noreferrer">
              <Image
                src="/Social Icons/purple/facebook.png"
                alt="facebook logo"
                width={100}
                height={100}
                className="h-7 w-7 sm:h-9 sm:w-9 lg:h-11 lg:w-11"
              />
            </a>
            <a href={contactInfo?.instagram} target="_blank" rel="noopener noreferrer">
              <Image
                src="/Social Icons/purple/instagram-2.png"
                alt="instagram logo"
                width={100}
                height={100}
                className="h-7 w-7 sm:h-9 sm:w-9 lg:h-11 lg:w-11"
              />
            </a>
            <a href={contactInfo?.linkedIn} target="_blank" rel="noopener noreferrer">
              <Image
                src="/Social Icons/purple/linkedin.png"
                alt="linkedin logo"
                width={100}
                height={100}
                className="h-7 w-7 sm:h-9 sm:w-9 lg:h-11 lg:w-11"
              />
            </a>
            <a href={contactInfo?.youtube} target="_blank" rel="noopener noreferrer">
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

      {/* <!-- Calendly inline widget begin --> */}
      {/* <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/thedecimalsolution/30min"
        // style="min-width:320px;height:700px;"
      ></div> */}
      {/* <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script> */}
      {/* <!-- Calendly inline widget end --> */}

      {/* Google Map */}
      <div className="relative aspect-[1.5] md:aspect-[2.5] lg:aspect-[3]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.5994721256425!2d-118.33404619999999!3d33.8226478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd4ac32f07b35f%3A0x980ebae9a215cf0f!2s2768%20Sepulveda%20Blvd%20%231062%2C%20Torrance%2C%20CA%2090505%2C%20USA!5e0!3m2!1sen!2s!4v1741201949721!5m2!1sen!2s"
          width="100%"
          height="100%"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
