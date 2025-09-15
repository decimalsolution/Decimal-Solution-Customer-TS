import { Poppins } from "next/font/google";
import { AOSInit } from "./aos";
import HowCanWeHelpYou from "./how-can-we-help-you";
import { ContactInfo } from "../../types";
import "./globals.css";
import GoogleTag from "./google-tag";
import dynamic from "next/dynamic";
import { Metadata } from "next";

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
  title: "Decimal Solution - Professional Software Development Services",
  description:
    "Decimal Solution: Your partner for full-stack development, QA engineering, and Unity expertise. Elevate your digital presence with precision and innovation. Expert services in Web Development, Mobile Apps, ERP Solutions, AR/VR, Game Development, Graphics Design, and Digital Marketing.",
  keywords: [
    "decimal solution",
    "software development",
    "web development",
    "mobile app development",
    "ERP solutions",
    "AR/VR development",
    "game development",
    "graphics design",
    "digital marketing",
    "full-stack development",
    "QA engineering",
    "Unity development",
    "custom software",
    "business solutions",
    "digital transformation",
  ].join(", "),
  authors: [{ name: "Decimal Solution" }],
  creator: "Decimal Solution",
  publisher: "Decimal Solution",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Decimal Solution - Professional Software Development Services",
    description:
      "Decimal Solution: Your partner for full-stack development, QA engineering, and Unity expertise. Elevate your digital presence with precision and innovation.",
    siteName: "Decimal Solution",
    url: "https://www.decimalsolution.com",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://www.decimalsolution.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Decimal Solution - Professional Software Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Decimal Solution - Professional Software Development Services",
    description:
      "Decimal Solution: Your partner for full-stack development, QA engineering, and Unity expertise. Elevate your digital presence with precision and innovation.",
    images: ["https://www.decimalsolution.com/logo.png"],
    creator: "@decimalsolution",
    site: "@decimalsolution",
  },
  alternates: {
    canonical: "https://www.decimalsolution.com",
  },
  verification: {
    other: {
      "ahrefs-site-verification": "d11dbb3b06a7b610c2b45d1f6582db4f9a543bb5977c6d095c0656ec204c92e6",
    },
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Decimal Solution",
      url: "https://www.decimalsolution.com",
      logo: "https://www.decimalsolution.com/logo.png",
      description:
        "Professional software development company specializing in Web Development, Mobile Apps, ERP Solutions, AR/VR, Game Development, Graphics Design, and Digital Marketing.",
      foundingDate: "2010",
      founder: {
        "@type": "Person",
        name: "Dr. Tehseen Riaz Abbasi",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "2768 Sepulveda Blvd #1062",
        addressLocality: "Torrance",
        addressRegion: "CA",
        postalCode: "90505",
        addressCountry: "US",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+1 (424) 475-1713",
        contactType: "customer service",
        email: "info@decimalsolution.com",
        areaServed: "Worldwide",
        availableLanguage: ["English"],
      },
      sameAs: [
        "https://www.facebook.com/decimalsolution",
        "https://www.linkedin.com/company/decimalsolution",
        "https://www.instagram.com/decimalsolution",
        "https://www.youtube.com/@decimalsolution",
      ],
      serviceArea: {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: 33.8226,
          longitude: -118.334,
        },
        geoRadius: "20000000",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Software Development Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Web Development",
              description: "Custom web applications and websites",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Mobile App Development",
              description: "iOS and Android mobile applications",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "ERP Solutions",
              description: "Enterprise resource planning systems",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AR/VR Development",
              description: "Augmented and virtual reality applications",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Game Development",
              description: "Custom game development services",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Graphics Design",
              description: "UI/UX and graphic design services",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Digital Marketing",
              description: "Comprehensive digital marketing solutions",
            },
          },
        ],
      },
    }),
  },
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
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
        <meta name="google-site-verification" content="p2wciI-nq5J_HR6l1_V40ujUDlPjtYRILg20dclno8o" />
        {/*  Schema Markup Code  */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Decimal Solution",
              url: "https://www.decimalsolution.com",
              logo: "https://www.decimalsolution.com/logo.png",
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
