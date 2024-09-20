// 'use client'

// import React, { useEffect } from "react";
// import { useState } from "react";
// import HeadingText from "./HeadingText";
// import solution from "../../../../public/images/solutions.png";

// import web from "../../../../public/images/webvector.png";
// import graphic from "../../../../public/images/graphicvector.png";
// import vr from "../../../../public/images/vrvector.png";
// import mobile from "../../../../public/images/mobilevector.png";
// import game from "../../../../public/images/gamevector.png";
// import erp from "../../../../public/images/erpvector.png";

// import { Service } from '../../../../types';

// import Image from "next/image";

// const Solutions: React.FC = () => {

//   const [services, setServices] = useState<Service[]>([]);

//   useEffect(() => {
//     const fetchServices = async () => {
//       const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/services`, {
//         next: {
//           revalidate: 300,
//         },
//       });
//       const data = await res.json();
//       setServices(data.data); // Set the fetched data
//     };

//     fetchServices();
//   }, []);
  


//   return (
//     <section className=" py-16 px-16 ">
//       <div className="my-4  xl:ml-14 mb-12">
//         <HeadingText text1={"Our"} text2={"Services"} />
//       </div>

//       <div className="text-center">
//         <h2 className=" text-2xl md:text-4xl font-medium">
//           We Provide IT & Business Solutions
//         </h2>
//         <p className="text-[#616060] mt-4">
//           "Providing cutting-edge IT solutions and business services. Enhancing
//           efficiency, productivity, <br />
//           and profitability. Delivering results that matter."
//         </p>
//       </div>

//       <div className="flex justify-center items-center  w-full mt-16">
//         <div className="flex flex-col md:flex-row items-center ">

//           {/* Left Column */}
//           <div className="flex flex-col items-center ">

//             {/* Box 1 */}
//             <div className="flex justify-around items-center shadow-[0_6px_6px_0_rgba(0,0,0,0.2)] p-3 w-[340px] sm:w-[400px] md:w-[300px] lg:w-[250px] xl:w-[300px] text-center m-6 sm:mt-6">
//               <div className="">
//                 <Image src={web} alt="web vector" className="  lg:w-[30px] xl:w-[50px]" />
//               </div>
//               <div className="text-left ml-6 sm:ml-10 lg:ml-8 xl:ml-6 mr-8 w-full ">
//                 <h3 className=" text-[14px] md:text-[11px] xl:text-[15px] font-bold">Web Development</h3>
//                 <p className="text-[#616060] text-[11px] md:text-[9px] xl:text-[12px] ">
//                   We are experienced and have <br /> developed many websites
//                 </p>
//               </div>
//             </div>

//             {/* Box 2  */}
//             <div className="lg:mr-14 flex justify-around items-center shadow-[0_6px_6px_0_rgba(0,0,0,0.2)] p-3 w-[340px] sm:w-[400px] md:w-[300px] lg:w-[250px] xl:w-[300px] text-center m-6 sm:mt-6">
//               <div className="">
//                 <Image src={graphic} alt="web vector" className="  lg:w-[30px] xl:w-[40px]" />
//               </div>
//               <div className="text-left ml-6 sm:ml-10 lg:ml-8 xl:ml-6 mr-8 w-full ">
//                 <h3 className="text-[14px]  md:text-[11px] xl:text-[15px] font-bold">Graphics Designing</h3>
//                 <p className="text-[#616060] text-[11px] md:text-[9px] xl:text-[12px] ">
//                 We are experienced and have <br /> developed many Graphic Designs 
//                 </p>
//               </div>
//             </div>

//             {/* Box 3  */}
//             <div className="flex justify-around items-center shadow-[0_6px_6px_0_rgba(0,0,0,0.2)] p-3 w-[340px] sm:w-[400px] md:w-[300px] lg:w-[250px] xl:w-[300px] text-center m-6 sm:mt-6">
//               <div className="">
//                 <Image src={vr} alt="web vector" className="  lg:w-[30px] xl:w-[40px]" />
//               </div>
//               <div className="text-left ml-6 sm:ml-10 lg:ml-8 xl:ml-6 mr-8 w-full ">
//                 <h3 className="text-[14px] md:text-[11px] xl:text-[15px] font-bold">AR/VR Games</h3>
//                 <p className="text-[#616060] text-[11px] md:text-[9px] xl:text-[12px] ">
//                 We are experienced and have <br /> developed many AR/VR Games 
//                 </p>
//               </div>
//             </div>

//           </div>

//           {/* Center Image */}
//           <div className=" hidden lg:block lg:items-center">
//             <Image src={solution} alt="Center Image" className="w-150 h-150" />
//           </div>

//           {/* Right Column */}
//           <div className="flex flex-col items-center ">

//             {/* Box 4  */}
//             <div className="flex justify-around items-center shadow-[0_6px_6px_0_rgba(0,0,0,0.2)] p-3 w-[340px] sm:w-[400px] md:w-[300px] lg:w-[250px] xl:w-[300px] text-center m-6 sm:mt-6">
//               <div className="">
//                 <Image src={mobile} alt="web vector" className="  lg:w-[30px] xl:w-[40px]" />
//               </div>
//               <div className="text-left ml-6 sm:ml-10 lg:ml-8 xl:ml-6 mr-8 w-full ">
//                 <h3 className="text-[14px] md:text-[11px] xl:text-[15px] font-bold">Mobile Development</h3>
//                 <p className="text-[#616060] text-[11px] md:text-[9px] xl:text-[12px] ">
//                   We are experienced and have <br /> developed many Mobile Applications
//                 </p>
//               </div>
//             </div>

//            {/* Box 5  */}
//            <div className="lg:ml-14 flex justify-around items-center shadow-[0_6px_6px_0_rgba(0,0,0,0.2)] p-3 w-[340px] sm:w-[400px] md:w-[300px] lg:w-[250px] xl:w-[300px] text-center m-6 sm:mt-6">
//               <div className="">
//                 <Image src={game} alt="web vector" className="  lg:w-[30px] xl:w-[40px]" />
//               </div>
//               <div className="text-left ml-6 sm:ml-10 lg:ml-8 xl:ml-6 mr-8 w-full ">
//                 <h3 className="text-[14px] md:text-[11px] xl:text-[15px] font-bold">Digital Marketing</h3>
//                 <p className="text-[#616060] text-[11px] md:text-[9px] xl:text-[12px] ">
//                   We are experienced and have <br /> developed many websites
//                 </p>
//               </div>
//             </div>


//             {/* Box 6 */}
//             <div className="flex justify-around items-center shadow-[0_6px_6px_0_rgba(0,0,0,0.2)] p-3 w-[340px] sm:w-[400px] md:w-[300px] lg:w-[250px] xl:w-[300px] text-center m-6 sm:mt-6">
//               <div className="">
//                 <Image src={erp} alt="web vector" className="  lg:w-[30px] xl:w-[40px]" />
//               </div>
//               <div className="text-left ml-6 sm:ml-10 lg:ml-8 xl:ml-6 mr-8 w-full ">
//                 <h3 className="text-[14px] md:text-[11px] xl:text-[15px] font-bold">ERP Solutions</h3>
//                 <p className="text-[#616060] text-[11px] md:text-[9px] xl:text-[12px] ">
//                   We are experienced and provide <br /> many ERP Solutions
//                 </p>
//               </div>
//             </div>

//           </div>

//         </div>
//       </div>
//     </section>
   
//   );
// };

// export default Solutions;
