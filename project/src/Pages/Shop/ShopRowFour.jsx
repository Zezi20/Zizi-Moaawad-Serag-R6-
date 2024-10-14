import { Heading, Button, Img } from "../../components"; // Corrected the import path
import React from "react";

export default function ShopRowFour() { // Fixed the function declaration
  return (
    <div>
      <div className="flex justify-center bg-deep_orange-50 py-[22px] sm:py-5">
        <div className="container-xs flex items-center justify-center md:flex-col md:px-5">
          <div className="flex w-full items-center justify-center sm:flex-col">
            <div className="flex items-center gap-3">
              <Img
                src="images/img_system_uicons_filtering.svg"
                alt="System Icons"
                className="h-[24px] w-[24px] self-start"
              />
              <Heading size="textxl" as="h2" className="text-[20px] font-normal text-black-900">
                Filter
              </Heading>
            </div>
            <Img
              src="images/img_ci_grid_big_round.svg" // Fixed the filename
              alt="Grid Icon"
              className="ml-[22px] h-[28px] w-[28px] sm:ml-0 sm:w-full"
            />
            <Img
              src="images/img_bi_view_list.svg"
              alt="List Icon"
              className="ml-6 h-[24px] w-[24px] sm:ml-0 sm:w-full" // Fixed class name from m1-6 to ml-6
            />
          </div>
          <div className="flex flex-1 items-center gap-8 px-[30px] sm:self-stretch sm:px-5">
            <div className="h-[36px] w-[2px] bg-gray-500" />
            <Heading as="h3" className="text-[16px] font-normal text-black-900">
              Showing 1016 of 290 results {/* Fixed typo in text */}
            </Heading>
            <Heading as="h3" className="text-[16px] font-normal text-black-900">
              Showing 116 of 320 results {/* Fixed typo in text */}
            </Heading>
          </div>
        </div>
        <div className="flex w-full gap-3.5 md:flex-col">
          <div className="flex w-full items-center justify-end gap-[17px]">
            <Heading size="textxl" as="h4" className="text-[20px] font-normal text-black-900">
              Show
            </Heading>
            <Button
              color="color_white" // Fixed color name to be valid
              size="textxl" // Fixed size value
              variant="fill"
              shape="square"
              className="min-w-[54px] px-4 text-gray-500" // Fixed 'Itext-gray-500' to 'text-gray-500'
            >
              16
            </Button>
          </div>
          <div className="flex w-full items-center justify-center gap-4">
            <Heading size="textxl" as="h5" className="text-[20px] font-normal text-black-900">
              Sort by
            </Heading>
            <div className="flex flex-1 bg-color-white px-[30px] py-3 sm:px-5">
              <Heading size="textxl" as="h6" className="text-[20px] font-normal text-gray-500">
                Default
              </Heading>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
