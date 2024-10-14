import { Img, Heading } from "./..";
import React from "react";

export default function AsgaardSofaDisplay({
  sofaImage = "images/img_asgaard_sofa_5.png",
  sofaName = "Asgaard sofa",
  quantity = "1",
  x = "X",
  price = "Rs. 250,000.00",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex justify-between items-center gap-5 flex-1`}>
      <div className="flex rounded-[10px] bg-lime-800_38 py-1.5">
        <Img src={sofaImage} alt="Asgaard sofa" className="h-[90px] w-[96%] rounded-[10px] object-contain" />
      </div>
      <div className="flex w-[60%] items-center justify-center">
        <div className="flex flex-1 flex-col items-start gap-2">
          <Heading as="p" className="text-[16px] font-normal text-black-900">
            {sofaName}
          </Heading>
          <div className="flex flex-wrap items-center gap-[15px] self-stretch">
            <Heading as="p" className="text-[16px] font-light text-black-900">
              {quantity}
            </Heading>
            <Heading size="text-xs" as="p" className="text-[12px] font-light text-black-900">
              {x}
            </Heading>
            <Heading size="text-xs" as="p" className="text-[12px] font-medium text-primary">
              {price}
            </Heading>
          </div>
        </div>
        <Img src="images/img_close.svg" alt="Close button" className="h-[20px] w-[20px]" />
      </div>
    </div>
  );
}
