"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Logs, X } from "lucide-react";
import { Transition } from "@headlessui/react"; // Import Transition component
import InfoHeader from "./info-head";
import { ContactInfo } from "../../../../../types";
import { cn } from "@/lib/utils";

interface NavigationLinks {
  name: string;
  href: string;
  highlight?: boolean;
}

const navigationLinks: NavigationLinks[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Services",
    href: "/services",
    // Custom: ServicesModal,
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
    highlight: true,
  },
];

interface HeaderProps {
  contactInfo: ContactInfo;
}

const Header: React.FC<HeaderProps> = ({ contactInfo }) => {
  const pathname = usePathname();

  // console.log(contactInfo);

  const [isMobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const toggleMobileMenu = () => {
    setMobileMenuOpen((prevState) => !prevState);
  };

  return (
    <nav className="">
      <InfoHeader contactInfo={contactInfo} />
      <div className=" flex items-center justify-between md:justify-between px-8 md:mx-0 shadow-[0_4px_4px_-2px_rgba(0,0,0,0.1)] ">
        <Link href="/" className="ml-0 md:ml-10">
          <div className="relative h-[80px] w-[130px]">
            <Image
              src="/logo.png"
              alt="Decimal Solution Logo"
              fill
              // width={100}
              // height={100}
              className="w-full h-full object-contain"
            />
          </div>
        </Link>

        <div className="hidden md:block">
          <ul className=" text-[#5A5A5A] flex text-md font-semibold items-center justify-between">
            {navigationLinks.map((item) => {
              return (
                <li key={item.href} className={cn(`mx-2  hover:text-primary`, item.highlight ? "text-primary" : "")}>
                  <Link
                    href={item.href}
                    className={clsx(item.href.toLocaleLowerCase() === pathname.toLowerCase() && "!text-primary")}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}

            {/* <li className="mx-2 hover:text-primary">
                <Link href="/services">Services</Link>
              </li>
              <li className="mx-2 hover:text-primary">
                <Link href="/portfolio">Portfolio</Link>
              </li>
              <li className="mx-2 hover:text-primary">
                <Link href="/portfolio">Our Products</Link>
              </li>
              <li className="mx-2 hover:text-primary">
                <Link href="/portfolio">Careers</Link>
              </li>
              <li className="mx-2 hover:text-primary">
                <Link href="/about-us">About Us</Link>
              </li>
              <li className="mx-2 hover:text-primary">
                <Link href="/blogs">Blogs</Link>
              </li> */}
          </ul>
        </div>

        {/* <div className="hidden md:block text-white font-medium rounded-full p-2 bg-primary">
            <button>Contact Us</button>
          </div> */}

        {/* Mobile Hamburger Menu */}
        <div className="block md:hidden">
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <X className="block" /> : <Logs className="block" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <Transition
        show={isMobileMenuOpen}
        enter="transition ease-out duration-200 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="md:hidden px-8 py-4 bg-gray-50">
          <ul className="text-sm flex flex-col space-y-4 text-gray-700">
            {navigationLinks.map((item, index) => {
              return (
                <li key={index} className="hover:text-primary">
                  <Link
                    href={item.href}
                    onClick={toggleMobileMenu}
                    className={clsx(item.href.toLocaleLowerCase() === pathname.toLowerCase() && "!text-primary")}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
            {/* <li>
                <Link href="/" onClick={toggleMobileMenu}>HOME</Link>
              </li>
              <li>
                <Link href="/" onClick={toggleMobileMenu}>SERVICES</Link>
              </li>
              <li>
                <Link href="/" onClick={toggleMobileMenu}>PORTFOLIO</Link>
              </li>
              <li>
                <Link href="/" onClick={toggleMobileMenu}>OUR PRODUCTS</Link>
              </li>
              <li>
                <Link href="/" onClick={toggleMobileMenu}>CAREERS</Link>
              </li>
              <li>
                <Link href="/" onClick={toggleMobileMenu}>ABOUT US</Link>
              </li>
              <li>
                <Link href="/" onClick={toggleMobileMenu}>BLOGS</Link>
              </li> */}
            {/* <li>
                <button className="text-white font-medium rounded-full p-1 bg-primary w-full">
                  Contact Us
                </button>
              </li> */}
          </ul>
        </div>
      </Transition>
    </nav>
  );
};

export default Header;
