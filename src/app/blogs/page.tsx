import PageIntroduction from "../components/generic/page-introduction";
import { Article } from "../../../types";
import SearchInput from "./SearchInput";
import Head from "next/head";

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
