import { Poppins } from "next/font/google";
import { Metadata } from "../../types";
import { AOSInit } from "./aos";
import HowCanWeHelpYou from "./how-can-we-help-you";
import { ContactInfo } from "../../types";
import "./globals.css";
import GoogleTag from "./google-tag";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("./components/generic/header/Header"));
const Footer = dynamic(() => import("./components/generic/footer/Footer"));
// import Header from "./components/generic/header/Header";
// import Footer from "./components/generic/footer/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Decimal Solution",
  description:
    "Decimal Solution: Your partner for full-stack development, QA engineering, and Unity expertise. Elevate your digital presence with precision and innovation",
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
  verification: {
    other: {
      'ahrefs-site-verification': 'd11dbb3b06a7b610c2b45d1f6582db4f9a543bb5977c6d095c0656ec204c92e6'
    }
  }
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const data = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/contactUs`, {
    next: {
      revalidate: 300,
    },
  });

  const response = await data.json();
  const contactInfo: ContactInfo = response.data[0];
  console.log("Contact Info : ", contactInfo);

  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://decimalsolution.com" />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          as="style"
        />
        <meta name="google-site-verification" content="p2wciI-nq5J_HR6l1_V40ujUDlPjtYRILg20dclno8o" />
        {/*  Schema Markup Code  */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Decimal Solution",
              url: "https://decimalsolution.com",
              logo: "https://.decimalsolution.com/logo.png",
              description: "Decimal Solution provides full-stack development, QA engineering, and Unity expertise.",
              founders: [
                {
                  "@type": "Person",
                  name: "Dr. Tehseen Riaz Abbasi",
                  jobTitle: "CEO",
                },
              ],
              address: {
                "@type": "PostalAddress",
                streetAddress: contactInfo.primaryAddress,
                addressLocality: "Islamabad",
                addressRegion: "Pakistan",
                postalCode: "44790 ",
                addressCountry: "PK",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: contactInfo.primaryContact,
                contactType: "Customer Support",
                areaServed: "PK and US",
                availableLanguage: "English and Urdu",
              },
              sameAs: [
                contactInfo.facebook || "https://www.facebook.com/decimalsolution",
                contactInfo.instagram || "https://www.instagram.com/decimalsolution",
                contactInfo.linkedIn || "https://www.linkedin.com/company/decimalsolution",
                contactInfo.youtube || "https://www.youtube.com/@decimalsolution",
              ],
            }),
          }}
        />
      </head>

      <AOSInit />
      {/* <GoogleTag ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} /> */}
      <body className={`${poppins.className} overflow-x-hidden w-full`}>
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
          <GoogleTag ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
        ) : null}
        <Header contactInfo={contactInfo} />
        {children}
        <Footer contactInfo={contactInfo} />
        <HowCanWeHelpYou contactInfo={contactInfo} />
      </body>
    </html>
  );
}
