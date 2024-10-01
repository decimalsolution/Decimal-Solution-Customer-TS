import { cn } from "../../../../../lib/utils";
import Image from "next/image";
import Link from "next/link";
import { ContactInfo } from "../../../../../types";

interface NavigationLinks {
  name: string;
  href: string;
}

interface HeaderProps {
  contactInfo: ContactInfo;
}

const navigationLinks: NavigationLinks[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "Portfolio",
    href: "/portfolio",
  },
  {
    name: "Our Products",
    href: "/products",
  },
  {
    name: "Careers",
    href: "/careers",
  },
  {
    name: "About Us",
    href: "/about-us",
  },
  {
    name: "Blogs",
    href: "/blogs",
  },
  {
    name: "Contact Us",
    href: "/contact-us",
  },
];

const Footer: React.FC<HeaderProps> = ({ contactInfo }) => {
  return (
    <div className="relative flex flex-col items-center gap-8 pb-8 pt-12 text-white">
      <Image
        src={"/footer-bg.webp"}
        alt="footer bg image"
        fill
        loading="lazy"
        className="absolute inset-0 z-[-1] object-cover object-center"
      />
      <div className=" flex flex-wrap items-center justify-center gap-2 md:gap-4 lg:gap-8 ">
        {navigationLinks.map((link, i) => (
          <Link
            key={i}
            className={cn(
              "text-base font-medium text-white transition-all hover:text-white/75 md:text-lg lg:text-xl xl:text-xl",
              i !== navigationLinks.length - 1
                ? "border-r border-white pr-2 md:pr-4 lg:pr-8"
                : ""
            )}
            href={link.href}
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div className="my-4 flex flex-col items-center justify-center gap-8 sm:flex-row">
        <a
          href={`mailto:${contactInfo.primaryEmail}`}
          className="text-base font-medium text-white transition-colors md:text-lg lg:text-xl xl:text-2xl"
        >
          {contactInfo.primaryEmail}
        </a>
        <div className="hidden h-8 w-[1px] bg-white sm:block"></div>
        <a
          href={`tel:${contactInfo.primaryContact}`}
          className="text-base font-medium text-white transition-colors md:text-lg lg:text-xl xl:text-2xl"
        >
          {contactInfo.primaryContact}
        </a>
        <div className="hidden h-8 w-[1px] bg-white sm:block"></div>
        <a
          href={contactInfo.googleMapLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-center text-base font-medium text-white transition-colors md:text-lg lg:text-xl xl:text-2xl"
        >
          I-8/4, Islamabad, Pakistan
        </a>
      </div>

      <div className="flex items-center gap-4 xl:gap-6 2xl:gap-8">
        <Link
          href={contactInfo.facebook}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/Social Icons/white/facebook.png"
            width={36} // Set explicit width
            height={36} // Set explicit height
            className="h-9 w-9 xl:h-8 xl:w-8 2xl:h-9 2xl:w-9"
            alt="Facebook"
          />
        </Link>

        <Link
          href={contactInfo.instagram}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/Social Icons/white/instagram-2.png"
            width={36}
            height={36}
            className="h-9 w-9 xl:h-8 xl:w-8 2xl:h-9 2xl:w-9"
            alt="Instagram"
          />
        </Link>

        <Link
          href={contactInfo.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/Social Icons/white/linkedin.png"
            width={36}
            height={36}
            className="h-9 w-9 xl:h-8 xl:w-8 2xl:h-9 2xl:w-9"
            alt="LinkedIn"
          />
        </Link>

        <Link
          href={contactInfo.youtube}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/Social Icons/white/youtube.png"
            width={36}
            height={36}
            className="h-9 w-9 xl:h-8 xl:w-8 2xl:h-9 2xl:w-9"
            alt="Youtube"
          />
        </Link>
      </div>

      <div className="mx-32 h-[1px] w-full bg-white/50"></div>

      <p className="text-center text-xs font-medium text-white sm:text-sm md:text-base lg:text-lg">
        CopyRight © {new Date().getFullYear()} Decimal Solution. All Rights
        Reserved.{" "}
      </p>
    </div>
  );
};

export default Footer;
