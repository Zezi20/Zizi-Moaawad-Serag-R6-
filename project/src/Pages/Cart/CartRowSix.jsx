import HighQualityFeature from "../../components/HighQualityFeature"; // Fixed import path

import React, { Suspense } from "react";

const data = [
  { 
    trophyImage: "images/img_trophy_1.svg",
    headingText: "High Quality", 
    descriptionText: "crafted from top materials",
  },
  { 
    trophyImage: "images/img_guarantee.svg",
    headingText: "Warranty protection", // Corrected spelling of "Warranty"
    descriptionText: "Over 2 years"
  },
  { 
    trophyImage: "images/img_shipping.svg", // Fixed space in image path
    headingText: "Free Shipping", 
    descriptionText: "Over $150" // Added currency symbol for clarity
  },
  {
    trophyImage: "images/img_customer_support.svg", // Fixed missing quote
    headingText: "24/7 Support", // Removed spaces for consistency
    descriptionText: "Dedicated support",
  },
];

export default function CartRowSix() {
  return (
    <div className="bg-lime-50 px-[52px] py-[100px] md:p-5"> {/* Corrected structure to ensure proper nesting */}
      <div className="flex gap-[54px] md:flex-col">
        <Suspense fallback={<div>Loading feed...</div>}> 
          {data.map((d, index) => (
            <HighQualityFeature key={index} {...d} /> // Added key prop for list items
          ))} 
        </Suspense>
      </div>
    </div>
  );
}
