import { Heading, Img } from "./..";
import React from "react";

export default function UserProfileStack({
  firstUserImage = "images/img_image_81.png",
  secondUserImage = "images/img_image_106.png",
  sectionTitle = "Dining",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex flex-col items-center w-[32%] md:w-full gap-[30px]`}>
      <div className="relative h-[480px] self-stretch">
        <Img
          src={firstUserImage}
          alt="Image eighty one"
          className="mx-auto h-[480px] w-full"
        />
        <Img
          src={secondUserImage}
          alt="Image one hundred six"
          className="absolute bottom-0 left-0"
        />
      </div>
      <Heading size="headingmd" as="h4" className="text-[24px] font-semibold text-font-color">
        {sectionTitle}
      </Heading>
    </div>
  );
}
