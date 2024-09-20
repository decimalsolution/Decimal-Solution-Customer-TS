import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import dynamic from 'next/dynamic';
import { ContactInfo } from '../../types';

import "./globals.css";

const Header = dynamic(() => import("./components/generic/header/Header"), { ssr: false });
const Footer = dynamic(() => import("./components/landing-page/Footer"), { ssr: false });

interface font {
  className : string
  style? : {[key:string] : string | number}
}

const poppins:font = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

interface MetaData {
  title : string;
  description : string
}

export const metadata: MetaData = {
  title: "Decimal Solution",
  description: "Decimal Solution: Your partner for full-stack development, QA engineering, and Unity expertise. Elevate your digital presence with precision and innovation",
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode;}>) {

  const data = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/contactUs`, {
    next: {
      revalidate: 300,
    },
  });

  const response = await data.json();
  const contactInfo = response.data[0];



  return (
    <html lang="en">
      <body className={`${poppins.className} overflow-x-hidden w-full`}>

        <Header contactInfo = {contactInfo} />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
