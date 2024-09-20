import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import webdev from "../../../../public/images/webdev.png";
import cloud from "../../../../public/images/cloud.png";
import business from "../../../../public/images/business.png";
import { ArrowRight, Navigation } from "lucide-react";
import HeadingText from "./HeadingText";


const Articles: React.FC = () => {

  interface Card {
    image : StaticImageData;
    category : string;
    date : string;
    comments : string;
    textcol : string
  }

  const cards:Card[] = [
    {
      image: webdev,
      category : "Web Development",
    //   desc : "",
      date: "July 19, 2024",
      comments: "Comments (3)",
      textcol : 'text-[#00A3FF]'
      //   title: "Web development combines coding, design and innovation.",
    },
    {
      image: cloud,
      category : "Cloud Solution",
    //   desc : "",
      date: "July 19, 2024",
      comments: "Comments (3)",
      textcol : 'text-[#FF0000]'
      //   title: "Web development combines coding, <br/> design and innovation.",
    },
    {
      image: business,
      category : "Business Deal",
    //   desc : "",
      date: "July 19, 2024",
      comments: "Comments (3)",
      textcol : 'text-[#05FF00]'
      //   title: "Web development combines coding, <br/> design and innovation.",
    },
  ];

  return (
    <section className="my-16  w-full ">
      <div className="py-6 px-24 sm:px-32">
        <HeadingText text1="Latest" text2="Articles" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-8 px-16">
        {cards.map((card, index) => {
          return (
            <div
              key={index}
              className="  shadow-[0_6px_6px_0_rgba(0,0,0,0.2)]"
            >
              <div className="relative">
                <Image src={card.image} alt="img" className="w-full" />
                <div className={`absolute bottom-0 rounded-r-lg p-1 bg-white ${card.textcol} `}>
                  <h2 className="text-[14px]">{card.category}</h2>
                </div>
              </div>

              <div className=" p-4 ">
                <div className="flex justify-between text-[#898989CC] text-[10px]">
                  <p>{card.date}</p>
                  <p>{card.comments}</p>
                </div>
                <h2 className="text-sm font-semibold my-[16px]">
                  Web development combines coding, <br /> design and innovation.
                </h2>
                <div className="flex justify-between ">
                  <button className="text-[10px] text-[#A1258F] flex items-center ">
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
    </section>
  );
};

export default Articles;
