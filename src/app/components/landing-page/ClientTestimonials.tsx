// import { cn } from "../../../../lib/utils";
import TestimonialCarousel from "./TestimonialCarousel";
import Image from "next/image";
import { Testimonials } from "../../../../types";

const ClientTestimonials: React.FC = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/testimonial`, {
    next: {
      revalidate: 300,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch testimonials");
  }

  const data = await res.json();
  const testimonials: Testimonials[] = data.data;

  return (
    <div className="relative flex flex-col items-center justify-center gap-8 px-4 py-8 h-[500px]  lg:h-[650px]">
      <Image
        src={"/testimonial-bg.webp"}
        alt="testimonial"
        loading={"lazy"}
        fill
        className="absolute inset-0 z-[-1] object-cover"
      />
      <div className="z-10">
        {/* <p
          className={cn("landing-page-subheading", "text-center !normal-case")}
        >
          Testimonials
        </p> */}
        <h2 className="landing-page-heading">Client Testimonials</h2>
      </div>

      <TestimonialCarousel testimonials={testimonials} />
    </div>
  );
};

export default ClientTestimonials;
