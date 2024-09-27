import { Poppins } from "next/font/google";
import { Metadata } from "../../types";
import { AOSInit } from "./aos";
import HowCanWeHelpYou from "./how-can-we-help-you";
import { ContactInfo } from "../../types";
import "./globals.css";

import Header from "./components/generic/header/Header";
import Footer from "./components/generic/footer/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Decimal Solution",
  description: "Decimal Solution: Your partner for full-stack development, QA engineering, and Unity expertise. Elevate your digital presence with precision and innovation",
  openGraph: {
    title: "Decimal Solution",
    siteName: "Decimal Solution",
    url: "https://www.decimalsolution.com",
    type: "website",
    images: [
      {
        url: "https://www.decimalsolution.com/logo.png",
        width: 1920,
        height: 1080,
      },
    ],
  },
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode;}>) {
  const data = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/contactUs`, {
    next: {
      revalidate: 300,
    },
  });

  const response = await data.json();
  const contactInfo: ContactInfo = response.data[0];

  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://www.decimalsolution.com" />
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" as="style" />
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Decimal Solution",
                "url": "https://www.decimalsolution.com",
                "logo": "https://www.decimalsolution.com/logo.png",
                "description": "Decimal Solution provides full-stack development, QA engineering, and Unity expertise.",
                "founders": [
                  {
                    "@type": "Person",
                    "name": "Dr. Tehseen Riaz Abbasi",
                    "jobTitle": "CEO"
                  }
                ],
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "I-8/4",
                  "addressLocality": "Islamabad",
                  "addressRegion": "Pakistan",
                  "postalCode": "44790 ",
                  "addressCountry": "PK"
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "03331111955",
                  "contactType": "Customer Support",
                  "areaServed": "PK and US",
                  "availableLanguage": "English and Urdu"
                },
                "sameAs": [
                  "https://www.facebook.com/decimalsolution",
                  "https://www.instagram.com/decimalsolution",
                  "https://www.linkedin.com/company/decimalsolution",
                  "https://www.youtube.com/@decimalsolution",
                ]
              })
            }}
        />
      </head>
      
      <AOSInit />
      <body className={`${poppins.className} overflow-x-hidden w-full`}>
        <Header contactInfo={contactInfo} />
        {children}
        <Footer contactInfo={contactInfo} />
        <HowCanWeHelpYou contactInfo={contactInfo} />
      </body>
    </html>
  );
}
