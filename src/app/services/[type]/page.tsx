import PageIntroduction from "../../components/generic/page-introduction/index";
import ServiceCard from "../../components/generic/service-card/index";
import { getData } from "./get-data";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export interface Params {
  params: {
    type: string;
  };
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { type } = params;
  const data = getData(type);

  if (!data) {
    return {
      title: "Service Not Found",
      description: "The requested service could not be found.",
    };
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://www.decimalsolution.com";
  const serviceUrl = `${baseUrl}/services/${type}`;

  // Create a comprehensive description from the service data
  const serviceDescriptions = data.sections.map((section) => section.description).join(" ");
  const metaDescription = data.shortDescription || `${data.title} - ${serviceDescriptions.substring(0, 150)}...`;

  return {
    title: `${data.title} | Decimal Solution - Professional Software Development Services`,
    description: metaDescription,
    keywords: [
      ...(data.keywords || []),
      data.title.toLowerCase(),
      "software development",
      "digital solutions",
      "professional services",
      "decimal solution",
      ...data.sections.map((section) => section.title.toLowerCase()),
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
      url: serviceUrl,
      title: `${data.title} | Decimal Solution`,
      description: metaDescription,
      siteName: "Decimal Solution",
      images: [
        {
          url: `${baseUrl}${data.image}`,
          width: 1200,
          height: 630,
          alt: `${data.title} - Decimal Solution Services`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${data.title} | Decimal Solution`,
      description: metaDescription,
      images: [`${baseUrl}${data.image}`],
      creator: "@decimalsolution",
      site: "@decimalsolution",
    },
    alternates: {
      canonical: serviceUrl,
    },
    other: {
      "application/ld+json": JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: data.title,
        description: metaDescription,
        provider: {
          "@type": "Organization",
          name: "Decimal Solution",
          url: baseUrl,
          logo: `${baseUrl}/logo.png`,
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+1-234-567-8900",
            contactType: "customer service",
          },
        },
        serviceType: data.title,
        areaServed: "Worldwide",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: `${data.title} Services`,
          itemListElement: data.sections.map((section, index) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: section.title,
              description: section.description,
            },
            position: index + 1,
          })),
        },
        offers: {
          "@type": "Offer",
          url: serviceUrl,
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          eligibleRegion: "Worldwide",
        },
      }),
    },
  };
}

const SpecificService: React.FC<Params> = ({ params }) => {
  const { type } = params;
  const data = getData(type);

  if (!data) return notFound();
  return (
    <div>
      <PageIntroduction title={data?.title} image={data?.image} />

      <div className=" flex flex-col gap-8 ">
        {data?.sections.map((item, index) => (
          <>
            <ServiceCard
              key={index}
              title={item.title}
              description={item.description}
              image={item.image}
              reverse={index % 2 !== 0}
            />

            {index !== data.sections.length - 1 && <hr />}
          </>
        ))}
      </div>
    </div>
  );
};

export default SpecificService;
