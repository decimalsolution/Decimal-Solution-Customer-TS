import Image from "next/image";
import PageIntroduction from "../components/generic/page-introduction";
import { ContactInfo } from "../../../types";
import Form from "./Form";
import { Metadata } from "../../../types";

export const metadata:Metadata = {
  title: "Contact Us",
  description:
    "Connect with Decimal Solutions - Your gateway to unparalleled expertise in Web and Mobile Development, ERP Solutions, AR/VR, Game Development, Graphics Designing, and Digital Marketing. Reach out for a seamless collaboration and elevate your digital presence",
};

const ContactUs = async () => {
  
  const data = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/contactUs`, {
    next: { revalidate: 300 },
  });
  const response = await data.json();
  const contactInfo: ContactInfo = response.data[0];

  return (
    <div>
      <PageIntroduction title="Contact Us" image="/contact-us.png" />
      <div className="mb-4 flex flex-col items-stretch justify-center gap-4 lg:flex-row xl:gap-16">
        {/* Contact info */}

        <div className="relative flex flex-1 flex-col gap-8 bg-gray-100 p-4 px-16 py-8 md:py-12 lg:px-8 lg:py-16 xl:!px-[60px] xl:py-20 2xl:py-24">
          <div className="absolute right-0 top-0 hidden h-full w-[50px] py-24 xl:block">
            <div className="h-full w-full bg-primary/70"></div>
          </div>
          <div>
            <h2 className="landing-page-heading">Get in Touch with Us</h2>
          </div>
          <div className="border-l-4 border-primary pl-8">
            <h3 className="mb-2 text-primary md:text-lg lg:text-xl xl:text-[25px]">
              Contact Number:
            </h3>
            <p className="md:text-lg lg:text-xl xl:text-[25px]">
              {contactInfo?.primaryContact}
            </p>
          </div>
          <div className="border-l-4 border-primary pl-8">
            <h3 className="mb-2 text-primary md:text-lg lg:text-xl xl:text-[25px]">
              Email:
            </h3>
            <p className="md:text-lg lg:text-xl xl:text-[25px]">
              {contactInfo?.primaryEmail}
            </p>
          </div>
          <div className="border-l-4 border-primary pl-8">
            <h3 className="mb-2 text-primary md:text-lg lg:text-xl xl:text-[25px]">
              Office Address:
            </h3>
            <p className="md:text-lg lg:text-xl xl:text-[25px]">
              {contactInfo?.primaryAddress}
            </p>
          </div>
          <div className="flex items-center justify-center gap-4 sm:justify-start xl:gap-6 2xl:gap-8">
            {/* Social Media Icons */}
            <a
              href={contactInfo?.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/Social Icons/purple/facebook.png"
                alt="facebook logo"
                width={100}
                height={100}
                className="h-7 w-7 sm:h-9 sm:w-9 lg:h-11 lg:w-11"
              />
            </a>
            <a
              href={contactInfo?.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/Social Icons/purple/instagram-2.png"
                alt="instagram logo"
                width={100}
                height={100}
                className="h-7 w-7 sm:h-9 sm:w-9 lg:h-11 lg:w-11"
              />
            </a>
            <a
              href={contactInfo?.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/Social Icons/purple/linkedin.png"
                alt="linkedin logo"
                width={100}
                height={100}
                className="h-7 w-7 sm:h-9 sm:w-9 lg:h-11 lg:w-11"
              />
            </a>
            <a
              href={contactInfo?.youtube}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/Social Icons/purple/youtube.png"
                alt="youtube logo"
                width={100}
                height={100}
                className="h-7 w-7 sm:h-9 sm:w-9 lg:h-11 lg:w-11"
              />
            </a>
          </div>
        </div>

        <Form />
      </div>
      <div className="relative aspect-[1.5] md:aspect-[2.5] lg:aspect-[3]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.8853167590564!2d73.0739308740979!3d33.66013333833592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa21b669c4f87bdff%3A0xb82073d15173bbc5!2sDecimal%20Solution!5e0!3m2!1sen!2s!4v1727802532626!5m2!1sen!2s"
          width="100%"
          height="450"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;

// 'use client';

// import { useState, useEffect } from 'react';
// import CustomInput from '../components/generic/custom-input';
// import CustomTextArea from '../components/generic/custom-textarea';
// import PageIntroduction from '../components/generic/page-introduction';
// import Image from 'next/image';
// import { ContactInfo } from '../../../types';

// const ContactUs = () => {
//   // State to hold contact info fetched from the API
//   const [contactInfo, setContactInfo] = useState<ContactInfo | null>(null);
//   const [loading, setLoading] = useState(true);

//   // State to hold form data
//   const [formData, setFormData] = useState({
//     quoteName: '',
//     quoteEmail: '',
//     quoteMobile: '',
//     quoteTechnology: '',
//     quoteDescription: '',
//   });

//   // Fetch contact info from the API on component mount
//   useEffect(() => {
//     const fetchContactInfo = async () => {
//       try {
//         const data = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/contactUs`, {
//           next: { revalidate: 300 },
//         });
//         const response = await data.json();
//         setContactInfo(response.data[0]);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching contact info:', error);
//         setLoading(false);
//       }
//     };

//     fetchContactInfo();
//   }, []);

//   // Handle input change
//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Handle form submission
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault(); // Prevent the default form submission behavior

//     // Send the form data to the backend
//     try {
//       const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/quote`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       const result = await response.json();

//       if (response.ok) {
//         alert('Form submitted successfully!');
//         // Optionally, reset the form fields after successful submission
//         setFormData({
//           quoteName: '',
//           quoteEmail: '',
//           quoteMobile:'',
//           quoteTechnology: '',
//           quoteDescription: '',
//         });
//       } else {
//         alert('Form submission failed. Please try again.');
//       }
//     } catch (error) {
//       console.error('Error submitting the form:', error);
//       alert('An error occurred while submitting the form.');
//     }
//   };

//   if (loading) {
//     return <p>Loading...</p>; // Loading state while fetching data
//   }

//   return (
//     <div>
//       <PageIntroduction title="Contact Us" image="/contact-us.png" />
//       <div className="mb-4 flex flex-col items-stretch justify-center gap-4 lg:flex-row xl:gap-16">
//         <div className="relative flex flex-1 flex-col gap-8 bg-gray-100 p-4 px-16 py-8 md:py-12 lg:px-8 lg:py-16 xl:!px-[60px] xl:py-20 2xl:py-24">
//           <div className="absolute right-0 top-0 hidden h-full w-[50px] py-24 xl:block">
//             <div className="h-full w-full bg-primary/70"></div>
//           </div>
//           <div>
//             <h2 className="landing-page-heading">Get in Touch with Us</h2>
//           </div>
//           <div className="border-l-4 border-primary pl-8">
//             <h3 className="mb-2 text-primary md:text-lg lg:text-xl xl:text-[25px]">
//               Contact Number:
//             </h3>
//             <p className="md:text-lg lg:text-xl xl:text-[25px]">
//               {contactInfo?.primaryContact}
//             </p>
//           </div>
//           <div className="border-l-4 border-primary pl-8">
//             <h3 className="mb-2 text-primary md:text-lg lg:text-xl xl:text-[25px]">
//               Email:
//             </h3>
//             <p className="md:text-lg lg:text-xl xl:text-[25px]">
//               {contactInfo?.primaryEmail}
//             </p>
//           </div>
//           <div className="border-l-4 border-primary pl-8">
//             <h3 className="mb-2 text-primary md:text-lg lg:text-xl xl:text-[25px]">
//               Office Address:
//             </h3>
//             <p className="md:text-lg lg:text-xl xl:text-[25px]">
//               {contactInfo?.primaryAddress}
//             </p>
//           </div>
//           <div className="flex items-center justify-center gap-4 sm:justify-start xl:gap-6 2xl:gap-8">
//             {/* Social Media Icons */}
//             <a href={contactInfo?.facebook} target="_blank" rel="noopener noreferrer">
//               <Image
//                 src="/Social Icons/purple/facebook.png"
//                 alt="facebook logo"
//                 width={100}
//                 height={100}
//                 className="h-7 w-7 sm:h-9 sm:w-9 lg:h-11 lg:w-11"
//               />
//             </a>
//             <a href={contactInfo?.instagram} target="_blank" rel="noopener noreferrer">
//               <Image
//                 src="/Social Icons/purple/instagram-2.png"
//                 alt="instagram logo"
//                 width={100}
//                 height={100}
//                 className="h-7 w-7 sm:h-9 sm:w-9 lg:h-11 lg:w-11"
//               />
//             </a>
//             <a href={contactInfo?.linkedIn} target="_blank" rel="noopener noreferrer">
//               <Image
//                 src="/Social Icons/purple/linkedin.png"
//                 alt="linkedin logo"
//                 width={100}
//                 height={100}
//                 className="h-7 w-7 sm:h-9 sm:w-9 lg:h-11 lg:w-11"
//               />
//             </a>
//             <a href={contactInfo?.youtube} target="_blank" rel="noopener noreferrer">
//               <Image
//                 src="/Social Icons/purple/youtube.png"
//                 alt="youtube logo"
//                 width={100}
//                 height={100}
//                 className="h-7 w-7 sm:h-9 sm:w-9 lg:h-11 lg:w-11"
//               />
//             </a>
//           </div>
//         </div>

//         <div className="flex flex-1 flex-col gap-4 p-4 px-16 py-8 md:py-12 lg:gap-8 lg:px-8 lg:py-16 xl:py-20 xl:pr-36 2xl:py-24">
//           <form onSubmit={handleSubmit}>
//             <div>
//               <h2 className="landing-page-heading">Fill up the Form</h2>
//             </div>
//             <div className="grid gap-4 lg:gap-8 xl:grid-cols-2">
//               {/* Input fields */}
//               <input
//                 type="text"
//                 name="quoteName"
//                 placeholder="Full Name"
//                 value={formData.quoteName}
//                 onChange={handleInputChange}
//                 className="border-2 p-2"
//               />
//               <input
//                 type="email"
//                 name="quoteEmail"
//                 placeholder="Email"
//                 value={formData.quoteEmail}
//                 onChange={handleInputChange}
//                 className="border-2 p-2"
//               />
//               <input
//                 type="number"
//                 name="quoteMobile"
//                 placeholder="Phone Number"
//                 value={formData.quoteMobile}
//                 onChange={handleInputChange}
//                 className="border-2 p-2 xl:col-span-2"
//               />
//               <input
//                 type="text"
//                 name="quoteTechnology"
//                 placeholder="Interested In"
//                 value={formData.quoteTechnology}
//                 onChange={handleInputChange}
//                 className="border-2 p-2 xl:col-span-2"
//               />
//               <textarea
//                 name="quoteDescription"
//                 placeholder="Write your Message"
//                 value={formData.quoteDescription}
//                 onChange={handleInputChange}
//                 rows={6}
//                 className="xl:col-span-2 border-2"
//               ></textarea>
//             </div>
//             <button
//               type="submit"
//               className="self-center rounded-lg bg-primary px-6 py-2 text-base text-white md:px-8 md:py-3 md:text-lg lg:px-12 lg:py-4 lg:text-xl xl:self-end xl:px-16 xl:text-2xl"
//             >
//               Get Quote
//             </button>
//           </form>
//         </div>
//       </div>

//       <div className="relative aspect-[1.5] md:aspect-[2.5] lg:aspect-[3]">
//         <Image src="/location.png" fill alt="location" quality={100} className="object-cover" />
//       </div>
//     </div>
//   );
// };

// export default ContactUs;
