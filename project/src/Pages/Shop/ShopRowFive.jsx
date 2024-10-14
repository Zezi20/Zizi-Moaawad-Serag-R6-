import HighQualityFeature from "../../components/HighQualityFeature";
import React, { Suspense } from "react";

const data = [
  {
    trophyImage: "images/img_trophy_1.svg",
    headingText: "High Quality",
    descriptionText: "crafted from top materials",
  },
  {
    trophyImage: "images/img_guarantee.svg",
    headingText: "Warranty Protection",
    descriptionText: "over 2 years",
  },
  {
    trophyImage: "images/img_shipping.svg", // Corrected filename to match SVG format
    headingText: "Free Shipping",
    descriptionText: "Order over 150 $",
  },
  {
    trophyImage: "images/img_customer_support.svg", // Corrected filename to match SVG format
    headingText: "24 / 7 Support",
    descriptionText: "Dedicated support",
  },
];

export default function ShopRowFive() {
  return (
    <div className="mt-[84px]"> {/* Fixed spacing syntax */}
      <div className="bg-lime-50 px-[50px] py-[100px] md:p-5">
        <div className="flex gap-[54px] md:flex-col">
          <Suspense fallback={<div>Loading feed...</div>}>
            {data.map((d, index) => ( // Fixed the syntax for map
              <HighQualityFeature {...d} key={"feature" + index} className="w-[28%]" />
            ))}
          </Suspense>
        </div>
      </div>
    </div>
  );
}
