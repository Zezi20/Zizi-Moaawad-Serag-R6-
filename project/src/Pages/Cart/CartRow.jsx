import { Img, Heading, BreadcrumbLink, Breadcrumb, BreadcrumbItem } from "../../components";
import React from "react";

export default function CartRow() {
  return (
    <div className="flex h-[316px] items-start justify-center bg-[url(/public/images/img_group_78.png)] bg-cover bg-no-repeat py-[60px] md:h-auto md:py-5">
      <div className="container-xs mb-9 flex justify-center px-14 md:px-5">
        <div className="w-[10%] md:w-full">
          <div className="m-1.5 flex flex-col items-center md:ml-0">
            <Img
              src="images/img_meubel_house-logos_05_76x76.png"
              alt="Meubelhouse"
              className="relative z-10 mx-3.5 h-[76px] w-[76px] object-cover md:mx-0"
            />
            <Heading
              size="text5xl"
              as="h1"
              className="relative mt-[-16px] text-[48px] font-medium text-black-900 md:text-[44px] sm:text-[38px]"
            >
              Cart
            </Heading>
          </div>
          <Breadcrumb
            separator={<Img src="images/img_group_56.svg" alt="Arrow Right" className="h-[20px] w-[20px]" />}
            className="flex flex-wrap items-center justify-between gap-1.5"
          >
            <BreadcrumbItem>
              <BreadcrumbLink href="#">
                <Heading as="h2" className="text-[16px] font-medium text-black-900">
                  Home
                </Heading>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#">
                <Heading as="h3" className="text-[16px] font-light text-black-900">
                  Cart
                </Heading>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <div>
            {/* Additional content can go here */}
          </div>
        </div>
      </div>
    </div>
  );
}
