// "use client";

// import {  SwiperSlide } from "swiper/react";
// // Import Swiper styles
// import "swiper/css";
// import Image from "next/image";
// import Carousel from "../generic/carousel";
// import { Link } from "lucide-react";
// import React, { useCallback } from "react";
// import NextLink from "next/link";

// import { Service } from '../../../../types';

// interface OurServicesContentProps {
//     Services : Service[]
// }

// const OurServicesContent:React.FC<OurServicesContentProps> = ({ Services }) => {
//   const getLink = useCallback((service:Service) => {
//     const title = service.title.toLowerCase();
//     if (title.includes("web")) {
//       return "services/website-development";
//     } else if (title.includes("digital")) {
//       return "services/digital-marketing";
//     } else if (title.includes("mobile")) {
//       return "services/mobile-app-development";
//     } else if (title.includes("graphic")) {
//       return "services/graphics-designing";
//     } else if (title.includes("erp")) {
//       return "services/erp";
//     } else if (title.includes("ar")) {
//       return "services/ar-vr";
//     } else {
//       return "services/website-development";
//     }
//   }, []);
//   return (
//     <Carousel>
//       {Services.map((item, i) => (
//         <SwiperSlide key={i}>
//           <div className="group relative flex h-full w-full flex-col items-center justify-center gap-8 overflow-hidden rounded-3xl border-[3px] border-primary">
//             <div className="absolute -left-2 -top-2 grid h-14 w-14 place-items-center rounded-full bg-primary sm:-left-3 sm:-top-3 sm:h-16 sm:w-16 md:-left-4 md:-top-4 md:h-20 md:w-20 lg:-left-5 lg:-top-5 lg:h-24 lg:w-24 xl:-left-6 xl:-top-6 xl:h-28 xl:w-28 2xl:-left-7 2xl:-top-8 2xl:h-32 2xl:w-32">
//               <p className="mt-2 text-xl font-semibold text-white md:text-2xl lg:mt-3 lg:text-3xl xl:text-4xl">
//                 0{i + 1}
//               </p>
//             </div>
//             <div>
//               <Image
//                 src={item.homeImage}
//                 alt={item.title}
//                 width={130}
//                 height={130}
//                 loading="eager"
//                 className=" h-[100px] w-[100px] object-contain md:h-[130px]  md:w-[130px]"
//                 priority={i === 0 ? true : false}
//               />
//             </div>
//             <h3 className="text-lg font-semibold 2xl:text-3xl">{item.title}</h3>
//             <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-primary/90 p-8 opacity-0 transition-all duration-500 group-hover:opacity-100">
//               <p className="md:text-md text-center text-sm text-white lg:text-lg xl:text-xl">
//                 {item.shortDescription}
//               </p>
//               <NextLink href={getLink(item)} aria-label={item.title}>
//                 <div className="grid h-10 w-10 place-items-center rounded-full bg-white text-primary 2xl:h-16 2xl:w-16">
//                   <Link strokeWidth={3} className="h-1/2 w-1/2" />
//                 </div>
//               </NextLink>
//             </div>
//           </div>
//         </SwiperSlide>
//       ))}
//     </Carousel>
//   );
// }

// export default OurServicesContent;
