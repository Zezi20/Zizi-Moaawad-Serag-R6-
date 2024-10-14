import { Heading, Img } from "../.."; // Fixed import path
import React from "react";

export default function HighQualityFeature({
  trophyImage = "images/img_trophy_1.svg", // Corrected variable name
  headingText = "High Quality",
  descriptionText = "crafted from top materials",
  ...props // Removed space before 'props'
}) {
  return (
    <div {...props} className={`${props.className} flex items-center md:w-full gap-2.5`}>
      <Img src={trophyImage} alt="High Quality" className="h-[60px]" /> {/* Fixed the Img component syntax */}
      <div className="flex flex-1 flex-col items-start">
        <Heading size="headinglg" as="h4" className="text-[25px] font-semibold text-gray-900">
          {headingText}
        </Heading>
        <Heading size="textxl" as="p" className="text-[20px] font-medium text-blue-gray-400">
          {descriptionText}
        </Heading>
      </div>
    </div>
  );
}
