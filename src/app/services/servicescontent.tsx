"use client";

import React from "react";
import { Service } from "../../../types";
import ServiceCard from "../components/generic/service-card";
import { useState, useMemo } from "react";
import { cn } from "../../../lib/utils";

interface ServicesContentProps {
  services: Service[];
  ServiceBar: string[];
}

const ServicesContent: React.FC<ServicesContentProps> = ({ services, ServiceBar }) => {
  const [selected, setSelected] = useState<string>("All");

  const filteredServices = useMemo(() => {
    if (selected === "All") {
      return services;
    } else {
      return services.filter((item) => item.title?.toLowerCase() === selected.toLowerCase());
    }
  }, [selected, services]);

  //   console.log(filteredServices)

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
    } else if (title.includes("game")) {
      return "services/game-development";
    } else if (title.includes("content")) {
      return "services/content-creation";
    } else if (title.includes("management")) {
      return "services/management-services";
    } else {
      return "services/website-development";
    }
  };

  return (
    <div>
      <div className=" flex flex-wrap items-center  justify-center gap-2 sm:gap-4">
        {ServiceBar.map((service: string, index: number) => (
          <button
            key={"our-projects-buttons-" + index + "-key"}
            className={cn(
              "rounded-lg border px-4 py-2 text-xs transition-all duration-200 hover:bg-primary hover:text-white sm:text-sm md:text-base lg:text-md",
              selected === service ? "bg-primary text-white" : ""
            )}
            onClick={() => {
              setSelected(service);
            }}
          >
            {service}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-8 sm:gap-2 ">
        {filteredServices.map((product: Service, index: number) => {
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
          );
        })}
      </div>
    </div>
  );
};

export default ServicesContent;
