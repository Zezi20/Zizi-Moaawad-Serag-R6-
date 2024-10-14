import { Helmet } from "react-helmet";
import { Img, Heading } from "../.. /components";
import Footer from "../.. /components/Footer";
import HomelColumn from "./Home1Column" ;
import HomelColumnOne from "./HomelColumnOne";
import HomelImage from ". /Home1Image";
import HomelRow from " •/Home1Row";
import HomelRowtitleTwo from ". /HomelRowtitleTwo";
import React from "react";

export default function HomelPage() {
return (
<>
  <Helmet>
    <title>Project</title>
     <meta name="description" content="Web site created using create-react-app" />
    </Helmet>
    < div className="flex w-full flex-col gap-14 bg-color-white sm:gap-7">
        <div>
          <header className="flex items-center justify-between gap-5 bg-color-white px-[54px] py-[22px] md:flex-col md:px-5 sm:p-5">

            < div className="flex items-center gap-1">
               <a href="#">
                 < Img src="images/img_meubel_house_logos._05. png" alt="Meubelhouse" className="h-[32px] object-cover" />
                 </a>
                 < Heading
                     size="heading3x1"
                     as="h2"
                     className="font-montserrat text-[34px] font-bold text-black-900 md:text-[32px] sm:text-[30px]"
                    > 
                      Furniro 
                    </Heading> 
                   </div> 
                   <ul className="flex flex-wrap gap-[74px] md: gap-5">
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
                              shop 
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
                           <div className="mr- [46px] flex w-[18%] justify-between gap-5 md:mr-0 md:w-full">
                              <a href="#">
                                <Img src="images/img_mdi_account_alert_outline.svg" alt="Mdiaccount"className="h-[28px] w-[28px]"/>
                               </a> 
                               <a href="#">

                                 <Img src="images/img_search.svg" alt="Search" className="h- [28px] w-[28px]" />
                                </a> 
                            
                                 <a href="#">
                                  < Img rc="images/img_akar_icons_heart.svg" alt="Akaricons" className="h-[28px] w-[28px]"/>
                                    </a>
                                    <a href="#">

                                       <Img src="images/img_ant_design_shop.svg" alt="Antdesignshop" className="h-[28px] w-[28px]"/>
                                         </a>
                                        </div>
                                        </header> 
                                        <HomelImage/> 
                                      </div>
                                     < HomelColumn />
                                     <Home1ColumnOne />
                                    
                                    <div className="flex items-start justify-center overflow-auto md: flex-col">
                                     < HomelRow />
                                     < Img
                                         src="images/img_rectangle_26.png"
                                          alt="Image"
                                           className="relative z-[1] ml-[-52px] mt-11 h-[486px] w-[24%] object-conttain md:ml-0 md:w-full"
                                          />
                                        </div>
                                          <HomelRowtitleTwo />
                                          <Footer className="border-t-[0.5px] border-solid border-black-900_2b bg -color-white"/> 
                                         </div> 
                                        </> 
                                       );
                                     }                                                          
