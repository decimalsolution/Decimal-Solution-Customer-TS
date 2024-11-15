import React from "react";

interface Textprops {
  text1: string;
  text2: string;
}

const HeadingText: React.FC<Textprops> = (props) => {
  const { text1, text2 } = props;

  return (
    <div className="flex flex-col text-left ">
      <h2 className="text-2xl md:text-4xl lg:text-4xl font-semibold">
        <span className="bg-primary rounded-md text-white px-2 py-1 ">
          {text1} {text2}
        </span>
      </h2>
    </div>
  );
};

export default HeadingText;
