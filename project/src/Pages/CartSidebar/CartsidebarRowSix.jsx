import { Heading } from "../../components"; // Corrected import path
import CloudSofaImage from "../../components/CloudSofaImage"; // Fixed import path
import React from "react";

export default function CartSidebarRowSix() {
  return (
    <div className="flex justify-center border-t-[0.5px] border-solid border-blue_gray-100 bg-color-white py-12 md:py-5">
      <div className="container-xs mb-[18px] flex justify-center md:px-5">
        <div className="flex w-full flex-col gap-9">
          <div className="mx-[106px] flex flex-col gap-9 md:mx-0">
            <div className="mx-[188px] flex flex-wrap justify-between gap-5 md:mx-0">
              <Heading size="text2xl" as="p" className="text-[24px] font-normal text-black-900 md:text-[22px]">
                Description
              </Heading>
              <Heading size="text2xl" as="p" className="text-[24px] font-normal text-gray-500 md:text-[22px]">
                Additional Information
              </Heading>
              <Heading size="text2xl" as="p" className="text-[24px] font-normal text-gray-500 md:text-[22px]">
                Reviews [5]
              </Heading>
            </div>
            <div className="flex flex-col gap-[30px]">
              <Heading as="p" className="text-justify text-[16px] font-normal leading-6 text-gray-500">
                Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn portable active stereo speaker takes the
                unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
              </Heading>
              <Heading as="p" className="text-justify text-[16px] font-normal leading-6 text-gray-500">
                Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage-styled engineering. Setting
                the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a
                well-balanced dio that boasts a clear midrange and extended highs for a sound that is both articulate
                and pronounced. The analogue knobs allow you to fine-tune the controls to your personal preferences
                while the guitar-influenced leather strap en
              </Heading>
            </div>
            <div>
              {/* Empty div; consider removing if not needed */}
            </div>
            <div className="flex gap-7 md:flex-col">
              <CloudSofaImage sofaImage="images/img_cloud_sofa_three.png" className="rounded-[10px] bg-deep_orange-50" />
              <CloudSofaImage
                sofaImage="images/img_cloud_sofa_three_296x604.png"
                className="rounded-[10px] bg-deep_orange-50"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
