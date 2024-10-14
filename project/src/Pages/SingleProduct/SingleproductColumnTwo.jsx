import { Button, Heading } from "../../components";
import ProductDisplay from "../../components";
import React, { Suspense } from "react";

const data = [
  { 
    mainImage: "images/img_image_8.png",
    secondaryImage1: "images/img_image_7.png",
    secondaryImage2: "images/img_image_6.png",
    discountText: "-30%",
    productName: "Syltherine",
    productDescription: "Stylish cafe chair",
    currentPrice: "Rp 2.500.000",
    originalPrice: "Rp 3.500.000",
  },
  {
    mainImage: "images/img_image_8.png",
    secondaryImage1: "images/img_image_7.png",
    secondaryImage2: "images/img_image_6.png",
    discountText: "-30%",
    productName: "Leviosa",
    productDescription: "Stylish cafe chair",
    currentPrice: "Rp 2.500.000",
    originalPrice: "Rp 3.500.000",
  },
  {    
    mainImage: "images/img_image_8.png",
    secondaryImage1: "images/img_image_7.png",
    secondaryImage2: "images/img_image_6.png",
    discountText: "-30%",
    productName: "Lolito",
    productDescription: "Luxury big sofa",
    currentPrice: "Rp 7.000.000",
    originalPrice: "Rp 14.000.000",
  },
  {
    mainImage: "images/img_image_4_300x284.png",
    secondaryImage1: "images/img_image_7.png",
    secondaryImage2: "images/img_image_6.png",
    discountText: "-30%",
    productName: "Respira",
    productDescription: "Outdoor bar table and stool",
    currentPrice: "Rp 2.500.000",
    originalPrice: "Rp 3.500.000",
  },
];

export default function SingleProductColumnTwo() {
  return (
    <div className="mb-12 flex flex-col items-center">
      <div className="container-xs flex flex-col">
        <div className="flex flex-col items-center">
          <Heading
            size="text3xl"
            as="p"
            className="text-[36px] font-medium text-black-900 md:text-[34px] sm:text-[32px]"
          >
            Related Products
          </Heading>
          <div className="flex gap-8 self-stretch md:flex-col">
            <Suspense fallback={<div>Loading feed...</div>}>
              {data.map((d, index) => (
                <ProductDisplay {...d} key={"listsyltherine" + index} className="w-[24%] md:w-full" />
              ))}
            </Suspense>
          </div>
          <Button
            color="color_white"
            size="lg"
            variant="fill"
            shape="square"
            className="min-w-[244px] border border-solid border-primary px-[33px] font-semibold !text-primary sm:px-5"
          >
            Show More
          </Button>
        </div>
      </div>
    </div>
  );
}
