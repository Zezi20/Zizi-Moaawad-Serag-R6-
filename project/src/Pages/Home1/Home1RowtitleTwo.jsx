import { Img, Heading } from "../../components";
import React from "react";

export default function HomelRowTitleTwo() {
  return (
    <div>
      <div className="flex flex-col">
        <div className="container-xs relative z-[2] flex flex-col items-center self-center px-14 md:px-5">
          <div className="flex flex-col items-start">
            <Heading
              size="heading"
              as="h2"
              className="ml-[66px] text-[20px] font-semibold text-color-gray_2 md:m-0"
            >
              Share your setup with
            </Heading>
            <Heading
              size="heading5x1"
              as="h3"
              className="relative mt-[-2px] text-[40px] font-bold text-color-gray_1-0 md:text-[38px] sm:text-[36px]"
            >
              #FuniroFurniture
            </Heading>
          </div>
        </div>
        <div className="relative mt-[-34px] overflow-x-scroll">
          <div className="flex w-[1440px] items-center gap-4 md:flex-col">
            <div className="flex flex-1 flex-col gap-4 md:self-stretch md:px-5">
              <div className="flex items-center gap-4 sm:flex-col">
                <div className="relative h-[382px] w-[14%] md:h-auto sm:w-full">
                  <Img
                    src="images/img_rectangle_35.png"
                    alt="Image"
                    className="h-[312px] w-full flex-1 object-cover"
                  />
                  <Img
                    src="images/img_rectangle_36.png"
                    alt="Image"
                    className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[382px] w-full flex-1 object-cover"
                  />
                </div>
                <Img
                  src="images/img_rectangle_38.png"
                  alt="Image"
                  className="h-[312px] w-[84%] self-end object-contain sm:w-full sm:self-auto"
                />
              </div>
              <div className="flex items-start gap-4 sm:flex-col">
                <Img
                  src="images/img_rectangle_37.png"
                  alt="Image"
                  className="h-[322px] w-[34%] self-center object-contain sm:w-full"
                />
                <Img
                  src="images/img_rectangle_39.png"
                  alt="Image"
                  className="h-[242px] w-[64%] object-contain sm:w-full"
                />
              </div>
              <div className="flex items-start gap-4 sm:flex-col">
                <Img
                  src="images/img_rectangle_40.png"
                  alt="Image"
                  className="h-[392px] w-[20%] object-contain md:w-full"
                />
                <div className="flex flex-1 flex-col gap-4 md:self-stretch md:px-5">
                  <div className="flex items-center gap-4 sm:flex-col">
                    <Img
                      src="images/img_rectangle_43.png"
                      alt="Image"
                      className="h-[348px] w-[52%] self-end object-contain sm:w-full sm:self-auto"
                    />
                    <Img
                      src="images/img_rectangle_45.png"
                      alt="Image"
                      className="h-[432px] w-[46%] object-contain sm:w-full"
                    />
                  </div>
                  <div className="flex items-start gap-4 sm:flex-col">
                    <Img
                      src="images/img_rectangle_41.png"
                      alt="Image Ten"
                      className="h-[242px] w-[32%] self-center object-contain sm:w-full"
                    />
                    <Img
                      src="images/img_rectangle_44.png"
                      alt="Image Eleven"
                      className="h-[196px] w-[46%] object-contain sm:w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
