import { Heading, Input, Img } from "*/..";
import React from "react";

export default function Footer({ ...props }) {
  return (
    <footer {...props} className={`${props.className} flex justify-center items-center py-[38px] sm:py-5`}>
      <div className="container-xs mt-2.5 flex justify-center md:px-5">
        <div className="flex w-full flex-col items-start gap-10">
          <div className="flex w-[90%] items-start justify-between gap-5 md:w-full md:flex-col">
            <div className="flex w-[24%] flex-col gap-[50px] md:w-full">
              <Img src="images/img-footer-logo.png" alt="Footerlogo" className="h-[36px] w-[84px] object-contain" />
              <Heading as="p" className="text-[16px] font-normal leading-6 text-gray-500">
                <>
                  400 University Drive Suite 200 Coral Gables,
                  <br />
                  FL 33134 USA
                </>
              </Heading>
            </div>
            <div className="flex w-[6%] flex-col items-start gap-[54px] self-center md:w-full sm:gap-[27px]">
              <Heading as="p" className="text-[16px] font-medium text-gray-500">Links</Heading>
              <ul className="flex flex-col items-start gap-11 self-stretch">
                <li>
                  <a href="Home" target="_blank" rel="noreferrer">
                    <Heading as="p" className="text-[16px] font-medium text-black-900">Home</Heading>
                  </a>
                </li>
                <li>
                  <a href="Shop" target="_blank" rel="noreferrer">
                    <Heading as="p" className="text-[16px] font-medium text-black-900">Shop</Heading>
                  </a>
                </li>
                <li>
                  <a href="About" target="_blank" rel="noreferrer">
                    <Heading as="p" className="text-[16px] font-medium text-black-900">About</Heading>
                  </a>
                </li>
                <li>
                  <a href="Contact" target="_blank" rel="noreferrer">
                    <Heading as="p" className="text-[16px] font-medium text-black-900">Contact</Heading>
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex w-[44%] items-start justify-between gap-5 md:w-full md:flex-col">
              <div className="flex w-[28%] flex-col items-start gap-[54px] self-center md:w-full sm:gap-[27px]">
                <Heading as="p" className="text-[16px] font-medium text-gray-500">Help</Heading>
                <ul className="flex flex-col items-start gap-11 self-stretch">
                  <li>
                    <a href="#">
                      <Heading as="p" className="text-[16px] font-medium text-black-900">Payment Options</Heading>
                    </a>
                  </li>
                  <li>
                    <a href="Returns" target="_blank" rel="noreferrer">
                      <Heading as="p" className="text-[16px] font-medium text-black-900">Returns</Heading>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Heading as="p" className="text-[16px] font-medium text-black-900">Privacy Policies</Heading>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex w-[56%] flex-col items-start gap-[52px] self-center md:w-full sm:gap-[26px]">
                <Heading as="p" className="text-[16px] font-medium text-gray-500">Newsletter</Heading>
                <div className="flex gap-2.5 self-stretch">
                  <Input
                    color="black_900"
                    size="xs"
                    variant="underline"
                    shape="square"
                    name="email"
                    placeholder="Enter Your Email Address"
                    className="flex-grow !border-b px-3"
                  />
                  <div className="flex w-[26%]">
                    <a href="#">
                      <div className="flex w-full flex-col items-center gap-0.5">
                        <Heading size="textmd" as="p" className="text-[14px] font-medium text-black-900">
                          SUBSCRIBE
                        </Heading>
                        <div className="h-px w-full self-stretch bg-black-900" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-px w-full self-stretch bg-blue_gray-100" />
            <Heading as="p" className="text-[16px] font-medium text-gray-500">2023 furino. All rights reserved</Heading>
          </div>
        </div>
      </div>
    </footer>
  );
}
