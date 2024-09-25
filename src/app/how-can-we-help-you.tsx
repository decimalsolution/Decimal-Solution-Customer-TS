"use client";

import { cn } from "../../lib/utils";
import Image from "next/image";
import React, { useState } from "react";
import { ContactInfo } from "../../types";

interface ContactProps {
    contactInfo : ContactInfo
}

const HowCanWeHelpYou = ({ contactInfo } : ContactProps) => {
  const [show, setShow] = useState(false);

  const getLink = (type: 'whatsapp' | 'messenger') => {
    if (type === "whatsapp") {
      const regexToReplace = /\s|-/g;
      return `https://wa.me/${contactInfo.primaryContact.replaceAll(
        regexToReplace,
        ""
      )}`;
    } else {
      const regexToReplace = /https:\/\/www.facebook.com\//g;
      return `https://m.me/${(
        contactInfo?.facebook || "100093707136830"
      ).replaceAll(regexToReplace, "")}`;
    }
  };

  const handleNavigate = (type: "whatsapp" | "messenger") => {
    const link = getLink(type);
    window.open(link, "_blank");
  };

  return (
    <div className="relative z-[1000]">
      <div className="fixed bottom-6 right-6 w-[300px] flex flex-col">
        <div
          className={cn(
            show ? "block" : "hidden",
            "relative -top-2 bg-white border-2 border-primary rounded-md shadow-lg"
          )}
        >
          <p className="bg-primary text-white font-medium text-sm py-2 px-4 shadow-lg">
            Hello!
            <br /> Feel Free To Contact Us or email us at{" "}
            <a
              href="mailto:info@decimalsolution.com"
              className="text-white font-bold text-sm hover:underline"
            >
              info@decimalsolution.com
            </a>
          </p>
          <div className="flex flex-col gap-4 items-center p-4">
            <div className="flex gap-2 hover:underline">
              <Image
                src="/Social Icons/messenger.png"
                alt="messenger"
                width={20}
                height={20}
              />
              <button
                className="text-primary font-medium text-sm"
                onClick={() => handleNavigate("messenger")}
              >
                Messenger
              </button>
            </div>
            <div className="flex gap-2 hover:underline">
              <Image
                src="/Social Icons/whatsapp.png"
                alt="WhatsApp"
                width={20}
                height={20}
              />
              <button
                className="text-primary font-medium text-sm"
                onClick={() => handleNavigate("whatsapp")}
              >
                WhatsApp
              </button>
            </div>
          </div>
        </div>
        <button
          className="ml-auto border-2 border-primary text-primary bg-white font-medium text-sm py-2 px-4 rounded-md shadow-lg"
          onClick={() => setShow(!show)}
        >
          How Can We Help You?
        </button>
      </div>
    </div>
  );
};

export default HowCanWeHelpYou;
