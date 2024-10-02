
import PageIntroduction from "@/app/components/generic/page-introduction";
import { ChevronLeft, Facebook, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { Article } from "../../../../types";
// import HtmlRender from "../HtmlRender"; // Component to handle safe HTML rendering
import { Metadata } from "next";

export interface Params {
  params: {
    slug: string;
  };
}

// Generate metadata for the specific blog
export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const slug = params.slug;

  // Fetch blog data with error handling
  let blogData  = null;
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blogs/${slug}`);
    if (response.ok) {
      blogData = await response.json();
    } else {
      console.error("Failed to fetch blog data:", response.statusText);
    }
  } catch (error) {
    console.error("Error fetching blog data:", error);
  }

  const data = blogData?.data as Article;
  
  // Default metadata if blog not found
  if (!data) {
    return {
      title: "Blog Not Found",
      description: "The blog you are looking for could not be found.",
    };
  }

  // Generate metadata using blog data
  return {
    title: `Decimal Solution`,
    description: data.metaDescription ,
    openGraph: {
      title: data.blogTitle,
      description: data.metaDescription ,
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/blogs/${slug}`,
      type: "article",
      siteName: "Decimal Solution",
      locale: "en_US",
      publishedTime: new Date(data.createdAt).toISOString(),
      modifiedTime: new Date(data.updatedAt).toISOString(),
      images: [
        {
          url: data.blogImage,
          alt: data.altText || "Blog cover image",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: data.blogTitle,
      description: data.metaDescription ,
      images: [data.blogImage],
    },
  };
}

const SpecificBlog: React.FC<Params> = async ({ params }) => {
  const slug: string = params.slug;

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blogs/${slug}`, {
    next: {
      revalidate: 300,
    },
  });

  if (!res.ok) throw new Error("Something went wrong");
  const data = await res.json();
  const blog: Article = data.data;

  return (
    <div>
      <PageIntroduction title={""} image={blog.blogImage} altText={blog.altText} />
      <div className="lg:px-36 md:px-16 px-10 py-16">
        {/* Breadcrumbs */}
        <nav className="py-4" aria-label="breadcrumb">
          <ol className="flex space-x-2 text-sm text-gray-500">
            <li>
              <Link href="/" className="text-primary hover:underline">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/blogs" className="text-primary hover:underline">
                Blogs
              </Link>
            </li>
            <li>/</li>
            <li aria-current="page" className="text-gray-500">
              {blog.blogTitle}
            </li>
          </ol>
        </nav>
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between border-b border-gray-300 pb-4">
          <div className="flex items-center gap-4">
            <h2 className="landing-page-heading">{blog.blogTitle}</h2>
            <p className="text-sm text-gray-400 md:text-base lg:text-md xl:text-md 2xl:text-xl ">
              {new Date(blog.createdAt).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href={`https://www.facebook.com/sharer/sharer.php?u=https://decimalsolution.com/blogs/${slug}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="grid h-10 w-10 place-items-center rounded-full bg-gray-300 transition-all duration-300 hover:bg-[#3b5998]">
                <Facebook
                  strokeWidth={0}
                  className="h-3/4 w-3/4 fill-white text-white"
                />
              </div>
            </Link>
            <Link
              href={`https://twitter.com/intent/tweet?url=https://decimalsolution.com/blogs/${slug}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="grid h-10 w-10 place-items-center rounded-full bg-gray-300 transition-all duration-300 hover:bg-[#00acee]">
                <Twitter
                  strokeWidth={0}
                  className="h-3/4 w-3/4 fill-white text-white"
                />
              </div>
            </Link>
            <Link
              href={`https://www.linkedin.com/shareArticle?mini=true&url=https://decimalsolution.com/blogs/${slug}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="grid h-10 w-10 place-items-center rounded-full bg-gray-300 transition-all duration-300 hover:bg-[#0072b1]">
                <Linkedin strokeWidth={2} className="h-3/4 w-3/4 text-white" />
              </div>
            </Link>
          </div>
        </div>

        {/* Render the blog's HTML content safely */}
        <div className="my-8 flex flex-col gap-4 text-base !leading-loose md:text-lg lg:text-xl xl:text-[17px]">
          <div
            className={`[&>h1]:text-[32px] [&>h1]:font-bold [&>h1]:mb-2.5 [&>h1]:text-black
              [&>h2]:text-[24px] [&>h2]:font-bold [&>h2]:mb-2.5 [&>h2]:text-black
              [&>h3]:text-[18.72px] [&>h3]:font-bold [&>h3]:mb-2.5 [&>h3]:text-black
              [&>h4]:text-[16px] [&>h4]:font-bold [&>h4]:mb-2.5 [&>h4]:text-black
              [&>h5]:text-[13.28px] [&>h5]:font-bold [&>h5]:mb-2.5 [&>h5]:text-black
              [&>h6]:text-[10px] [&>h6]:font-bold [&>h6]:mb-2.5 [&>h6]:text-black
              [&>p]:text-[16px] [&>p]:mb-1.5 [&>p]:text-black
              [&>ul]:list-disc [&>ul]:mb-2 [&>ul]:text-black
              [&>ol]:list-decimal [&>li]:mb-10 
              [&>li]:list-decimal [&>ol]:mb-2 [&>ol]:text-black
              [&>img]:rounded-lg`}
            dangerouslySetInnerHTML={{ __html: blog.blogData }}
          ></div>
        </div>

        <Link
          className="my-16 block text-3xl font-medium uppercase text-primary hover:underline"
          href={"/blogs"}
        >
          <div className="flex items-center gap-4">
            <ChevronLeft className="h-10 w-10 text-primary" />
            <p>Go Back</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SpecificBlog;












// import PageIntroduction from "@/app/components/generic/page-introduction";
// import { ChevronLeft, Facebook, Linkedin, Twitter } from "lucide-react";
// import Link from "next/link";
// import { Article } from "../../../../types";
// import HtmlRender from "../HtmlRender"; // Component to handle safe HTML rendering

// export interface Params {
//   params: {
//     slug: string;
//   };
// }

// const SpecificBlog: React.FC<Params> = async ({ params }) => {
//   const slug: string = params.slug;

//   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blogs/${slug}`, {
//     next: {
//       revalidate: 300,
//     },
//   });

//   if (!res.ok) throw new Error("Something went wrong");
//   const data = await res.json();
//   const blog: Article = data.data;

//   return (
//     <div>
//       <PageIntroduction title={""} image={blog.blogImage} />
//       <div className="lg:px-36 md:px-16 px-10 py-16">
//         {/* Breadcrumbs */}
//         <nav className="py-4" aria-label="breadcrumb">
//           <ol className="flex space-x-2 text-sm text-gray-500">
//             <li>
//               <Link href="/" className="text-primary hover:underline">
//                 Home
//               </Link>
//             </li>
//             <li>/</li>
//             <li>
//               <Link href="/blogs" className="text-primary hover:underline">
//                 Blogs
//               </Link>
//             </li>
//             <li>/</li>
//             <li aria-current="page" className="text-gray-500">
//               {blog.blogTitle}
//             </li>
//           </ol>
//         </nav>
//         <div className="flex flex-col md:flex-row gap-4 items-center justify-between border-b border-gray-300 pb-4">
//           <div className="flex items-center gap-4">
//             <h2 className="landing-page-heading">{blog.blogTitle}</h2>
//             <p className="text-sm text-gray-400 md:text-base lg:text-md xl:text-md 2xl:text-xl ">
//               {new Date(blog.createdAt).toLocaleDateString("en-GB", {
//                 day: "2-digit",
//                 month: "long",
//                 year: "numeric",
//               })}
//             </p>
//           </div>
//           <div className="flex items-center gap-2">
//             <Link
//               href={`https://www.facebook.com/sharer/sharer.php?u=https://decimalsolution.com/blogs/${slug}`}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <div className="grid h-10 w-10 place-items-center rounded-full bg-gray-300 transition-all duration-300 hover:bg-[#3b5998]">
//                 <Facebook
//                   strokeWidth={0}
//                   className="h-3/4 w-3/4 fill-white text-white"
//                 />
//               </div>
//             </Link>
//             <Link
//               href={`https://twitter.com/intent/tweet?url=https://decimalsolution.com/blogs/${slug}`}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <div className="grid h-10 w-10 place-items-center rounded-full bg-gray-300 transition-all duration-300 hover:bg-[#00acee]">
//                 <Twitter
//                   strokeWidth={0}
//                   className="h-3/4 w-3/4 fill-white text-white"
//                 />
//               </div>
//             </Link>
//             <Link
//               href={`https://www.linkedin.com/shareArticle?mini=true&url=https://decimalsolution.com/blogs/${slug}`}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <div className="grid h-10 w-10 place-items-center rounded-full bg-gray-300 transition-all duration-300 hover:bg-[#0072b1]">
//                 <Linkedin strokeWidth={2} className="h-3/4 w-3/4 text-white" />
//               </div>
//             </Link>
//           </div>
//         </div>

//         {/* Render the blog's HTML content safely */}
//         <div className="my-8 flex flex-col gap-4 text-base !leading-loose md:text-lg lg:text-xl xl:text-[17px]">
//           {/* HtmlRender component */}
//           {/* <HtmlRender htmlContent={blog.blogData} /> */}
//           {/* <div dangerouslySetInnerHTML={{ __html: blog.blogData }} /> */}

//           <div
//             className={`[&>h1]:text-[32px] [&>h1]:font-bold [&>h1]:mb-2.5 [&>h1]:text-black
//               [&>h2]:text-[24px] [&>h2]:font-bold [&>h2]:mb-2.5 [&>h2]:text-black
//               [&>h3]:text-[18.72px] [&>h3]:font-bold [&>h3]:mb-2.5 [&>h3]:text-black
//               [&>h4]:text-[16px] [&>h4]:font-bold [&>h4]:mb-2.5 [&>h4]:text-black
//               [&>h5]:text-[13.28px] [&>h5]:font-bold [&>h5]:mb-2.5 [&>h5]:text-black
//               [&>h6]:text-[10px] [&>h6]:font-bold [&>h6]:mb-2.5 [&>h6]:text-black
//               [&>p]:text-[16px] [&>p]:mb-1.5 [&>p]:text-black
//               [&>ul]:list-disc [&>ul]:mb-2 [&>ul]:text-black
//               [&>ol]:list-decimal [&>li]:mb-10 
//               [&>li]:list-decimal [&>ol]:mb-2 [&>ol]:text-black
//               [&>img]:rounded-lg`}
//             dangerouslySetInnerHTML={{ __html: blog.blogData }}
//           ></div>

//           {/* <div>{blog.blogData.replace(/<[^>]*>?/gm, '')}</div> */}
//         </div>

//         <Link
//           className="my-16 block text-3xl font-medium uppercase text-primary hover:underline"
//           href={"/blogs"}
//         >
//           <div className="flex items-center gap-4">
//             <ChevronLeft className="h-10 w-10 text-primary" />
//             <p>Go Back</p>
//           </div>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default SpecificBlog;
