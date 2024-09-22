import PageIntroduction from "../components/generic/page-introduction/index";
import ServiceCard from "../components/generic/service-card/index";
import { Service } from "../../../types";

interface Metadata {
    title: string;
    description: string;
  }

export const metadata:Metadata = {
  title: "Services",
  description:
    "Unlock innovation with Decimal Solutions - Your go-to software house for cutting-edge Web and Mobile Development, powerful ERP Solutions, immersive AR/VR experiences, captivating Game Development, stunning Graphics Designing, and result-driven Digital Marketing services.",
};

const Services = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/services`, {
    next: {
      revalidate: 300,
    },
  });

  const data = await res.json();

  const services:Service[] = data.data;
//   console.log("services : " , services)

  const getLink = (service:Service) => {
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
      <PageIntroduction title="Our Services" image={"/our-services.webp"} />

      <div className="flex flex-col gap-8">
        {services.map((product, index) => (
          <ServiceCard
            key={"our-services-card-" + index + "-key"}
            title={product.title}
            description={product.description}
            image={product.coverImage}
            showButton
            showBackground = {false}
            buttonText={"View More"}
            reverse={index % 2 !== 0}
            link={getLink(product)}
            externalLink={false}
          />
        ))}
      </div>
    </div>
  );
}

export default Services;






