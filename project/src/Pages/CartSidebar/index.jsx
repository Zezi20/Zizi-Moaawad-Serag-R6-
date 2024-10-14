import React from "react";
import { Helmet } from "react-helmet";
import { Button, Heading, Img, Text } from "../../components";
import AsgaardSofaDisplay from "../../components/AsgaardSofaDisplay";
import Footer from "../../components/Footer";
import ProductDetails from "../../components/ProductDetails";
import CartsidebarColumnTwo from "./CartsidebarColumnTwo";
import CartsidebarRowSix from "./CartsidebarRowSix";

export default function CartSidebarPage() {
  return (
    <>
      <Helmet>
        <title>Ahmed's Application1</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-color-white">
        <div>
          <header className="flex items-center justify-between gap-5 bg-color-white px-[54px] py-[22px] md:flex-col md:px-5 sm:p-5">
            <div className="flex items-center gap-1">
              <a href="#">
                <Img src="images/img_meubel_house_logos_05.png" alt="Meubelhouse" className="h-[32px] object-cover" />
              </a>
              <Heading
                size="heading3x1"
                as="h2"
                className="font-montserrat text-[34px] font-bold text-black-900 md:text-[32px] sm:text-[30px]"
              >
                Furniro
              </Heading>
            </div>
            <ul className="flex flex-wrap gap-[74px] md:gap-5">
              <li>
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
                <Img src="images/img_mdi_account_alert_outline.svg" alt="Mdiaccount" className="h-[28px] w-[28px]" />
              </a>
              <a href="#">
                <Img src="images/img_search.svg" alt="Search" className="h-[28px] w-[28px]" />
              </a>
              <a href="#">
                <Img src="images/img_akar_icons_heart.svg" alt="Akaricons" className="h-[28px] w-[28px]" />
              </a>
              <a href="#">
                <Img src="images/img_ant_design_shop.svg" alt="Antdesignshop" className="h-[28px] w-[28px]" />
              </a>
            </div>
          </header>
          <div className="relative mt-[-100px] h-[3106px] content-center md:h-auto">
            <div className="mx-auto flex-1">
              <div className="flex justify-center bg-color-white py-[30px] sm:py-5">
                <div className="container-xs flex items-center justify-center gap-3 md:px-5">
                  <div className="flex items-center gap-3.5">
                    <Heading as="h1" className="text-[16px] font-normal text-gray-500">
                      Home
                    </Heading>
                    <Img src="images/img_group_87.svg" alt="Arrowright" className="h-[20px] w-[20px]" />
                  </div>
                  <div className="flex items-center gap-5">
                    <Heading as="h2" className="text-[16px] font-normal text-gray-500">
                      Shop
                    </Heading>
                    <Img src="images/img_group_87.svg" alt="Arrowright" className="h-[20px] w-[20px]" />
                  </div>
                  <div className="flex flex-1 items-center gap-8 px-3">
                    {/* Additional content can be added here */}
                  </div>
                  <div className="flex flex-1 items-center gap-8 px-3">
                    <div className="h-[36px] w-[2px] bg-gray-500" />
                    <Heading as="h3" className="text-[16px] font-normal text-black-900">
                      Asgaard sofa
                    </Heading>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative mt-[-2px] flex justify-center bg-color-white py-[34px] sm:py-5">
              <div className="container-xs mb-[18px] flex items-start justify-center md:flex-col md:px-5">
                <div className="w-full">
                  <div className="flex items-start sm:flex-col">
                    <div className="flex w-[12%] flex-col gap-8 sm:w-full">
                      <div className="rounded-[10px] bg-deep_orange-50 py-1.5">
                        <Img
                          src="images/img_outdoor_sofa_set.png"
                          alt="Outdoorsofa"
                          className="mb-2.5 h-[54px] w-full rounded-[10px] object-cover md:h-auto"
                        />
                      </div>
                      <div className="rounded-[10px] bg-deep_orange-50">
                        <Img
                          src="images/img_outdoor_sofa_set_2.png"
                          alt="Outdoorsofa"
                          className="mb-[18px] h-[60px] w-full rounded-[10px] object-cover md:h-auto"
                        />
                      </div>
                      <div className="rounded-[10px] bg-deep_orange-50">
                        <Img
                          src="images/img_stuart_sofa_1.png"
                          alt="Stuartsofaone"
                          className="mb-2 h-[70px] w-full rounded-[10px] object-cover md:h-auto"
                        />
                      </div>
                      <div className="rounded-[10px] bg-deep_orange-50 py-[18px]">
                        <Img
                          src="images/img_maya_sofa_three.png"
                          alt="Mayasofathree"
                          className="h-[44px] w-full rounded-[10px] object-cover md:h-auto"
                        />
                      </div>
                    </div>
                    <div className="relative ml-[-4px] h-[500px] flex-1 self-center sm:ml-0 sm:w-full sm:flex-none sm:self-stretch">
                      <div className="absolute bottom-0 left-[6%] top-0 my-auto h-[500px] w-[80%] rounded-[10px] bg-deep_orange-50" />
                      <Img
                        src="images/img_asgaard_sofa_3.png"
                        alt="Asgaardsofathre"
                        className="absolute bottom-[6%] left-0 m-auto h-[390px] w-[84%] object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex w-full flex-col items-start self-center">
                    <div className="flex flex-col items-start self-stretch">
                      <Text
                        size="text4x1"
                        as="p"
                        className="text-[42px] font-normal text-black-900 md:text-[38px] sm:text-[32px]"
                      >
                        Asgaard sofa
                      </Text>
                      <Heading size="text2x" as="h4" className="text-[24px] font-medium text-gray-500 md:text-[22px]">
                        Rs. 250, 000.00
                      </Heading>
                    </div>
                    <div className="mt-2.5 flex items-center gap-[22px] self-stretch">
                      <div className="flex w-[24%] items-center gap-[18px]">
                        <div className="flex flex-1 gap-1.5">
                          <Img
                            src="images/img_dashicons_star_filled.svg"
                            alt="Image"
                            className="h-[20px] w-[20px]"
                          />
                          <Img
                            src="images/img_dashicons_star_filled.svg"
                            alt="Image"
                            className="h-[20px] w-[20px]"
                          />
                          <Img
                            src="images/img_dashicons_star_filled.svg"
                            alt="Image"
                            className="h-[20px] w-[20px]"
                          />
                          <Img
                            src="images/img_dashicons_star_filled.svg"
                            alt="Image"
                            className="h-[20px] w-[20px]"
                          />
                          <Img
                            src="images/img_carbon_star_half.svg"
                            alt="Image"
                            className="h-[20px] w-[20px]"
                          />
                        </div>
                        <Text as="p" className="text-[16px] font-medium text-gray-500">
                          4.5
                        </Text>
                      </div>
                      <div className="flex flex-1 items-center gap-1.5">
                        <Text as="p" className="text-[16px] font-medium text-gray-500">
                          200 Reviews
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-[40px] w-full">
                  <div className="flex justify-center gap-[32px] md:gap-5">
                    <Button className="bg-deep_orange-400 text-white">Add to Cart</Button>
                    <Button className="border border-black-900 bg-color-white text-black-900">Buy Now</Button>
                  </div>
                </div>
                <ProductDetails />
                <AsgaardSofaDisplay />
                <CartsidebarRowSix />
                <CartsidebarColumnTwo />
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
