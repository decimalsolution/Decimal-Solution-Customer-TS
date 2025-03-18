import PageIntroduction from "../components/generic/page-introduction";
import ServiceCard from "../components/generic/service-card";
import { Product, Metadata } from "../../../types";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Discover innovation at its finest on Decimal Solution' Products Page. Explore our cutting-edge solutions in Web and Mobile Development, ERP, AR/VR, Game Development, Graphics Designing, and Digital Marketing - tailored for success in the digital realm.",
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
