// import React from "react";
// import Image from "next/image";
// import { StaticImageData } from "next/image";
// import automotive from "../../../../public/images/car.png";
// import campus from "../../../../public/images/campus.png";
// import shipyard from "../../../../public/images/shipyard.png";
// import time from "../../../../public/images/time.png";
// import cars from "../../../../public/images/cars.png";
// import kitchen from "../../../../public/images/kitchen.png";
// import Services from "./Services";
// import HeadingText from "./HeadingText";

// const Portfolio = () => {

//     interface Service {
//         subtitle: string;
//         title: string;
//         image: StaticImageData; 
//     }

//   const services:Service[] = [
//     {
//       subtitle: "Web Development",
//       title: "Rons’ Automotive",
//       image: automotive,
//     },
//     {
//       subtitle: "Web Development",
//       title: "Smart Campus",
//       image: campus,
//     },
//     {
//       subtitle: "Web Development",
//       title: "Auto Shipyard 2.0",
//       image: shipyard,
//     },
//     {
//       subtitle: "Web Development",
//       title: "Times At Space",
//       image: time,
//     },
//     {
//       subtitle: "Web Development",
//       title: "Cars Palace",
//       image: cars,
//     },
//     {
//       subtitle: "Web Development",
//       title: "TRA Kitchen",
//       image: kitchen,
//     },
//   ];

//   return (
//     <>
//       <div className=" ml-28 sm:ml-24 mt-32">
//         <HeadingText text1="Our" text2="Portfolio" />
//       </div>
//       <div className=" flex flex-col items-center justify-center mt-6 md:p-6">
//         <div>
//           <Services />
//         </div>

//         <div className="grid grid-cols-2 md:grid-cols-3 justify-items-center mt-8 w-[90%] sm:w-[80%] gap-6">
//           {services.map((service, index) => {
//             return (
//               <div
//                 key={index}
//                 className="relative justify-items-center overflow-hidden "
//               >
//                 <Image
//                   src={service.image}
//                   alt="car"
//                   className="overflow-hidden object-cover"
//                 />
//                 <div className="absolute bottom-2 rounded-xl w-[90%] mx-auto left-0 right-0">
//                   <div className="bg-black bg-opacity-60 text-white p-2 md:p-2 lg:p-3">
//                     <h2 className="text-[7px] sm:text-[10px] md:text-[8px] lg:text-[14px]  w-[70%] ">
//                       {service.subtitle}
//                     </h2>
//                     <div className="border-b-2  border-[#D02CBD] mb-1 w-[20%] md:w-[30%]"></div>
//                     <p className="text-[10px] sm:text-[14px] md:text-[11px] lg:text-[20px] font-bold">
//                       {service.title}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Portfolio;
