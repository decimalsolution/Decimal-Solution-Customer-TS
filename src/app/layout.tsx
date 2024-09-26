// import type { Metadata } from "next";
import { Poppins } from "next/font/google";
// import dynamic from 'next/dynamic';
import { Metadata } from "../../types";
import { AOSInit } from "./aos";
import HowCanWeHelpYou from "./how-can-we-help-you";
import { ContactInfo } from "../../types";
import Head from "next/head";


import "./globals.css";

import Header from "./components/generic/header/Header";
import Footer from "./components/generic/footer/Footer";

// const Header = dynamic(() => import("./components/generic/header/Header"), { ssr: false });
// const Footer = dynamic(() => import("./components/landing-page/Footer"), { ssr: false });
// const Footer = dynamic(() => import("./components/generic/footer/footer"), { ssr: false });

interface font {
  className : string
  style? : {[key:string] : string | number}
}

const poppins:font = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});



export const metadata: Metadata = {
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
  const contactInfo:ContactInfo = response.data[0];


  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.decimalsolution.com/" /> 
      </Head>
      <AOSInit />
      <body className={`${poppins.className} overflow-x-hidden w-full`}>

        <Header contactInfo = {contactInfo} />
        {children}
        <Footer contactInfo={contactInfo}/>
        <HowCanWeHelpYou contactInfo={contactInfo} />
      </body>
    </html>
  );
}
