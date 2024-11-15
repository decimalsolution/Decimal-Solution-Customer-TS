import Image from "next/image";
import Link from "next/link";
import { Article } from "../../../types";
import { ArrowRight } from "lucide-react";
import he from "he";

interface BlogProps {
  blog: Article;
}

const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(dateString).toLocaleDateString("en-GB", options);
};

export default function BlogView({ blog }: BlogProps) {
  // console.log("Blog Slug : " , blog.slug)
  // console.log("Blog Seo Title : " , blog.seoTitle)
  // console.log("Blog Title : " , blog.blogTitle)
  // console.log(blog)

  // Clean the blog data by removing HTML tags and non-breaking spaces
  const cleanBlogData = blog.blogData
    .replace(/<[^>]*>?/gm, "") // Remove all HTML tags
    .replace(/&nbsp;/g, "") // Remove &nbsp; entities
    .slice(0, 130);

  return (
    <Link href={`/blogs/${blog.slug}`}>
      <div className="shadow-[0_6px_6px_0_rgba(0,0,0,0.2)] flex flex-col h-full transition-transform duration-200 transform hover:scale-105 hover:shadow-lg cursor-pointer">
        <div className="relative flex-grow">
          <Image
            src={blog.blogImage}
            alt={blog?.altText}
            loading="lazy"
            width={200}
            height={200}
            className="w-full h-48 object-cover"
          />
        </div>
        <div className="p-4 flex flex-col justify-between flex-grow">
          <div className="flex justify-between text-[rgba(137,137,137,0.8)] text-[10px]">
            <p>{formatDate(blog.createdAt)}</p>
          </div>
          <h2 className="text-sm font-semibold my-[16px]">{blog.blogTitle}</h2>
          <div className="text-sm text-gray-700 line-clamp-3">{he.decode(cleanBlogData)}...</div>
          <div className="flex justify-between mt-3">
            <button className="text-[14px] text-primary flex items-center">
              Read More <ArrowRight size={13} className="mx-1" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
