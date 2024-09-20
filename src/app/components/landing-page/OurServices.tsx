'use client'

import React, { useEffect } from "react";
import { useState } from "react";
import HeadingText from "./HeadingText";
import OurServicesContent from './OurServicesContent'

import { Service } from '../../../../types';

import Image from "next/image";



const OurServices:React.FC = async () => {
    const [services, setServices] = useState<Service[]>([]);

    useEffect(() => {
      const fetchServices = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/services`, {
          next: {
            revalidate: 300,
          },
        });
        const data = await res.json();
        setServices(data.data); // Set the fetched data
      };
  
      fetchServices();
    }, []);
  
    console.log(services)


    return(
        <div className="relative flex flex-col  gap-8 py-8 lg:py-12 xl:py-16 2xl:py-20">
            
      <div className="flex flex-col ">
        <div className="ml-24 mb-8">
          <HeadingText text1="Our" text2="Services" />
        </div>

        <div>
          {/* <p className="landing-page-subheading text-center">Our Services</p> */}
          <h2 className="landing-page-heading text-center">
            Our Service For Your Business
          </h2>
        </div>
      </div>
      <Image
        src={"/our-services-bg.webp"}
        alt=""
        priority={true}
        fill
        className="absolute inset-0 z-0"
      />

      <OurServicesContent Services={services} />
    </div>
    )
}

export default OurServices;