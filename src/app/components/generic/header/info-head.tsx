import {  Mail, Phone } from "lucide-react";
import Link from "next/link";
import { ContactInfo } from '../../../../../types';
import Image from "next/image";

interface InfoHeaderProps {
    contactInfo: ContactInfo;
}

const InfoHeader:React.FC<InfoHeaderProps> = ({contactInfo}) => {
  const socialsData = [
    {
      name: "Youtube",
    //   href: '',
      href: contactInfo.youtube,
      src: "/Social Icons/purple/youtube.png",
    },
    {
      name: "facebook",
    //   href: '',
      href: contactInfo.facebook,
      src: "/Social Icons/purple/facebook.png",
    },
    {
      name: "Instagram",
    //   href: '',
      href: contactInfo.instagram,
      src: "/Social Icons/purple/instagram-2.png",
    },
    {
      name: "LinkedIn",
    //   href: '',
      href: contactInfo.linkedIn,
      src: "/Social Icons/purple/linkedin.png",
    },
   
  ];
  
  return (
    <div className="flex flex-col items-center justify-between gap-4 xl:flex-row xl:items-stretch sm:px-6 border-b border-gray-400 ">
      <div className="flex flex-row items-center gap-2 max-[500px]:flex-col md:gap-4">
        <div className="mr-4 flex items-center">
          <Phone className="text-primary" fill="currentColor" strokeWidth={0} />
          <p className="ml-2 text-base text-gray-700 md:text-lg 2xl:text-xl">
            <Link href={`tel:${contactInfo.primaryContact}`}>
              <span>{contactInfo.primaryContact}</span>
            </Link>

            {contactInfo.otherContacts?.[0]?.length ? (
              <Link href={`https://wa.me/${contactInfo.whatsapp}`}>
                <span>, {contactInfo.otherContacts[0]}</span>
              </Link>
            ) : null}

          </p>
        </div>

        <div className="mr-4 flex items-center">
          <Mail className="text-primary" />
          <p className="ml-2 text-base text-gray-700 md:text-lg 2xl:text-xl">
            <Link href={`mailto:${contactInfo.primaryEmail}`}>

              {contactInfo.primaryEmail}
              {/* info@decimalsolution */}

            </Link>
          </p>
        </div>

      </div>

      <div className="flex items-center gap-4 xl:gap-6 2xl:gap-8">
        {socialsData.map((social, index) => (
          <>
            {/* {index !== socials.length - 1 && ( */}
              <div className="hidden h-full w-[1px] bg-gray-400  xl:block"></div>
            {/* )} */}
            <Link href={social.href} target="_blank" rel="noopener noreferrer">
              <Image
                key={index}
                width={36}  // Set explicit width
                height={36}
                src={social.src}
                className="h-8 w-8 xl:h-8 xl:w-8 2xl:h-9 2xl:w-9 "
                alt={social.name}
              />
            </Link>
          </>
        ))}
        {/* <div className="hidden xl:block w-[1px] h-full bg-gray-400"></div>

        <Link
          href={contactInfo.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/Social Icons/purple/twitter.png"
            className="w-9 h-9 xl:w-8 2xl:w-9 xl:h-8 2xl:h-9"
          />
        </Link> */}
        <Link href="/contact-us">
          <button className="font-500 h-10 w-[120px]  bg-primary text-white lg:w-48 xl:h-16 xl:w-64 xl:text-xl 2xl:h-20 2xl:w-80 2xl:text-2xl">
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  );
}


export default InfoHeader;