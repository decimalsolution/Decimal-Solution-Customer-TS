// import React from "react";
// import {
//   Facebook,
//   Instagram,
//   Linkedin,
//   Youtube,
//   MapPin,
//   Mail,
//   Phone,
//   ChevronRight,
// } from "lucide-react";
// import Image from "next/image";
// import footerbg from '../../../../public/images/footer3.png'
// import footerMblbg from '../../../../public/images/footer-mbl2.png'


// function Footer() {
//   return (
//     <section className=" overflow-hidden ">

//       <div className="relative flex items-center justify-center ">

//         <Image src={footerbg} className="h-[500px]" alt="footer bg" />

//         <div className="absolute bottom-0  text-white py-12 flex flex-wrap justify-center md:justify-between gap-8">
//         {/* Useful Links */}
//         <div className="flex-1 min-w-[200px] max-w-[300px] p-6">
//           <h2 className="text-lg md:text-xl font-semibold mb-4">
//             Useful Links
//           </h2>
//           <ul className="space-y-4">
//             <li className="flex items-center gap-2 md:gap-3">
//               <Facebook size={20} className="sm:size-[25px]" />{" "}
//               <span className="text-sm md:text-base">Facebook</span>
//             </li>
//             <li className="flex items-center gap-2 md:gap-3">
//               <Linkedin size={24} className="sm:size-[25px]" />{" "}
//               <span className="text-sm md:text-base">Linkedin</span>
//             </li>
//             <li className="flex items-center gap-2 md:gap-3">
//               <Youtube size={24} className="sm:size-[25px]" />{" "}
//               <span className="text-sm md:text-base">Youtube</span>
//             </li>
//             <li className="flex items-center gap-2 md:gap-3">
//               <Instagram size={20} className="sm:size-[25px]" />{" "}
//               <span className="text-sm md:text-base">Instagram</span>
//             </li>
//           </ul>
//         </div>

//         {/* Company */}
//         <div className="flex-1 min-w-[200px] max-w-[300px] p-6">
//           <h2 className="text-lg md:text-xl font-semibold mb-4">Company</h2>
//           <ul className="space-y-4">
//             <li className="text-sm md:text-base">About Us</li>
//             <li className="text-sm md:text-base">Blog</li>
//             <li className="text-sm md:text-base">Services</li>
//             <li className="text-sm md:text-base">FAQs</li>
//             <li className="text-sm md:text-base">Terms</li>
//             <li className="text-sm md:text-base">Contact Us</li>
//           </ul>
//         </div>

//         {/* Contact */}
//         <div className="flex-1 min-w-[200px] max-w-[300px] p-6">
//           <h2 className="text-lg md:text-xl font-semibold mb-4">Contact</h2>
//           <ul className="space-y-4">
//             <li className="flex items-center gap-2 md:gap-3">
//               <MapPin size={20} className="sm:size-[25px]" />{" "}
//               <span className="text-sm md:text-base">
//                 4028 Hanover Pike, MD 21102
//               </span>
//             </li>
//             <li className="flex items-center gap-2 md:gap-3">
//               <Mail size={20} className="sm:size-[25px]" />{" "}
//               <span className="text-sm md:text-base">
//                 sayam@rons-automotive.com
//               </span>
//             </li>
//             <li className="flex items-center gap-2 md:gap-3">
//               <Phone size={20} className="sm:size-[25px]" />{" "}
//               <span className="text-sm md:text-base">410-239-3180</span>
//             </li>
//           </ul>
//         </div>

//         {/* Subscribe */}
//         <div className="flex-1 min-w-[200px] max-w-[300px]  p-6">
//           <h2 className="text-lg md:text-xl font-semibold mb-4">Subscribe</h2>
//           <p className="text-xs md:text-sm">
//             Follow our newsletter <br />
//             to stay updated with us
//           </p>
//           <div className="flex items-center mt-6  w-[80%] bg-[#A1258F] rounded-md">
//             <input
//               type="email"
//               placeholder="Email"
//               className="flex-grow p-2 text-gray-500 rounded-l-md w-full focus:outline-none"
//             />
//             <button className="bg-[#8C177A] p-2  rounded-r-md">
//             <ChevronRight />
//             </button>
//           </div>
//         </div>
//       </div>

//       </div>

      
//     </section>
//   );
// }

// export default Footer;
















// // import React from "react";
// // import {
// //   Facebook,
// //   Instagram,
// //   Linkedin,
// //   Youtube,
// //   MapPin,
// //   Mail,
// //   Phone,
// //   ChevronRight,
// // } from "lucide-react";
// // import Image from "next/image";

// // function Footer() {
// //   return (
// //     <section className="relative h-[900px] overflow-hidden">
// //       {/* SVG Background */}
// //       <div className="absolute inset-0">
// //         <Image
// //           src="/images/footerbg1.svg"
// //           alt="Wave Background"
// //           className="w-full h-full object-cover"
// //           width={100}
// //           height={50}
// //         />
// //       </div>

// //       {/* Footer Content */}
// //       <div className="relative z-10 text-white py-12 flex flex-wrap justify-center md:justify-between gap-8">
// //         {/* Useful Links */}
// //         <div className="flex-1 min-w-[200px] max-w-[300px] p-6">
// //           <h2 className="text-lg md:text-xl font-semibold mb-4">Useful Links</h2>
// //           <ul className="space-y-4">
// //             <li className="flex items-center gap-2 md:gap-3">
// //               <Facebook size={20} className="sm:size-[25px]" />
// //               <span className="text-sm md:text-base">Facebook</span>
// //             </li>
// //             <li className="flex items-center gap-2 md:gap-3">
// //               <Linkedin size={24} className="sm:size-[25px]" />
// //               <span className="text-sm md:text-base">Linkedin</span>
// //             </li>
// //             <li className="flex items-center gap-2 md:gap-3">
// //               <Youtube size={24} className="sm:size-[25px]" />
// //               <span className="text-sm md:text-base">Youtube</span>
// //             </li>
// //             <li className="flex items-center gap-2 md:gap-3">
// //               <Instagram size={20} className="sm:size-[25px]" />
// //               <span className="text-sm md:text-base">Instagram</span>
// //             </li>
// //           </ul>
// //         </div>

// //         {/* Company */}
// //         <div className="flex-1 min-w-[200px] max-w-[300px] p-6">
// //           <h2 className="text-lg md:text-xl font-semibold mb-4">Company</h2>
// //           <ul className="space-y-4">
// //             <li className="text-sm md:text-base">About Us</li>
// //             <li className="text-sm md:text-base">Blog</li>
// //             <li className="text-sm md:text-base">Services</li>
// //             <li className="text-sm md:text-base">FAQs</li>
// //             <li className="text-sm md:text-base">Terms</li>
// //             <li className="text-sm md:text-base">Contact Us</li>
// //           </ul>
// //         </div>

// //         {/* Contact */}
// //         <div className="flex-1 min-w-[200px] max-w-[300px] p-6">
// //           <h2 className="text-lg md:text-xl font-semibold mb-4">Contact</h2>
// //           <ul className="space-y-4">
// //             <li className="flex items-center gap-2 md:gap-3">
// //               <MapPin size={20} className="sm:size-[25px]" />
// //               <span className="text-sm md:text-base">4028 Hanover Pike, MD 21102</span>
// //             </li>
// //             <li className="flex items-center gap-2 md:gap-3">
// //               <Mail size={20} className="sm:size-[25px]" />
// //               <span className="text-sm md:text-base">sayam@rons-automotive.com</span>
// //             </li>
// //             <li className="flex items-center gap-2 md:gap-3">
// //               <Phone size={20} className="sm:size-[25px]" />
// //               <span className="text-sm md:text-base">410-239-3180</span>
// //             </li>
// //           </ul>
// //         </div>

// //         {/* Subscribe */}
// //         <div className="flex-1 min-w-[200px] max-w-[300px]  p-6">
// //           <h2 className="text-lg md:text-xl font-semibold mb-4">Subscribe</h2>
// //           <p className="text-xs md:text-sm">
// //             Follow our newsletter <br />
// //             to stay updated with us
// //           </p>
// //           <div className="flex items-center mt-6 w-[80%] bg-[#A1258F] rounded-md">
// //             <input
// //               type="email"
// //               placeholder="Email"
// //               className="flex-grow p-2 text-gray-500 rounded-l-md w-full focus:outline-none"
// //             />
// //             <button className="bg-[#8C177A] p-2  rounded-r-md">
// //               <ChevronRight />
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // export default Footer;
  
