// HtmlRenderer.tsx
import React from "react";

interface HtmlRendererProps {
  htmlContent: string;
}

const HtmlRender: React.FC<HtmlRendererProps> = ({ htmlContent }) => {
    // console.log("Html Content : ")
    // console.log(htmlContent);
  return (
    <div
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
};

export default HtmlRender;
