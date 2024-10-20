"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./testimonial-carousel.css";
import { Testimonials } from "../../../../types";

interface TestimonialCarouselProps {
  testimonials: Testimonials[];
}

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({
  testimonials,
}) => {
  return (
    <div className="h-[500px] w-full">
      <Swiper
        id="testimonial-carousel"
        modules={[Pagination]}
        pagination={{
          clickable: true,
          renderBullet: function (index: number, className: string): string {
            return '<span class="' + className + '">' + "</span>";
          },
        }}
        slidesPerView={1}
        className="testimonial-swiper" // Add a custom class
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="py-4">
            <div className="flex flex-col items-center">
              <div className="relative rounded-lg border-8 border-primary">
                <div className="relative h-[150px] w-[150px] lg:h-[200px] lg:w-[200px]">
                  <Image
                    src={testimonial.image}
                    alt="testimonial"
                    fill
                    className="object-cover object-center"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -left-4 -top-4 grid h-8 w-8 place-items-center rounded-full bg-primary lg:-left-6 lg:-top-6 lg:h-12 lg:w-12">
                  <div className="relative h-3 w-3 lg:h-5 lg:w-5">
                    <Image
                      src="/icons/inverted-commas.png"
                      alt="inverted-commas"
                      fill
                      loading="lazy"
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

              <h5 className="mt-4 text-lg font-semibold lg:mt-8 2xl:text-2xl">
                {testimonial.name}
              </h5>
              <p className="tet-base text-center font-medium text-primary lg:mt-2 lg:text-xl">
                {testimonial.designation}
              </p>

              <p className="mt-2 max-w-7xl text-center text-base leading-relaxed  md:mt-4 md:text-lg lg:mt-8 lg:text-md 2xl:text-xl">
                {testimonial.testimonial}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialCarousel;
