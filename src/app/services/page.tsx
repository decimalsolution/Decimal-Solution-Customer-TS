// 'use client'

import PageIntroduction from "../components/generic/page-introduction/index";
import ServicesContent from "./servicescontent";
import { Service } from "../../../types";
import Head from "next/head";
import { Metadata } from "../../../types";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Unlock innovation with Decimal Solution - Your go-to software house for cutting-edge Web and Mobile Development, powerful ERP Solutions, immersive AR/VR experiences, captivating Game Development, stunning Graphics Designing, and result-driven Digital Marketing services.",
};

const Services = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/services`, {
    next: {
      revalidate: 300,
    },
  });

  const data = await res.json();
  const services = data.data;

  const ServiceBar = [
    "All",
    "Web Development ",
    "ERP Solutions",
    "Mobile Development",
    "AR/VR Game",
    "Graphic Design",
    "Digital Marketing",
    "Game Development",
    "Content Creation",
    "Management Services",
  ];

  const getLink = (service: Service) => {
    const title = service.title.toLowerCase();
    if (title.includes("web")) {
      return "services/website-development";
    } else if (title.includes("digital")) {
      return "services/digital-marketing";
    } else if (title.includes("mobile")) {
      return "services/mobile-app-development";
    } else if (title.includes("graphic")) {
      return "services/graphics-designing";
    } else if (title.includes("erp")) {
      return "services/erp";
    } else if (title.includes("ar")) {
      return "services/ar-vr";
    } else if (title.includes("game-development")) {
      return "services/game-development";
    } else if (title.includes("content-creation")) {
      return "services/content-creation";
    } else if (title.includes("management-services")) {
      return "services/management-services";
    } else {
      return "services/website-development";
    }
  };

  return (
    <div className="flex flex-col gap-20">
      <Head>
        {services.map((service: Service, index: number) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Service",
                serviceType: service.title,
                description: service.description,
                provider: {
                  "@type": "Organization",
                  name: "Decimal Solution",
                  url: "https://decimalsolution.com",
                },
                offers: {
                  "@type": "Offer",
                  url: `https://decimalsolution.com/${getLink(service)}`,
                  priceCurrency: "USD",
                  eligibleRegion: "Worldwide",
                },
              }),
            }}
          />
        ))}
      </Head>

      <PageIntroduction title="Our Services" image={"/our-services.webp"} />

      <ServicesContent services={services} ServiceBar={ServiceBar} />
    </div>
  );
};

export default Services;
