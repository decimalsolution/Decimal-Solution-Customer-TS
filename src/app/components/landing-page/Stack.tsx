"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider, { Settings } from "react-slick";
import Image from "next/image";

import HeadingText from "./HeadingText";

const Stack: React.FC = () => {

  const images: string[] = [
    "/Tools And Technologies/react.png",
    "/Tools And Technologies/nextjs.png",
    "/Tools And Technologies/vuejs.png",
    "/Tools And Technologies/angular.png",
    "/Tools And Technologies/nodejs.png",
    "/Tools And Technologies/csharp.png",
    "/Tools And Technologies/java.png",
    "/Tools And Technologies/python.png",
    "/Tools And Technologies/django.png",
    "/Tools And Technologies/express.png",
    "/Tools And Technologies/mongodb.png",
    "/Tools And Technologies/mysql.png",
    "/Tools And Technologies/planetscale.png",
    "/Tools And Technologies/postgre.png",
    "/Tools And Technologies/material.png",
    "/Tools And Technologies/mantine.png",
    "/Tools And Technologies/figma.png",
    "/Tools And Technologies/illustrator.png",
    "/Tools And Technologies/photoshop.png",
    "/Tools And Technologies/blender.png",
    "/Tools And Technologies/unity.png",
    "/Tools And Technologies/godot.png",
    "/Tools And Technologies/cypress.png",
    "/Tools And Technologies/mocha.png",
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

          /* Adding margin between the slides */
          .slick-slide > div {
            margin: 10px 10px; 
            border: 1px black solid;
          }
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
