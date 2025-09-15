import PageIntroduction from "../components/generic/page-introduction";
import ServiceCard from "../components/generic/service-card";
import { Product } from "../../../types";
import Head from "next/head";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products | Decimal Solution - Our Digital Solutions",
  description:
    "Discover our comprehensive range of digital products and solutions including Web Development, Mobile App Development, ERP Systems, AR/VR Applications, Game Development, Graphics Design, and Digital Marketing services. Tailored solutions for your business success.",
  keywords: [
    "digital products",
    "software solutions",
    "web development products",
    "mobile app solutions",
    "ERP systems",
    "AR/VR applications",
    "game development",
    "graphics design services",
    "digital marketing tools",
    "business solutions",
    "decimal solution products",
    "digital transformation",
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
    url: "https://decimalsolution.com/products",
    title: "Products | Decimal Solution - Our Digital Solutions",
    description:
      "Discover our comprehensive range of digital products and solutions including Web Development, Mobile App Development, ERP Systems, AR/VR Applications, Game Development, Graphics Design, and Digital Marketing services.",
    siteName: "Decimal Solution",
    images: [
      {
        url: "https://decimalsolution.com/products.png",
        width: 1200,
        height: 630,
        alt: "Decimal Solution Products - Our Digital Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Products | Decimal Solution - Our Digital Solutions",
    description:
      "Discover our comprehensive range of digital products and solutions including Web Development, Mobile App Development, ERP Systems, AR/VR Applications, Game Development, Graphics Design, and Digital Marketing services.",
    images: ["https://decimalsolution.com/products.png"],
    creator: "@decimalsolution",
    site: "@decimalsolution",
  },
  alternates: {
    canonical: "https://decimalsolution.com/products",
  },
};

export default async function Products() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/products`,

    {
      next: {
        revalidate: 300,
      },
    }
  );

  const data = await res.json();
  const products: Product[] = data.data;

  return (
    <div className="flex flex-col ">
      <Head>
        {products.map((product, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Product",
                name: product.title,
                description: product.description,
                image: product.coverImage,
                brand: {
                  "@type": "Organization",
                  name: "Decimal Solution",
                },
                offers: {
                  "@type": "Offer",
                  url: product.link,
                  priceCurrency: "USD",
                  itemCondition: "https://schema.org/NewCondition",
                  availability: "https://schema.org/InStock",
                },
              }),
            }}
          />
        ))}
      </Head>

      <PageIntroduction title="Our Products" image={"/products.png"} />

      <div className="flex flex-col gap-8">
        {products.map((product, index) => (
          <ServiceCard
            key={"our-projects-card-" + index + "-key"}
            title={product.title}
            description={product.description}
            image={product.coverImage}
            showBackground
            showButton
            buttonText="View Demo"
            reverse={index % 2 !== 0}
            link={product.link}
            externalLink
          />
        ))}
      </div>
    </div>
  );
}
