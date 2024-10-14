import { Img, Heading } from "./..";
import React from "react"; // Fixed import statement for React

export default function Header({ ...props }) {
  return (
    <header
      {...props}
      className={`${props.className} flex sm:flex-col justify-between items-center gap-5 px-[54px] py-[22px] md:p-5 bg-color-white`}
    >
      <Img src="images/img_header_logo.png" alt="Header logo" className="h-[50px] w-[184px] object-contain" />
      <ul className="flex flex-wrap gap-[74px] md:gap-5"> {/* Fixed gap syntax */}
        <li> {/* Corrected from <1i> to <li> */}
          <a href="#">
            <Heading as="p" className="text-[16px] font-medium text-black-900">
              Home
            </Heading>
          </a>
        </li>
        <li>
          <a href="#">
            <Heading as="p" className="text-[16px] font-medium text-black-900">
              Shop
            </Heading>
          </a>
        </li>
        <li>
          <a href="#">
            <Heading as="p" className="text-[16px] font-medium text-black-900">
              About
            </Heading>
          </a>
        </li>
        <li>
          <a href="#">
            <Heading as="p" className="text-[16px] font-medium text-black-900">
              Contact
            </Heading>
          </a>
        </li>
      </ul>
      <div className="mr-[46px] flex w-[18%] justify-between gap-5 md:mr-0 md:w-full">
        <a href="#">
          <Img src="images/img_mdi_account_alert_outline.svg" alt="Account Alert" className="h-[28px] w-[28px]" />
        </a>
        <a href="#">
          <Img src="images/img_search.svg" alt="Search" className="h-[28px] w-[28px]" />
        </a>
        <a href="#">
          <Img src="images/img_akar_icon_heart.svg" alt="Favorites" className="h-[28px] w-[28px]" /> {/* Fixed file extension */}
        </a>
        <a href="#">
          <Img src="images/img_ant_design_shop.svg" alt="Shop" className="h-[28px] w-[28px]" />
        </a>
      </div>
    </header>
  );
}
