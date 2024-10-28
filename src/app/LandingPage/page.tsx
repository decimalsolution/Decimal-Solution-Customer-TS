import React from "react";

import dynamic from "next/dynamic";


const HeroSection = dynamic(
  () => import("../components/landing-page/HeroSection")
);
const Stack = dynamic(() => import("../components/landing-page/Stack"));
const Solutions = dynamic(() => import("../components/landing-page/Solutions"));

const Article = dynamic(() => import("../components/landing-page/Articles"));
const OurPortfolio = dynamic(
  () => import("../components/landing-page/OurPortfolio")
);
const ClientTestimonials = dynamic(
  () => import("../components/landing-page/ClientTestimonials")
);
const NumberOfAchievements = dynamic(
  () => import("../components/landing-page/NumberOfAchievements")
);
const WhyChooseUs = dynamic(
  () => import("../components/landing-page/WhyChooseUs")
);

function Page() {

  return (
    <>
    {/* hi */}
      <HeroSection />
      <Solutions />
      <OurPortfolio />
      <NumberOfAchievements />
      <Stack />
      <WhyChooseUs />
      <ClientTestimonials />
      <Article />
    </>
  );
}

export default Page;
