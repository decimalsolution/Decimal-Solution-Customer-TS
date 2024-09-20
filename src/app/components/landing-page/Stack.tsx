"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider, { Settings } from "react-slick";
import Image from "next/image";

import HeadingText from "./HeadingText";

const Stack: React.FC = () => {
  const images = [
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
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
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
    <section className="bg-[#E3F0FF] p-6 lg:px-[100px]">
      <div className="flex flex-col items-left w-full p-6 rounded-md">
      <div className="mb-12">
        <HeadingText text1="Technology" text2="Stack"/>
      </div>

        <style jsx>{`
          /* Reduce size of the image containers */
          .image-container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 80px; /* Reduced height */
            width: 100%;
            overflow: hidden;
          }

          .image-container img {
            max-width: 100%;
            max-height: 100%;
            object-fit: contain; /* Ensures image fits while maintaining aspect ratio */
          }

          /* Adding margin between the slides */
          .slick-slide > div {
            margin: 10px 10px; /* Apply margin to create gap */
            border: 1px black solid;
          }
        `}</style>

        <Slider {...settings} className="gap-4">
          {images.map((img, index) => (
            <div
              key={index}
              className="  w-[200px]  px-8 rounded-lg"
            >
              <div className="image-container">
                <Image
                  src={img}
                  alt={`logo-${index}`}
                  width={120} // Reduced width
                  height={120} // Reduced height
                  className="rounded-lg"
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
