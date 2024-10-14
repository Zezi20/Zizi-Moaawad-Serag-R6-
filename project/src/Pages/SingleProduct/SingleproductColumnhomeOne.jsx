import { Img, Heading, BreadcrumbLink, Breadcrumb, BreadcrumbItem } from "../../components";
import React from "react";

export default function SingleproductColumnhomeOne() {
  return (
    <div className="mt-3.5">
      <Breadcrumb
        separator={<Img src="images/img_group_87.svg" alt="Arrow Right" className="h-[20px] w-[20px]" />}
        className="flex flex-wrap items-center gap-[18px] bg-deep_orange-50 py-9 pl-[98px] pr-14 md:px-5 sm:p-5"
      >
        <BreadcrumbItem>
          <BreadcrumbLink href="#">
            <Heading as="h1" className="text-[16px] font-normal text-gray-500">
              Home
            </Heading>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">
            <Heading as="h2" className="text-[16px] font-normal text-gray-500">
              Shop
            </Heading>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#">
            <Heading as="h3" className="text-[16px] font-normal text-black-900">
              Asgaard sofa
            </Heading>
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
}
