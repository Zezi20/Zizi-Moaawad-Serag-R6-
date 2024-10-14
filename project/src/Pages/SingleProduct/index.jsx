import { Helmet } from "react-helmet";
import { Img, Heading, Button, Text, RatingBar } from "../../components";
import Footer from "../../components/Footer";
import OutdoorSofaImage from "../../components/OutdoorSofaImage";
import ProductDetails from "../../components/ProductDetails";
import SingleproductColumnTwo from "./SingleproductColumnTwo";
import SingleproductColumnhomeOne from "./SingleproductColumnhomeOne";
import SingleproductRowFive from "./SingleproductRowFive";
import React, { Suspense, useState } from "react";

const data = [
  { sofaImage: "images/img_outdoor_sofa_set.png" },
  { sofaImage: "images/img_outdoor_sofa_set_2.png" },
  { sofaImage: "images/img_stuart_sofa_1.png" },
  { sofaImage: "images/img_maya_sofa_three.png" }
];

export default function SingleProductPage() {
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <Helmet>
        <title>Ahmed's Application</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-color-white">
        <div className="mb-1">
          <header className="flex items-center justify-between gap-5 bg-color-white px-[54px] py-[22px] md:flex-col md:px-5 sm:p-5">
            <div className="flex items-center gap-1">
              <a href="#">
                <Img src="images/img_meubel_house_logos_05.png" alt="Meubelhouse" className="h-[32px] object-cover" />
              </a>
              <Heading size="heading3x1" as="h2" className="font-montserrat text-[34px] font-bold text-black-900 md:text-[32px] sm:text-[30px]">
                Furniro
              </Heading>
            </div>
            <ul className="flex flex-wrap gap-[74px] md:gap-5">
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
                  <Heading as="p" className="text-[16px] font-medium text-black-900">Contact</Heading>
                </a>
              </li>
              <li className="mr-[46px] flex w-[18%] justify-between gap-5 md:mr-0 md:w-full">
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
              </li>
            </ul>
          </header>

          <div className="relative mt-[-2px] flex justify-center bg-color-white py-[34px] sm:py-5">
            <div className="container-xs mb-5 flex items-start justify-center md:flex-col md:px-5">
              <div className="w-full">
                <div className="flex items-start sm:flex-col">
                  <div className="flex w-[12%] flex-col gap-8 md:flex-row sm:w-full sm:flex-col">
                    <Suspense fallback={<div>Loading feed...</div>}>
                      {data.map((d, index) => (
                        <OutdoorSofaImage {...d} key={"listoutdoorsofa" + index} />
                      ))}
                    </Suspense>
                  </div>

                  <div className="relative ml-[-4px] h-[500px] flex-1 self-center sm:ml-0 sm:w-full sm:flex-none sm:self-stretch">
                    <div className="absolute bottom-0 left-[6%] top-0 my-auto h-[500px] w-[80%] rounded-[10px] bg-deep_orange-5">
                      <Img
                        src="images/img_asgaard_sofa_3.png"
                        alt="Asgaardsofa"
                        className="absolute bottom-[6%] left-0 m-auto h-[390px] w-[84%] object-contain"
                      />
                    </div>

                    <div className="flex w-full flex-col items-start self-center">
                      <div className="flex flex-col items-start self-stretch">
                        <Text
                          size="text4x"
                          as="p"
                          className="text-[42px] font-normal text-black-900 md:text-[38px] sm:text-[32px]"
                        >
                          Asgaard sofa
                        </Text>
                        <Heading
                          size="text2x"
                          as="h2"
                          className="text-[24px] font-medium text-gray-500 md:text-[22px]"
                        >
                          Rs. 250,000.00
                        </Heading>
                      </div>

                      <div className="mt-2.5 flex items-center gap-[22px] self-stretch">
                        <div className="flex items-center gap-[18px]">
                          <RatingBar value={1} isEditable={true} size={20} className="flex gap-2.5" />
                          <div className="h-[30px] w-px bg-gray-500" />
                        </div>
                        <Text as="p" className="text-[13px] font-normal text-gray-500">5 Customer Review</Text>
                      </div>

                      <Text as="p" className="mt-3 w-[70%] text-[13px] font-normal leading-[19px] text-black-900 md:w-full">
                        Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted
                        hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
                      </Text>

                      <div className="mt-[22px] flex flex-col items-start gap-3 self-stretch">
                        <Heading size="textmd" as="h3" className="text-[14px] font-normal text-gray-500">Size</Heading>
                        <div className="flex gap-4 self-stretch">
                          <Button color="primary" variant="fill" shape="round" className="min-w-[30px] rounded-[5px] px-3">L</Button>
                          <Button color="deep_orange_50" variant="fill" shape="round" className="min-w-[30px] rounded-[5px] px-1.5">XL</Button>
                          <Button color="deep_orange_50" variant="fill" shape="round" className="min-w-[30px] rounded-[5px] px-1.5">XS</Button>
                        </div>
                      </div>

                      <div onClick={(event) => {
                        event.stopPropagation();
                        setQuantity((quantity) => quantity + 1);
                      }} className="flex cursor-pointer flex-col items-center">
                        <Heading as="p" className="text-[16px] font-normal text-black-900">+</Heading>
                      </div>

                      <Button size="5x1" className="ml-[18px] flex-1 rounded-[14px] !border px-[33px] md:m-0 md:self-stretch sm:px-5">Add To Cart</Button>
                      <Button size="4x1" className="m-2.5 flex-1 rounded-[14px] !border px-[33px] md:m-0 md:self-stretch sm:px-5">+</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <SingleproductRowFive />
          <div className="bg-color-white py-[54px] md:py-5">
            <SingleproductColumnTwo />
          </div>
          <Footer className="border-t-[0.5px] border-solid border-black-900_2b bg-color-white" />
        </div>
      </div>
    </>
  );
}
