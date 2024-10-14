import { Heading, Img } from "./..";
import React from "react";

export default function UserAddressProfile({
  linkedinImage = "images/img_linkedin.svg",
  addressTitle = "Address",
  fullAddress = "236 5th SE Avenue, New York, NY 10000, United States", // Added a comma for address clarity
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex justify-end items-start gap-[30px] flex-1`}>
      <Img src={linkedinImage} alt="LinkedIn Address" className="h-[26px]" /> {/* Changed alt text for clarity */}
      <div className="mt-2.5 flex flex-1 flex-col items-start self-end">
        <Heading size="text2xl" as="p" className="text-[24px] font-medium text-black-900">
          {addressTitle}
        </Heading>
        <Heading as="p" className="w-full text-[16px] font-normal leading-6 text-black-900">
          {fullAddress}
        </Heading>
      </div>
    </div>
  );
}
