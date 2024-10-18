// import Image from "next/image";
// import { ArrowRight } from "lucide-react";
import HeadingText from "./HeadingText";
import { Article } from "../../../../types";
import Link from "next/link";
import BlogView from "@/app/blogs/blog-view";

const Articles = async () => {
  
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blogs`, {
    next: { revalidate: 300 },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch articles");
  }

  const data = await response.json();
  const articles: Article[] = data.data;

  const newblogs = articles.filter((blog) => {
    if (blog.blocked === false) {
      return (
        blog
      )
    }
  })

  // const formatDate = (dateString: string): string => {
  //   const options: Intl.DateTimeFormatOptions = {
  //     year: "numeric",
  //     month: "long",
  //     day: "numeric",
  //     // hour: "2-digit",
  //     // minute: "2-digit",
  //     // hour12: false,
  //   };
  //   return new Date(dateString).toLocaleDateString(undefined, options);
  // };

  return (
    <section className="my-10 w-full">
      <div className="py-12 px-24 sm:px-32 mb-6">
        <HeadingText text1="Latest" text2="Blogs" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-8 px-16">
        {newblogs.reverse().splice(0,3).map((article, index) => {
          return (
            <BlogView key={"blog-" + index} blog={article}/>
          );
        })}
      </div>

      <div className="flex justify-center">
        <Link
          href="/blogs"
          className="flex justify-center mt-12 sm:w-36 md:w-40 md:text-base lg:w-40 lg:py-3 lg:text-lg xl:w-35 xl:text-xl 2xl:w-50 2xl:text-2xl"
        >
          <button className="block rounded-xl bg-primary  px-4 py-2 text-sm font-medium text-white ">
            View All
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Articles;
