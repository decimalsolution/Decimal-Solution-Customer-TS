import HeadingText from "./HeadingText";
import { Article } from "../../../../types";
import Link from "next/link";
// import BlogView from "@/app/blogs/blog-view";
import dynamic from "next/dynamic";
const BlogView = dynamic(() => import("@/app/blogs/blog-view"));

const Articles = async () => {
  let articles: Article[] = [];

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blogs`, {
      next: { revalidate: 300 },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch articles");
    }

    const data = await response.json();
    articles = data.data;
  } catch (error) {
    console.error("Error fetching articles:", error);
    // Optionally, return a fallback UI or message to indicate an issue with fetching data.
    return <p>Failed to load articles. Please try again later.</p>;
  }

  const newblogs = articles.filter((blog) => !blog.blocked);

  return (
    <section className="my-10 w-full">
      <div className="my-4 px-2 sm:px-16 xl:ml-14 mb-12">
      <HeadingText text1="Latest" text2="Blogs" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-8 px-16">
        {newblogs.reverse().splice(0, 3).map((article, index) => {
          return <BlogView key={"blog-" + index} blog={article} />;
        })}
      </div>

      <div className="flex justify-center">
        <Link
          href="/blogs"
          className="flex justify-center mt-12 sm:w-36 md:w-40 md:text-base lg:w-40 lg:py-3 lg:text-lg xl:w-35 xl:text-xl 2xl:w-50 2xl:text-2xl"
        >
          <button className="block rounded-xl bg-primary px-4 py-2 text-sm font-medium text-white">
            View All
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Articles;
