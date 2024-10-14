import { Heading, Img } from "../.."; // Fixed import path
import React from "react";

export default function ProductDisplay({
  mainImage = "images/img_image_8.png",
  secondaryImage1 = "images/img_image_7.png", // Corrected variable name
  secondaryImage2 = "images/img_image_6.png", // Corrected variable name and quote
  discountText = "-30%",
  productName = "Syltherine",
  productDescription = "Stylish cafe chair",
  currentPrice = "Rp 2.500.000",
  originalPrice = "Rp 3.500.000",
  ...props // Removed space before 'props'
}) {
  return (
    <div {...props} className={`${props.className} flex flex-col items-center`}>
      <div className="relative h-[300px] content-center self-stretch">
        <Img src={mainImage} alt="Syltherine" className="mx-auto h-[300px] w-full flex-1 object-cover" />
        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[300px] flex-1 content-center">
          <Img src={secondaryImage1} alt="Syltherine" className="mx-auto h-[300px] w-full flex-1 object-cover" />
          <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[300px] flex-1 content-center">
            <Img src={secondaryImage2} alt="Syltherine" className="mx-auto h-[300px] w-full flex-1 object-cover" />
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[300px] flex-1 content-center">
              <Img
                src="images/img_image_9.png"
                alt="Syltherine"
                className="mx-auto h-[300px] w-full flex-1 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[300px] flex-1 content-center">
                <Img
                  src="images/img-image-4.png"
                  alt="Syltherine"
                  className="mx-auto h-[300px] w-full flex-1 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[300px] flex-1 content-center">
                  <Img
                    src="images/img-image-3.png"
                    alt="Syltherine"
                    className="mx-auto h-[300px] w-full flex-1 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[300px] flex-1 content-center">
                    <Img
                      src="images/img-image-2.png"
                      alt="Syltherine"
                      className="mx-auto h-[300px] w-full flex-1 object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[300px] flex-1 content-center">
                      <Img
                        src="images/img-image-1.png"
                        alt="Image"
                        className="mx-auto h-[300px] w-full flex-1 object-cover"
                      />
                      <Heading
                        as="p"
                        className="absolute right-[23px] top-6 m-auto flex h-[48px] items-center justify-center rounded-[24px] bg-red-300 text-center text-[16px] font-medium text-color-white"
                      >
                        {discountText}
                      </Heading>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 self-stretch bg-color-light_bg p-3">
        <div className="flex flex-col items-start">
          <Heading size="headingmd" as="h4" className="text-[16px] font-semibold text-color-gray_1-0">
            {productName}
          </Heading>
          <Heading as="p" className="text-[16px] font-medium text-blue-gray-400">
            {productDescription}
          </Heading>
        </div>
        <div className="mb-4 flex flex-wrap items-center justify-center gap-4">
          <Heading size="headings" as="h5" className="text-[16px] font-semibold text-color-gray_1-0">
            {currentPrice}
          </Heading>
          <Heading as="p" className="text-[16px] font-normal text-gray_400 line-through">
            {originalPrice}
          </Heading>
        </div>
      </div>
    </div>
  );
}
