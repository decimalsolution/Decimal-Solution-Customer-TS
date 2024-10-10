import PageIntroduction from "../components/generic/page-introduction";
import PortfolioContent from "./content";
import { ProjectGroup , Metadata, Project } from "../../../types";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Dive into the world of insights and expertise on Decimal Solutions' Blogs Page. Explore thought-provoking content covering Web and Mobile Development, ERP Solutions, AR/VR, Game Development, Graphics Designing, and Digital Marketing. Stay informed, inspired, and ahead in the ever-evolving tech landscape.",
};

export default async function Portfolio() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/groupedprojects`,
    {
      next: {
        revalidate: 300,
      },
    },
  );

  const data = await res.json();
  const groups: ProjectGroup[] = data.data;
  const recentProjects = data.recentProjects;

  return (
    <div>
      <Head>
        {recentProjects.map((project:Project, index:number) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "CreativeWork",
                "name": project.title,
                "description": project.shortDescription,
                "image": project.coverImage,
                "url": project.link,
                "author": {
                  "@type": "Organization",
                  "name": "Decimal Solutions",
                },
                "genre": project.category,
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
