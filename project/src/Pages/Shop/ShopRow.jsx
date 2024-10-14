import { Img, Heading, BreadcrumbLink, Breadcrumb, BreadcrumbItem } from "../../components";
import React from "react";

export default function ShopRow() {
  return (
    <div className="flex h-[316px] items-end justify-center bg-[url('/public/images/img_group_78.png')] bg-cover bg-no-repeat py-24 md:h-auto">
      <div className="container-xs mt-6 flex justify-center px-14 md:px-5">
        <div className="flex w-[10%] flex-col items-center md:w-full">
          <Heading
            size="text5x1"
            as="h1"
            className="text-[48px] font-medium text-black-900 md:text-[44px] sm:text-[38px]"
          >
            Shop
          </Heading>
          <Breadcrumb separator={<Img src="images/img_group_56.svg" alt="Arrow Right" className="h-[20px] w-[20px]" />}>
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
                  Shop
                </Heading>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
}
