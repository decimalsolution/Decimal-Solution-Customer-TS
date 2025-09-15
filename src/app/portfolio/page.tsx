import PageIntroduction from "../components/generic/page-introduction";
import PortfolioContent from "./content";
import { ProjectGroup, Project } from "../../../types";
import Head from "next/head";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Decimal Solution - Our Work & Projects",
  description:
    "Explore our impressive portfolio showcasing successful projects in Web Development, Mobile App Development, ERP Solutions, AR/VR, Game Development, Graphics Designing, and Digital Marketing. See how we've helped businesses achieve their digital goals.",
  keywords: [
    "portfolio",
    "projects",
    "case studies",
    "web development projects",
    "mobile app projects",
    "ERP solutions",
    "AR/VR projects",
    "game development",
    "graphics design portfolio",
    "digital marketing campaigns",
    "decimal solution work",
    "client projects",
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
    type: "website",
    locale: "en_US",
    url: "https://www.decimalsolution.com/portfolio",
    title: "Portfolio | Decimal Solution - Our Work & Projects",
    description:
      "Explore our impressive portfolio showcasing successful projects in Web Development, Mobile App Development, ERP Solutions, AR/VR, Game Development, Graphics Designing, and Digital Marketing.",
    siteName: "Decimal Solution",
    images: [
      {
        url: "https://www.decimalsolution.com/portfolio.jpg",
        width: 1200,
        height: 630,
        alt: "Decimal Solution Portfolio - Our Work & Projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Decimal Solution - Our Work & Projects",
    description:
      "Explore our impressive portfolio showcasing successful projects in Web Development, Mobile App Development, ERP Solutions, AR/VR, Game Development, Graphics Designing, and Digital Marketing.",
    images: ["https://www.decimalsolution.com/portfolio.jpg"],
    creator: "@decimalsolution",
    site: "@decimalsolution",
  },
  alternates: {
    canonical: "https://www.decimalsolution.com/portfolio",
  },
};

export default async function Portfolio() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/groupedprojects`, {
    next: {
      revalidate: 300,
    },
  });

  const data = await res.json();
  const groups: ProjectGroup[] = data.data;
  const recentProjects = data.recentProjects;

  return (
    <div>
      <Head>
        {recentProjects.map((project: Project, index: number) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "CreativeWork",
                name: project.title,
                description: project.shortDescription,
                image: project.coverImage,
                url: project.link,
                author: {
                  "@type": "Organization",
                  name: "Decimal Solution",
                },
                genre: project.category,
              }),
            }}
          />
        ))}
      </Head>

      <PageIntroduction title="Our Projects" image={"/portfolio.jpg"} />

      <PortfolioContent
        groups={groups}
        recentProjects={recentProjects}
        categories={["All", ...groups.map((group) => group.category)]}
      />
    </div>
  );
}
