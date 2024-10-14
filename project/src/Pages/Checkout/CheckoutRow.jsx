import { Img, Heading, BreadcrumbLink, Breadcrumb, BreadcrumbItem } from "../components";
import React from "react";

export default function CheckoutRow() {
  return (
    <div className="flex h-[316px] items-start justify-center bg-[url('../public/images/img_group_78.png')] bg-cover bg-no-repeat">
      <div className="container-xs mb-9 flex justify-center px-14 md:px-5">
        <div className="w-[20%] md:w-full">
          <div className="flex flex-col items-center">
            <Img
              src="images/img_meubel_house_logos_05_76x76.png"
              alt="Meubelhouse"
              className="relative z-[1] h-[76px] w-[76px] object-cover"
            />
            <Heading
              size="text5xl"
              as="h1"
              className="relative mt-[-16px] text-[48px] font-medium text-black-900 md:text-[44px] sm:text-[38px]"
            >
              Checkout
            </Heading>
          </div>
          <Breadcrumb separator={<Img src="images/img_group_56.svg" alt="Arrow Right" className="h-[20px] w-[20px]" />}>
            <BreadcrumbItem>
              <BreadcrumbLink href="#" className="m1-9">
                <Heading as="h2" className="text-[16px] font-medium text-black-900">
                  Home
                </Heading>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#">
                <Heading as="h3" className="text-[16px] font-light text-black-900">
                  Checkout
                </Heading>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
}
