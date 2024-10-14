import { Helmet } from "react-helmet";
import { Heading, Img } from "../components"; // Fixed import path
import Header from "../components/Header"; // Fixed import path
import ContactColumn from "./ContactColumn"; // Fixed import path
import ContactRow from "./ContactRow"; // Fixed import path
import ContactRowOne from "./ContactRowOne"; // Fixed import path
import React from "react";

export default function ContactPage() { // Fixed function declaration
  return (
    <>
      <Helmet>
        <title>Ahmed&#39;s Application1</title> {/* Fixed apostrophe */}
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-color-white">
        <Header />
        <div>
          <ContactRow />
          <ContactColumn />
          <ContactRowOne />
        </div>
        <footer className="mt-[30px] flex items-center justify-center border-t-[0.5px] border-solid border-black-900_2b bg-color-white py-4"> {/* Fixed className */}
          <div className="container-xs mt-2.5 flex justify-center md:px-5">
            <div className="flex w-full flex-col gap-12">
              <div className="flex w-[90%] items-start justify-between gap-5 md:w-full md:flex-col">
                <div className="flex w-[24%] flex-col gap-[50px] md:w-full">
                  <Img
                    src="images/img_footer_logo.png"
                    alt="Footer logo"
                    className="h-[36px] w-[84px] object-contain"
                  />
                  <Heading as="p" className="text-[16px] font-normal leading-6 text-gray-500">
                    400 University Drive Suite 200 Coral Gables,
                    <br />
                    FL 33134 USA
                  </Heading>
                </div>
                <div className="flex w-[62%] items-start justify-between gap-5 self-center md:w-full md:flex-col">
                  <div className="flex w-[50%] flex-col gap-[54px] self-center md:w-full sm:gap-[27px]">
                    <div className="flex w-[70%] flex-wrap justify-between gap-5 md:w-full">
                      <Heading as="p" className="text-[16px] font-medium text-gray-500">Links</Heading>
                      <Heading as="p" className="text-[16px] font-medium text-gray-500">Help</Heading>
                    </div>
                    <div className="flex items-start justify-between gap-5">
                      <ul className="flex w-[60%] flex-col items-start gap-11 self-center">
                        <li>
                          <a href="#">
                            <Heading as="p" className="text-[16px] font-medium text-black-900">Home</Heading>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <Heading as="p" className="text-[16px] font-medium text-black-900">Shop</Heading>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <Heading as="p" className="text-[16px] font-medium text-black-900">About</Heading>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <Heading as="p" className="text-[16px] font-medium text-black-900">Contact</Heading>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <Heading as="p" className="text-[16px] font-medium text-black-900">Payment Options</Heading>
                          </a>
                        </li>
                        <li>
                          <a href="#">
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
                  </div>
                  <div className="flex w-[40%] flex-col items-start gap-[52px] md:w-full sm:gap-[26px]">
                    <Heading as="p" className="text-[16px] font-medium text-gray-500">Newsletter</Heading>
                    <div className="flex flex-col gap-0.5 self-stretch">
                      <div className="flex flex-wrap justify-between gap-5">
                        <Heading as="p" className="text-[14px] font-normal text-gray-500">Enter Your Email Address</Heading>
                        <a href="SUBSCRIBE" target="_blank" rel="noreferrer">
                          <Heading as="p" className="text-[14px] font-medium text-black-900">SUBSCRIBE</Heading>
                        </a>
                      </div>
                      <div className="flex gap-2.5">
                        <div className="h-px flex-1 bg-black-900" />
                        <div className="h-px w-[26%] bg-black-900" />
                      </div>
                    </div>
                    <div className="flex flex-col items-start gap-[34px]">
                      <div className="flex gap-2.5">
                        <div className="h-px flex-1 bg-black-900" />
                        <div className="h-px w-[26%] bg-black-900" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-px self-stretch bg-blue_gray-100" />
              <Heading as="p" className="text-[16px] font-normal text-black-900">
                © 2023 Ahmed. All rights reserved.
              </Heading>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
