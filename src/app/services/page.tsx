// 'use client'

import PageIntroduction from "../components/generic/page-introduction/index";
// import ServiceCard from "../components/generic/service-card/index";
import ServicesContent from "./servicescontent";
import { Service } from "../../../types";
import Head from "next/head";
// import { cn } from "../../../lib/utils";
import { Metadata } from "../../../types";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Unlock innovation with Decimal Solutions - Your go-to software house for cutting-edge Web and Mobile Development, powerful ERP Solutions, immersive AR/VR experiences, captivating Game Development, stunning Graphics Designing, and result-driven Digital Marketing services.",
};

const Services = async () => {
  // const [selected, setSelected] = useState<string>("All");
  // const [services, setServices] = useState<Service[]>([]);

  // useEffect(  ()=>{
  //     const fetchData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/services`, {
    next: {
      revalidate: 300,
    },
  });

  const data = await res.json();
  const services = data.data;

  const ServiceBar = ["All" , "Web Development " , "ERP Solutions" , "Mobile Development" , "AR/VR Game" ,  "Graphic Design" , "Digital Marketing" , "Game Development" , "Content Creation" , "Management Services"  ]

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

      <ServicesContent services={services} ServiceBar={ServiceBar}/>

      {/* <div className=" flex flex-wrap items-center  justify-center gap-2 sm:gap-4">
        {ServiceBar.map((service: string, index: number) => (
          <button
            key={"our-projects-buttons-" + index + "-key"}
            className={cn(
              "rounded-lg border px-4 py-2 text-xs transition-all duration-200 hover:bg-primary hover:text-white sm:text-sm md:text-base lg:text-md",
              selected === service.title ? "bg-primary text-white" : ""
            )}

            onClick={() => {
              setSelected(service.title);
            }}
          >
            {service}
          </button>
         ))} 
       </div>

      <div className="flex flex-col gap-8">
        {services.map((product: Service, index: number) => {
        
        return (

          <ServiceCard
            key={"our-services-card-" + index + "-key"}
            title={product.title}
            description={product.description}
            image={product.coverImage}
            showButton
            showBackground={false}
            buttonText={"View More"}
            reverse={index % 2 !== 0}
            link={getLink(product)}
            externalLink={false}
          />
        )})}
      </div> */}

    </div>
  );
};

export default Services;
