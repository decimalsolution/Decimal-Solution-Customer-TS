import PageIntroduction from "../components/generic/page-introduction";
import { Article } from "../../../types";
import SearchInput from "./SearchInput";
import Head from "next/head";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs | Decimal Solution - Tech Insights & Industry News",
  description:
    "Explore our comprehensive blog covering Web Development, Mobile App Development, ERP Solutions, AR/VR, Game Development, Graphics Designing, and Digital Marketing. Stay updated with the latest tech trends and insights from Decimal Solution.",
  keywords: [
    "tech blog",
    "software development blog",
    "web development insights",
    "mobile app development",
    "ERP solutions",
    "AR/VR technology",
    "game development",
    "graphics design",
    "digital marketing",
    "decimal solution blog",
    "tech trends",
    "industry insights",
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
    url: "https://decimalsolution.com/blogs",
    title: "Blogs | Decimal Solution - Tech Insights & Industry News",
    description:
      "Explore our comprehensive blog covering Web Development, Mobile App Development, ERP Solutions, AR/VR, Game Development, Graphics Designing, and Digital Marketing.",
    siteName: "Decimal Solution",
    images: [
      {
        url: "https://decimalsolution.com/blogs.png",
        width: 1200,
        height: 630,
        alt: "Decimal Solution Blogs - Tech Insights & Industry News",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blogs | Decimal Solution - Tech Insights & Industry News",
    description:
      "Explore our comprehensive blog covering Web Development, Mobile App Development, ERP Solutions, AR/VR, Game Development, Graphics Designing, and Digital Marketing.",
    images: ["https://decimalsolution.com/blogs.png"],
    creator: "@decimalsolution",
    site: "@decimalsolution",
  },
  alternates: {
    canonical: "https://decimalsolution.com/blogs",
  },
};

const Blogs = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blogs`, {
    next: { revalidate: 300 },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch blogs, status: ${res.status}`);
  }

  const text = await res.text();
  const data = text ? JSON.parse(text) : null;
  const blogs: Article[] = data.data;
  const filteredBlogs = blogs.filter((blog) => !blog.blocked);
  const newblogs: Article[] = filteredBlogs;

  return (
    <div className="mb-16">
      <Head>
        {newblogs.map((blog, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BlogPosting",
                headline: blog.blogTitle,
                description: blog.metaDescription,
                datePublished: blog.createdAt,
                author: {
                  "@type": "Person",
                  name: blog.authorName,
                },
                publisher: {
                  "@type": "Organization",
                  name: "Decimal Solution",
                  url: "https://decimalsolution.com",
                },
                mainEntityOfPage: {
                  "@type": "WebPage",
                  "@id": `https://decimalsolution.com/blogs/${blog.slug}`,
                },
                image: blog.blogImage, // assuming each blog has a cover image
              }),
            }}
          />
        ))}
      </Head>

      <PageIntroduction title="Blogs" image="/blogs.png" />

      <SearchInput newblogs={newblogs} />
    </div>
  );
};

export default Blogs;
