import PageIntroduction from "../components/generic/page-introduction";
import { ChevronLeft} from "lucide-react";
// import  { ChevronRight }  from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
import BlogView from "./blog-view";
import { Metadata , Article} from "../../../types";

export const metadata:Metadata = {
  title: "Blogs",
  description:
    "Dive into the world of insights and expertise on Decimal Solutions' Blogs Page. Explore thought-provoking content covering Web and Mobile Development, ERP Solutions, AR/VR, Game Development, Graphics Designing, and Digital Marketing. Stay informed, inspired, and ahead in the ever-evolving tech landscape.",
};

export default async function Blogs() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/blogs`,

    {
      next: {
        revalidate: 300,
      },
    },
  );

  if (!res.ok) throw new Error("Something went wrong");
  const data = await res.json();

  const blogs:Article[] = data.data;

  // const totalPages = Math.ceil(blogs.length / 6);

  return (
    <div className="mb-16">
      <PageIntroduction title="Blogs" image={"/blogs.png"} />

      <div className="grid grid-cols-1 gap-8 p-8 sm:p-12 md:grid-cols-2 md:p-20 lg:gap-16 lg:p-28 xl:p-32 2xl:grid-cols-3 2xl:p-36">
        {blogs?.map((blog, index) => (
          <BlogView key={"blog-" + index} blog={blog} />
        ))}
      </div>

      <div className="flex items-center justify-center gap-2 px-8 md:gap-4 lg:gap-6 xl:gap-8 [&_*]:transition-all [&_*]:duration-300">
        {/* <div className="group grid h-10 w-10 cursor-pointer place-items-center rounded-full border border-gray-500/50 hover:bg-gray-800 md:h-12 md:w-12 lg:h-14 lg:w-14 xl:h-16 xl:w-16">
          <ChevronLeft className="h-3/4 w-3/4 group-hover:text-white" />
        </div> */}
        {/* {Array(totalPages)
          .fill()
          .map((_, index) => (
            <div
              key={index}
              className="group grid h-10 w-10 cursor-pointer place-items-center rounded-full border border-gray-500/50 hover:bg-gray-800 md:h-12 md:w-12 lg:h-14 lg:w-14 xl:h-16 xl:w-16"
            >
              <p className="text-base group-hover:text-white md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                {index + 1}
              </p>
            </div>
          ))} */}
        {/* <div className="group grid h-10 w-10 cursor-pointer place-items-center rounded-full border border-gray-500/50 hover:bg-gray-800 md:h-12 md:w-12 lg:h-14 lg:w-14 xl:h-16 xl:w-16">
          <ChevronRight className="h-3/4 w-3/4 group-hover:text-white" />
        </div> */}
      </div>
    </div>
  );
}
