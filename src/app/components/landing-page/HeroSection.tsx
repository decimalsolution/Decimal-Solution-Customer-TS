"use client";

import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import slider1 from "../../../../public/images/Slider-1.png";
import slider2 from "../../../../public/images/Sliderrr-2.png";
import slider3 from "../../../../public/images/Slider-3.png";
import { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";

interface Slide {
  image: StaticImageData;
  title: string;
  loading?: string;
}

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [fadeIn, setFadeIn] = useState<boolean>(true);

  const slides: Slide[] = [
    {
      image: slider1,
      title: "Web and Mobile,\nApplication Development",
    },
    {
      image: slider2,
      title: "Customized ERP \nSolutions ",
      loading: "lazy",
    },
    {
      image: slider3,
      title: "Creative Design \n(UI/UX)",
      loading: "lazy",
    },
  ];

  const nextSlide = (): void => {
    setFadeIn(false);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setFadeIn(true);
    }, 400);
  };

  const prevSlide = (): void => {
    setFadeIn(false);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setFadeIn(true);
    }, 400);
  };

  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <section className="p-4 md:p-20">
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-x-8 gap-y-8">
        <div
          className={`p-6 flex flex-col justify-center bg-[#E3F0FF] rounded-md w-full md:w-1/2 h-[380px] lg:h-[460px] transition-opacity duration-700 ${
            fadeIn ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="text-[20px] sm:text-2xl md:text-3xl lg:text-5xl xl:text-4xl font-bold my-2 leading-tight">
            <p className="text-[11px] sm:text-[12px] md:text-[10px] lg:text-[15px] xl:text-[13px] font-normal text-[#616161] mb-2">
              Hi, We&apos;re{" "}
              <span className="text-[11px] sm:text-[12px] md:text-[10px] lg:text-[13px] xl:text-[15px] text-white px-1 py-0.5 rounded-md bg-primary">
                DECIMAL SOLUTION
              </span>{" "}
              and We Offer Services
            </p>
            <h2 className="my-6 whitespace-pre-line text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] xl:text-[45px] font-bold leading-[1.2]">
              {slides[currentSlide].title.split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  {index !== slides[currentSlide].title.split("\n").length - 1 && <br />}
                </React.Fragment>
              ))}
            </h2>

            <div className="flex gap-4">
              <Link
                href={"/schedule-call"}
                className="block rounded-xl bg-primary px-6 py-3 text-base font-medium text-white"
              >
                Schedule A Call
              </Link>
              <Link
                href={"/portfolio"}
                className="block rounded-xl bg-transparent border-2  border-primary text-primary px-6 py-3 text-base font-bold"
              >
                Our Portfolio
              </Link>
            </div>
          </div>
        </div>

        <div
          className={`relative w-full md:w-1/2 h-[380px] lg:h-[460px] transition-opacity duration-700 ${
            fadeIn ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slides[currentSlide].image}
            priority={currentSlide === 0}
            loading={slides[currentSlide]?.loading ? "lazy" : "eager"}
            alt="slider-image"
            className="object-cover w-full h-full rounded-md"
          />
          <div className="absolute bottom-4 right-4 flex space-x-2">
            <button
              onClick={prevSlide}
              aria-label="Previous slide"
              className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200"
            >
              <FaArrowLeft className="text-gray-600" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next slide"
              className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200"
            >
              <FaArrowRight className="text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
