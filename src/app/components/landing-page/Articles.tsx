"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import webdev from "../../../../public/images/webdev.png";
import cloud from "../../../../public/images/cloud.png";
import business from "../../../../public/images/business.png";
import { ArrowRight, Navigation } from "lucide-react";
import HeadingText from "./HeadingText";
import { Article } from "../../../../types";
import Link from "next/link";


const Articles: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/blogs`,
          {
            next: { revalidate: 300 },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch articles");
        }

        const data = await response.json();
        setArticles(data.data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
      // hour: "2-digit",
      // minute: "2-digit",
      // hour12: false,
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // console.log("articles ::" , articles)

  // useEffect(() => {
  //   const fetchServices = async () => {
  //     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/services`, {
  //       next: {
  //         revalidate: 300,
  //       },
  //     });
  //     const data = await res.json();
  //     setServices(data.data); // Set the fetched data
  //   };

  //   fetchServices();
  // }, []);

  interface Card {
    image: StaticImageData;
    category: string;
    date: string;
    comments: string;
    textcol: string;
  }

  const cards: Card[] = [
    {
      image: webdev,
      category: "Web Development",
      //   desc : "",
      date: "July 19, 2024",
      comments: "Comments (3)",
      textcol: "text-[#00A3FF]",
      //   title: "Web development combines coding, design and innovation.",
    },
    {
      image: cloud,
      category: "Cloud Solution",
      //   desc : "",
      date: "July 19, 2024",
      comments: "Comments (3)",
      textcol: "text-[#FF0000]",
      //   title: "Web development combines coding, <br/> design and innovation.",
    },
    {
      image: business,
      category: "Business Deal",
      //   desc : "",
      date: "July 19, 2024",
      comments: "Comments (3)",
      textcol: "text-[#05FF00]",
      //   title: "Web development combines coding, <br/> design and innovation.",
    },
  ];

  return (
    <section className="my-16 w-full">
      <div className="py-12 px-24 sm:px-32">
        <HeadingText text1="Latest" text2="Blogs" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-8 px-16">
        {articles.slice(0,3).map((article, index) => {
          return (
            <div key={index} className="shadow-[0_6px_6px_0_rgba(0,0,0,0.2)] flex flex-col h-full">
              <div className="relative flex-grow">
                <Image
                  src={article.blogImage}
                  alt="img"
                  width={100}
                  height={100}
                  className="w-full h-48 object-cover" // Set a fixed height for the image
                />
              </div>
              <div className="p-4 flex flex-col justify-between flex-grow">
                <div className="flex justify-between text-[#898989CC] text-[10px]">
                  <p>{formatDate(article.createdAt)}</p>
                </div>
                <h2 className="text-sm font-semibold my-[16px]">{article.blogTitle}</h2>
                <p className="text-sm">
                  {article.blogDescription.length > 130 ? article.blogDescription.slice(0,130) + '...' : article.blogDescription} 
                </p>
                <div className="flex justify-between">
                  <button className="text-[10px] text-[#A1258F] flex items-center">
                    Read More <ArrowRight size={13} className="mx-1" />
                  </button>
                  <p>
                    <Navigation size={18} className="text-[#A1258F]" />
                  </p>
                </div>
              </div>
            </div>

          );
        })}
      </div>

      <div className="flex justify-center">
        <Link href="/" className="flex justify-center mt-12 sm:w-36 md:w-40 md:text-base lg:w-40 lg:py-3 lg:text-lg xl:w-35 xl:text-xl 2xl:w-50 2xl:text-2xl">
          <button className="block rounded-xl bg-primary  px-4 py-2 text-sm font-medium text-white ">
            View All
          </button>
        </Link>
      </div>

    </section>
  );
  
};

export default Articles;
