// 'use client'

import PageIntroduction from "../components/generic/page-introduction/index";
import ServicesContent from "./servicescontent";
import { Service } from "../../../types";
import Head from "next/head";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Decimal Solution - Our Digital Solutions",
  description:
    "Unlock innovation with Decimal Solution - Your go-to software house for cutting-edge Web and Mobile Development, powerful ERP Solutions, immersive AR/VR experiences, captivating Game Development, stunning Graphics Designing, and result-driven Digital Marketing services.",
  keywords: [
    "services",
    "software development services",
    "web development services",
    "mobile app development",
    "ERP solutions",
    "AR/VR development",
    "game development",
    "graphics design services",
    "digital marketing services",
    "custom software development",
    "business solutions",
    "digital transformation",
    "decimal solution services",
    "IT services",
    "technology solutions",
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
    url: "https://www.decimalsolution.com/services",
    title: "Services | Decimal Solution - Our Digital Solutions",
    description:
      "Unlock innovation with Decimal Solution - Your go-to software house for cutting-edge Web and Mobile Development, powerful ERP Solutions, immersive AR/VR experiences, captivating Game Development, stunning Graphics Designing, and result-driven Digital Marketing services.",
    siteName: "Decimal Solution",
    images: [
      {
        url: "https://www.decimalsolution.com/our-services.webp",
        width: 1200,
        height: 630,
        alt: "Decimal Solution Services - Our Digital Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | Decimal Solution - Our Digital Solutions",
    description:
      "Unlock innovation with Decimal Solution - Your go-to software house for cutting-edge Web and Mobile Development, powerful ERP Solutions, immersive AR/VR experiences, captivating Game Development, stunning Graphics Designing, and result-driven Digital Marketing services.",
    images: ["https://www.decimalsolution.com/our-services.webp"],
    creator: "@decimalsolution",
    site: "@decimalsolution",
  },
  alternates: {
    canonical: "https://www.decimalsolution.com/services",
  },
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
                  url: "https://www.decimalsolution.com",
                },
                offers: {
                  "@type": "Offer",
                  url: `https://www.decimalsolution.com/${getLink(service)}`,
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
