// "use client";

import React from 'react'

// import dynamic from 'next/dynamic'
// import { useInView } from 'react-intersection-observer'

import HeroSection from '../components/landing-page/HeroSection'
import Stack from '../components/landing-page/Stack'
import Commitment from '../components/landing-page/Commitment'
import Cards from '../components/landing-page/Cards'
import Article from '../components/landing-page/Articles'
import OurServices from '../components/landing-page/OurServices'
import OurPortfolio from '../components/landing-page/OurPortfolio'
import ClientTestimonials from '../components/landing-page/ClientTestimonials'
import NumberOfAchievements from '../components/landing-page/NumberOfAchievements'
import WhyChooseUs from '../components/landing-page/WhyChooseUs'



// const HeroSection = dynamic(()=> import('../components/landing-page/HeroSection')) 
// const Stack = dynamic(()=> import('../components/landing-page/Stack'))
// const Solutions = dynamic(() => import('../components/landing-page/Solutions'), { ssr: false })
// const Commitment = dynamic(() => import('../components/landing-page/Commitment'), { ssr: false })
// const Cards = dynamic(() => import('../components/landing-page/Cards'), { ssr: false })
// const Portfolio = dynamic(() => import('../components/landing-page/Portfolio'), { ssr: false })
// const Article = dynamic(() => import('../components/landing-page/Articles'), { ssr: false })
// const OurServices = dynamic(() => import('../components/landing-page/OurServices'), { ssr: false })
// const OurPortfolio = dynamic(() => import('../components/landing-page/OurPortfolio'), { ssr: false })
// const ClientTestimonials = dynamic(() => import('../components/landing-page/ClientTestimonials'), { ssr: false })
// const NumberOfAchievements = dynamic(() => import('../components/landing-page/NumberOfAchievements'), { ssr: false })
// const WhyChooseUs = dynamic(() => import('../components/landing-page/WhyChooseUs'), { ssr: false })


function Page() {

  // const { ref: refGroup1, inView: inViewGroup1 } = useInView({ triggerOnce: true });

  // const { ref: refGroup2, inView: inViewGroup2 } : {ref : React.RefCallback<Element> , inView : boolean} = useInView({ triggerOnce: true });

  // const { ref: refGroup3, inView: inViewGroup3 } : {ref : React.RefCallback<Element> , inView : boolean} = useInView({ triggerOnce: true });

  return (
    <>

        <HeroSection/>
        {/* <Solutions/> */}
        <OurServices/>
        <Cards/>

        {/* <div ref={refGroup2} > */}
          {/* {inViewGroup2 && ( */}
            {/* <> */}
            <OurPortfolio/>
              {/* <Portfolio/> */}
              <Commitment/>
              <NumberOfAchievements/>
            {/* </> */}
          {/* )} */}
        {/* </div> */}

        {/* <div ref={refGroup3}> */}
          {/* {inViewGroup3 && ( */}
            {/* <> */}
              <Stack/>
              <WhyChooseUs/>
              <ClientTestimonials/>
              <Article/>
            {/* </> */}
          {/* )} */}
        {/* </div> */}
       
    </>
  )
}

export default Page;
