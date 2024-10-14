import { Helmet } from "react-helmet";
import { Button, Heading, Radio, RadioGroup, Input, SelectBox, Img } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import CheckoutRow from "./CheckoutRow";
import CheckoutRowOne from "./CheckoutRowOne";
import React from "react";

const dropDownOptions = [
  { label: "Option 1", value: "option1" },
  { label: "Option 2", value: "option2" },
  { label: "Option 3", value: "option3" },
];

export default function CheckoutPage() {
  return (
    <>
      <Helmet>
        <title>Ahmed's Application</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-color-white">
        <Header />
        <div>
          <CheckoutRow />
          <div className="flex flex-col items-center bg-color-white py-[52px] md:py-5">
            <div className="container-xs mt-2.5 md:px-5">
              <div className="flex items-start gap-[26px] md:flex-col">
                <div className="w-full self-center">
                  <div className="flex flex-col items-start gap-9 bg-color-white py-[34px] pl-[74px] pr-14 md:px-5 sm:p-5">
                    <Heading
                      size="heading4x1"
                      as="h2"
                      className="text-[36px] font-semibold text-black-900 md:text-[34px] sm:text-[32px]"
                    >
                      Billing details
                    </Heading>
                    <div className="mr-1 flex gap-[30px] self-stretch md:mr-0 sm:flex-col">
                      <div className="flex w-full flex-col items-start gap-[22px] sm:w-full">
                        <Heading as="h3" className="text-[16px] font-medium text-black-900">
                          First Name
                        </Heading>
                        <Input
                          shape="round"
                          name="firstName"
                          className="self-stretch rounded-[10px] border border-gray-500 px-[26px] sm:px-5"
                        />
                      </div>
                      <div className="flex w-full flex-col items-start gap-[22px] sm:w-full">
                        <Heading as="h4" className="text-[16px] font-medium text-black-900">
                          Last Name
                        </Heading>
                        <Input
                          shape="round"
                          name="lastName"
                          className="self-stretch rounded-[10px] border border-gray-500 px-[26px] sm:px-5"
                        />
                      </div>
                    </div>
                    <div className="mr-1 flex flex-col items-start gap-[22px] self-stretch md:mr-0">
                      <Heading as="h5" className="text-[16px] font-medium text-black-900">
                        Company Name (Optional)
                      </Heading>
                      <Input
                        shape="round"
                        name="companyName"
                        className="self-stretch rounded-[10px] border border-gray-500 px-[26px] sm:px-5"
                      />
                    </div>
                    <div className="mb-9 mr-1 self-stretch md:mr-0">
                      <div className="flex flex-col items-start gap-[22px]">
                        <Heading as="h6" className="text-[16px] font-medium text-black-900">
                          Country / Region
                        </Heading>
                        <SelectBox
                          shape="round"
                          indicator={
                            <Img src="images/img_arrowdown.svg" alt="Arrow Down" className="h-[20px] w-[20px]" />
                          }
                          name="country"
                          placeholder="Sri Lanka"
                          options={dropDownOptions}
                          className="gap-4 self-stretch rounded-[10px] border border-solid border-gray-500 px-[30px] sm:p-5"
                        />
                      </div>
                    </div>
                    <div className="mt-9 flex flex-col items-start gap-[22px]">
                      <Heading as="p" className="text-[16px] font-medium text-black-900">
                        Street address
                      </Heading>
                      <Input
                        shape="round"
                        name="streetAddress"
                        className="self-stretch rounded-[10px] border border-gray-500 px-[26px] sm:px-5"
                      />
                    </div>
                    <div className="mt-9 flex flex-col items-start gap-[22px]">
                      <Heading as="p" className="text-[16px] font-medium text-black-900">
                        Town / City
                      </Heading>
                      <Input
                        shape="round"
                        name="city"
                        className="self-stretch rounded-[10px] border border-gray-500 px-[26px] sm:px-5"
                      />
                    </div>
                    <div className="mt-9 flex flex-col items-start gap-[22px]">
                      <Heading as="p" className="text-[16px] font-medium text-black-900">
                        Province
                      </Heading>
                      <SelectBox
                        shape="round"
                        indicator={
                          <Img src="images/img_arrowdown.svg" alt="Arrow Down" className="h-[20px] w-[20px]" />
                        }
                        name="province"
                        placeholder="Western Province"
                        options={dropDownOptions}
                        className="gap-4 self-stretch rounded-[10px] border border-solid border-gray-500 px-[30px] sm:p-5"
                      />
                    </div>
                    <div className="mt-9 flex flex-col items-start gap-[22px]">
                      <Heading as="p" className="text-[16px] font-medium text-black-900">
                        ZIP code
                      </Heading>
                      <Input
                        shape="round"
                        name="zipcode"
                        className="self-stretch rounded-[10px] border border-gray-500 px-[26px] sm:px-5"
                      />
                    </div>
                    <div className="mt-9 flex flex-col items-start gap-[22px]">
                      <Heading as="p" className="text-[16px] font-medium text-black-900">
                        Phone
                      </Heading>
                      <Input
                        shape="round"
                        name="phone"
                        className="self-stretch rounded-[10px] border border-gray-500 px-[26px] sm:px-5"
                      />
                    </div>
                    <div className="mt-9 flex flex-col items-start gap-[22px]">
                      <Heading as="p" className="text-[16px] font-medium text-black-900">
                        Email address
                      </Heading>
                      <Input
                        shape="round"
                        name="email"
                        className="self-stretch rounded-[10px] border border-gray-500 px-[26px] sm:px-5"
                      />
                    </div>
                    <Input
                      size="md"
                      shape="round"
                      name="additionalInfo"
                      placeholder="Additional information"
                      className="mt-[66px] rounded-[10px] border border-gray-500 px-[26px] sm:px-5"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
