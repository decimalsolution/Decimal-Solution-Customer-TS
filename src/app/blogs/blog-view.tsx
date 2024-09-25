import Image from "next/image";
import Link from "next/link";
import { Article } from "../../../types";

interface BlogProps {
    blog : Article;
}

export default function BlogView({ blog } : BlogProps) {
  return (
    <Link href={`/blogs/${blog._id}`}>
      <div className="flex flex-col justify-between cursor-pointer">
        <div className="relative w-full aspect-[1.1]">
          <Image
            src={blog.blogImage}
            alt={blog.blogTitle}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent"></div>
          <div className=" w-36 h-16  sm:w-44 sm:h-20 lg:w-52 lg:h-24 xl:w-60 xl:h-28 absolute bottom-0 left-0 bg-primary/80 flex items-center justify-center px-4 py-2">
            <p className="text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold p-2 mr-4 lg:p-4 border-t-2 lg:border-t-4">
              {new Date(blog.createdAt).toLocaleDateString("default", {
                day: "2-digit",
              })}
            </p>
            <div className="text-sm md:text-base lg:text-lg xl:text-xl text-white leading-6">
              <p>{new Date(blog.createdAt).getFullYear()}</p>
              <p>
                {new Date(blog.createdAt).toLocaleString("default", {
                  month: "long",
                })}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-[33px] font-bold">
            {blog.blogTitle}
          </h3>
          <p className="mt-2 text-base md:text-lg lg:text-xl xl:text-2xl line-clamp-4">
            {blog.blogDescription}
          </p>
        </div>
      </div>
    </Link>
  );
}
