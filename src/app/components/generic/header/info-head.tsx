import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import { ContactInfo } from "../../../../../types";
import Image from "next/image";

interface InfoHeaderProps {
  contactInfo: ContactInfo;
}

const InfoHeader: React.FC<InfoHeaderProps> = ({ contactInfo }) => {
  const socialsData = [
    {
      name: "Youtube",
      href: contactInfo.youtube,
      src: "/Social Icons/purple/youtube.png",
    },
    {
      name: "facebook",
      href: contactInfo.facebook,
      src: "/Social Icons/purple/facebook.png",
    },
    {
      name: "Instagram",
      href: contactInfo.instagram,
      src: "/Social Icons/purple/instagram-2.png",
    },
    {
      name: "LinkedIn",
      href: contactInfo.linkedIn,
      src: "/Social Icons/purple/linkedin.png",
    },
  ];

  return (
    <div className="hidden md:flex flex-col items-center justify-between gap-4 md:flex-row xl:items-stretch sm:px-6 border-b border-primary">
      <div className="flex flex-row items-center gap-2 max-[500px]:flex-col md:gap-4">
        <div className="mr-4 mt-2 flex items-center">
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
            <Link href={`mailto:${contactInfo.primaryEmail}`}>{contactInfo.primaryEmail}</Link>
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4 xl:gap-6">
        {socialsData.map((social) => (
          <Link key={social.href} href={social.href} target="_blank" rel="noopener noreferrer">
            <Image width={36} height={36} src={social.src} className="h-8 w-8 xl:h-8 xl:w-8 " alt={social.name} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default InfoHeader;
