import Image from "next/image";
import Link from "next/link";
import { Article } from "../../../types";
import { ArrowRight } from "lucide-react";
// import HtmlRender from "./HtmlRender";


interface BlogProps {
  blog: Article;
}

const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    // hour: "2-digit",
    // minute: "2-digit",
    // hour12: false,
  };
  return new Date(dateString).toLocaleDateString("en-GB" , options);
};



export default function BlogView({ blog }: BlogProps) {
  // console.log("inside blog view page : ")
  // console.log("alt text : " , blog.altText)
  return (
    <div
      className="shadow-[0_6px_6px_0_rgba(0,0,0,0.2)] flex flex-col h-full"
    >
      <div className="relative flex-grow">
        <Image
          src={blog.blogImage}
          alt={blog?.altText}
          width={200}
          height={200}
          className="w-full h-48 object-cover" // Set a fixed height for the image
        />
      </div>
      <div className="p-4 flex flex-col justify-between flex-grow">
        <div className="flex justify-between text-[rgba(137,137,137,0.8)] text-[10px]">
          <p>{formatDate(blog.createdAt)}</p>
        </div>
        <h2 className="text-sm font-semibold my-[16px]">{blog.blogTitle}</h2>
        
        {/* <p className="text-sm">
          {blog.blogData.replace(/<[^>]*>?/gm, '').length > 130
            ? blog.blogData.replace(/<[^>]*>?/gm, '').slice(0, 130) + "..."
            : blog.blogData.replace(/<[^>]*>?/gm, '')}
        </p> */}

        <div className=" w-full ">
          {blog.blogData.replace(/<[^>]*>?/gm, '').replace(/&nbsp;/g,
            ''
          ).slice(0,130)}...
        </div>
        
        {/* <p className="text-sm">
          {blog.blogData.length > 130
            ?  blog.blogData.slice(0, 130) + "..."
            : <HtmlRender htmlContent={blog.blogData}  />}
        </p> */}

        <div className="flex justify-between mt-3 ">
          <Link href={`/blogs/${blog.slug}`}>
            <button className="text-[14px] text-[#A1258F] flex items-center">
              Read More <ArrowRight size={13} className="mx-1" />
            </button>
          </Link>


        </div>
      </div>
    </div>
    // <Link href={/blogs/${blog._id}}>
    //   <div className="flex flex-col justify-between cursor-pointer">
    //     <div className="relative w-full aspect-[1.1]">
    //       <Image
    //         src={blog.blogImage}
    //         alt={blog.blogTitle}
    //         fill
    //         className="object-cover"
    //       />
    //       <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent"></div>
    //       <div className=" w-36 h-16  sm:w-44 sm:h-20 lg:w-52 lg:h-24 xl:w-60 xl:h-28 absolute bottom-0 left-0 bg-primary/80 flex items-center justify-center px-4 py-2">
    //         <p className="text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold p-2 mr-4 lg:p-4 border-t-2 lg:border-t-4">
    //           {new Date(blog.createdAt).toLocaleDateString("default", {
    //             day: "2-digit",
    //           })}
    //         </p>
    //         <div className="text-sm md:text-base lg:text-lg xl:text-xl text-white leading-6">
    //           <p>{new Date(blog.createdAt).getFullYear()}</p>
    //           <p>
    //             {new Date(blog.createdAt).toLocaleString("default", {
    //               month: "long",
    //             })}
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="mt-4">
    //       <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-[33px] font-bold">
    //         {blog.blogTitle}
    //       </h3>
    //       <p className="mt-2 text-base md:text-lg lg:text-xl xl:text-2xl line-clamp-4">
    //         {blog.blogData}
    //       </p>
    //     </div>
    //   </div>
    // </Link>
  );
}