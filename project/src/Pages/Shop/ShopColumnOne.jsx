import { Button, Heading } from "../../components";
import ProductDisplay from "../../components/ProductDisplay"; // Fixed the path and removed extra space
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
  {
    mainImage: "images/img_image_8.png",
    secondaryImage1: "images/img_image_7.png",
    secondaryImage2: "images/img_image_6.png",
    discountText: "-30%",
    productName: "Grifo",
    productDescription: "Night lamp",
    currentPrice: "Rp 2.500.000",
    originalPrice: "Rp 3.500.000",
  },
  {
    mainImage: "images/img_image_8.png",
    secondaryImage1: "images/img_image_7.png",
    secondaryImage2: "images/img_image_6_-300x284.png",
    discountText: "-30%",
    productName: "Muggo",
    productDescription: "Small mug",
    currentPrice: "Rp 2.500.000",
    originalPrice: "Rp 3.500.000",
  },
  {
    mainImage: "images/img_image_8.png",
    secondaryImage1: "images/img_image_7.png",
    secondaryImage2: "images/img_image_6.png",
    discountText: "-30%",
    productName: "Pingky",
    productDescription: "Cute bed set",
    currentPrice: "Rp 7.000.000",
    originalPrice: "Rp 14.000.000",
  },
  {
    mainImage: "images/img_image_7_300x284.png",
    secondaryImage1: "images/img_image_7.png",
    secondaryImage2: "images/img_image_6.png",
    discountText: "-30%",
    productName: "Potty",
    productDescription: "Minimalist flower pot",
    currentPrice: "Rp 2.500.000",
    originalPrice: "Rp 3.500.000",
  },
];

export default function HomeColumnOne() {
  return (
    <div className="flex flex-col items-center">
      <div className="container-xs flex flex-col items-center gap-[26px] md:px-5">
        <Heading
          size="heading5x1"
          as="h2"
          className="text-[40px] font-bold text-color-gray_1-0 md:text-[38px] sm:text-[36px]"
        >
          Our Products
        </Heading>
        <div className="grid grid-cols-4 justify-center gap-8 self-stretch px-1 md:grid-cols-2 sm:grid-cols-1">
          <Suspense fallback={<div>Loading feed...</div>}>
            {data.map((d, index) => (
              <a
                href="https://www.youtube.com/embed/bv8Fxk0sz7I"
                target="_blank"
                rel="noopener noreferrer" // Added rel attribute for security
                key={"home" + index}
              >
                <ProductDisplay {...d} className="w-full" />
              </a>
            ))}
          </Suspense>
        </div>
        <a
          href="https://www.youtube.com/embed/bv8Fxk0sz7I"
          target="_blank"
          rel="noopener noreferrer" // Added rel attribute for security
        >
          <Button
            color="color_white"
            size="lg" // Fixed size value from "1g" to "lg"
            variant="fill"
            shape="square"
            className="min-w-[244px] border border-solid border-primary px-[33px] font-semibold !text-primary sm:px-5"
          >
            Show More
          </Button>
        </a>
      </div>
    </div>
  );
}
