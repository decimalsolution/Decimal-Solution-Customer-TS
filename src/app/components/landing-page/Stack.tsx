"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider, { Settings } from "react-slick";
import Image from "next/image";

import HeadingText from "./HeadingText";

const Stack: React.FC = () => {

  const images: string[] = [
    "/Tools And Technologies/react.webp",
    "/Tools And Technologies/nextjs.webp",
    "/Tools And Technologies/vuejs.webp",
    "/Tools And Technologies/angular.webp",
    "/Tools And Technologies/nodejs.webp",
    "/Tools And Technologies/csharp.webp",
    "/Tools And Technologies/java.webp",
    "/Tools And Technologies/python.webp",
    "/Tools And Technologies/django.webp",
    "/Tools And Technologies/express.webp",
    "/Tools And Technologies/mongodb.webp",
    "/Tools And Technologies/mysql.webp",
    "/Tools And Technologies/planetscale.webp",
    "/Tools And Technologies/postgre.webp",
    "/Tools And Technologies/material.webp",
    "/Tools And Technologies/mantine.webp",
    "/Tools And Technologies/figma.webp",
    "/Tools And Technologies/illustrator.webp",
    "/Tools And Technologies/photoshop.webp",
    "/Tools And Technologies/blender.webp",
    "/Tools And Technologies/unity.webp",
    "/Tools And Technologies/godot.webp",
    "/Tools And Technologies/cypress.webp",
    "/Tools And Technologies/mocha.webp",
  ];

  // Slider settings
  const settings: Settings = {
    infinite: true,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1,
    cssEase: 'linear',
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
    ],
  };

  return (
    <section className="bg-[#E3F0FF] p-6 lg:px-[100px] h-[400px]  ">
      <div className="flex flex-col items-left w-full p-6 rounded-md">
      <div className="mb-12 ml-">
        <HeadingText text1="Technology" text2="Stack"/>
      </div>

        <style jsx>{`
          .image-container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 120px; 
            width: 100%;
            overflow: hidden;
          }

          .image-container img {
            max-width: 100%;
            max-height: 100%;
            // border-radius: 10px;
            object-fit: contain; 
          }

          // /* Adding margin between the slides */
          // .slick-slide > div {
          //   margin: 10px 10px; 
          //   border: 1px black solid;
          // }
        `}</style>

        <Slider {...settings} className=" py-6 mt-0 md:mt-4">
          {images.map((img, index) => (
            <div
              key={index}
              className="  w-[300px]  p-8 rounded-lg"
            >
              <div className="image-container py-4">
                <Image
                  src={img}
                  alt={`logo-${index}`}
                  loading="lazy"
                  width={800} // Reduced width
                  height={200} // Reduced height
                  className=" px-2  py-16 "
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Stack;
