import { Heading } from "../../components";
import CloudSofaImage from "../../components/CloudSofaImage";
import React from "react";

export default function SingleProductRowFive() {
  return (
    <div className="mt-2.5">
      <div className="flex justify-center border-t-[0.5px] border-solid border-blue_gray-100 bg-white py-12 md:py-5">
        <div className="container-xs mb-[18px] flex justify-center md:px-5">
          <div className="flex w-full flex-col gap-9">
            <div className="mx-[106px] flex flex-col gap-9 md:mx-0">
              <div className="mx-[188px] flex flex-wrap justify-between gap-5 md:mx-0">
                <Heading size="text2xl" as="h2" className="text-[24px] font-medium text-black-900 md:text-[22px]">
                  Description
                </Heading>
                <Heading size="text2xl" as="h3" className="text-[24px] font-normal text-gray-500 md:text-[22px]">
                  Additional Information
                </Heading>
                <Heading size="text2xl" as="h4" className="text-[24px] font-normal text-gray-500 md:text-[22px]">
                  Reviews [5]
                </Heading>
              </div>
              <div className="flex flex-col gap-[30px]">
                <Heading as="h5" className="text-justify text-[16px] font-normal leading-6 text-gray-500">
                  Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn portable active stereo speaker takes
                  the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
                </Heading>
                <Heading as="h6" className="text-justify text-[16px] font-normal leading-6 text-gray-500">
                  Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage-styled engineering. Setting
                  the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with
                  a well-balanced audio that boasts clear midrange and extended highs for a sound that is both
                  articulate and pronounced. The analogue knobs allow you to fine-tune the controls to your personal
                  preferences, while the guitar-influenced leather strap enables easy and stylish travel.
                </Heading>
              </div>
              <div className="flex gap-7 md:flex-col">
                <CloudSofaImage className="rounded-[10px] bg-deep_orange-50" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
