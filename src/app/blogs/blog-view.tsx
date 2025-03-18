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
  // Clean the blog data by removing HTML tags and non-breaking spaces
  const cleanBlogData = blog.blogData
    .replace(/<[^>]*>?/gm, "") // Remove all HTML tags
    .replace(/&nbsp;/g, "") // Remove &nbsp; entities
    .slice(0, 130);

  return (
    <Link href={`/blogs/${blog.slug}`}>
      <div className="shadow-lg flex flex-col h-full transition-transform duration-200 transform hover:scale-105 hover:shadow-xl cursor-pointer rounded-lg overflow-hidden sm:w-full">
        {/* Responsive Image Container */}
        <div className="relative w-full aspect-[16/9] sm:aspect-[3/1]">
          <Image src={blog.blogImage} alt={blog?.altText} loading="lazy" fill className="object-cover" />
        </div>

        <div className="p-4 flex flex-col justify-between flex-grow">
          <div className="flex justify-between text-gray-500 text-xs sm:text-sm">
            <p>{formatDate(blog.createdAt)}</p>
          </div>

          <h2 className="text-sm font-semibold my-2 sm:text-base">{blog.blogTitle}</h2>

          {/* Description - Visible on all screens */}
          <div className="text-xs text-gray-700 line-clamp-3 sm:text-sm">{he.decode(cleanBlogData)}...</div>

          <div className="flex justify-between mt-3">
            <button className="text-xs text-primary flex items-center sm:text-sm">
              Read More <ArrowRight size={16} className="mx-1" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
