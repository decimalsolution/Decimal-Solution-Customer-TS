'use client'

import React from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../../../public/images/logo.png";
import { Logs, X } from "lucide-react";
import { Transition } from "@headlessui/react";  // Import Transition component
import InfoHeader from './info-head'
import { ContactInfo } from '../../../../../types';


interface HeaderProps {
  contactInfo: ContactInfo;
}

const Header:React.FC<HeaderProps> = ({contactInfo}) => {

    const [isMobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
    const toggleMobileMenu = () => {
        setMobileMenuOpen((prevState) => !prevState);
    }

    return (
      <nav className="">
        <InfoHeader contactInfo={contactInfo} />
        <div className="py-2 flex items-center justify-between md:justify-around px-8 md:mx-0 shadow-[0_4px_4px_-2px_rgba(0,0,0,0.1)] ">
          <div className="">
            <Image src='/logo.webp' alt="Decimal Solution Logo" width={100} height={70} />
          </div>

          <div className="hidden md:block">
            <ul className=" text-[#5A5A5A] flex text-xs font-semibold items-center justify-between">
              <li className="mx-2">
                <Link href="/">Home</Link>
              </li>
              <li className="mx-2">
                <Link href="/">Services</Link>
              </li>
              <li className="mx-2">
                <Link href="/">Portfolio</Link>
              </li>
              <li className="mx-2">
                <Link href="/">Our Products</Link>
              </li>
              <li className="mx-2">
                <Link href="/">Careers</Link>
              </li>
              <li className="mx-2">
                <Link href="/">About Us</Link>
              </li>
              <li className="mx-2">
                <Link href="/">Blogs</Link>
              </li>
            </ul>
          </div>

          {/* <div className="hidden md:block text-white font-medium rounded-full p-2 bg-[#A1258F]">
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
              <li>
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
              </li>
              <li>
                <button className="text-white font-medium rounded-full p-1 bg-[#A1258F] w-full">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
        </Transition>
      </nav>
    );
}

export default Header;
