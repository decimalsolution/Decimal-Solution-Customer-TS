import TestimonialCarousel from "./TestimonialCarousel";
import Image from "next/image";
import { Testimonials } from "../../../../types";

const ClientTestimonials: React.FC = async () => {
  let testimonials: Testimonials[] = [];

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/testimonial`, {
      next: {
        revalidate: 300,
      },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch testimonials");
    }

    const data = await res.json();
    testimonials = data.data;
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    // Handle the error gracefully, such as showing a fallback message or empty state
  }

  return (
    <div className="relative flex flex-col items-center justify-center gap-8 px-4 py-8 h-[500px] lg:h-[650px]">
      <Image
        src={"/testimonial-bg.webp"}
        alt="testimonial"
        loading={"lazy"}
        fill
        className="absolute inset-0 z-[-1] object-cover"
      />
      <div className="z-10">
        <h2 className="landing-page-heading">Client Testimonials</h2>
      </div>

      {testimonials.length > 0 ? (
        <TestimonialCarousel testimonials={testimonials} />
      ) : (
        <p>No testimonials available at the moment.</p> // Fallback in case of an error or empty data
      )}
    </div>
  );
};

export default ClientTestimonials;
