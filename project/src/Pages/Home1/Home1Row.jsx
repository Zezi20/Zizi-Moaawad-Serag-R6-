import { Button, Img, Heading, Slider } from "../../components";
import React from "react";

export default function HomelRow() {
const [sliderState, setSliderState] = React.useState(0);
const sliderRef = React.useRef(null);

return (
   <div className="flex w-[96%] justify-center self-center bg-gray-100 p-11 md:w-full md:p-5">
     <div className="flex w-full items-center justify-center gap-[42px] md:flex-col">
       <div className="flex w- [32%] flex-col items-start gap-6 md:w-full">
          <div className="flex flex-col items-start gap-1.5 self-stretch">
            <Heading
               size="heading5x1"
                as="h2"
                className="text-[40px] font-bold leading-[120%] text-color-gray_1-0md:text-[38px] sm:text-[36px]" 
            >  
               <> 
               50+ Beautiful rooms <br/> 

               inspiration
              </> 
              </Heading>
            <Heading as="h3" className="w-[86%] text-[16px] font-medium leading-[150%] text-color-gray_2 md:w-full"> 
              Our designer already made a lot of beautiful prototipe of rooms that inspire you
            </Heading>
         </div>
         <Button
              color="primary"
              size="1g"
              variant="fill"
              shape="square"
              className="min-w- [176px] px-[34px] font-semibold sm:px-5"
            >
              Explore More
            </ Button>
         </div>
          <div className="relative h-[582px] w- [64%] content-center md:h-auto md:w-full">
              <div className="sliderone mx-auto flex w-full">
               <Slider
                  autoPlay
                  autoPlayInterval={2000}
                   responsive={{ 0: { items: 1 }, 551: { items:1}, 1051: {items:1} }}
                   renderDotsItem={ (props) => {
                      return props?.isActive ? (
                        <div className="mr - [5px]  inline-block h-[26px] w-[26px] cursor-pointer rounded-[50%] border border-solid border-lim-800_99"/>

                     ):(   
              
                        <div className="mr- [5px] inline-block h-[-[26px] w-[26px] cursor-pointer rounded-[50%] border border-solid border-primary bg-primary"/>
                     );
                     }}
                      activeIndex={sliderState}
                      onSlideChanged={ (e) => {
                       setSliderState(e?.item);
                     }}
                     ref={sliderRef}
                     items={[ ... Array (3)] - map (() => (
                        <React. Fragment key={Math.random()}>
                          <div className="flex items-start gap-6 md: flex-col">
                        
                             <div className="relative h-[582px] flex-1 content-center self-center md:h-auto md:w-full md:flex-none md:self-stretch">
                               <Img
                                  src="images/img_rectangle_24.png"
                               alt="Image"
                               className="mx-auto h-[582px] w-full flex-1 object-cover"
                              />
                              < div className="absolute bottom-6 left-0 right-0 mx-6 my-auto flex flex-1 item-center md:mx-0">
                                <div className="flex w-[60%] flex-col items-center bg-white-a700_b7 px-4 py-6 sm:py-5">
                                 <div className="mx-3.5 mt-1.5 flex items-items-center justify-center self-stretch md:mx-0">
                                  <Heading as="h4" className="text-[16px] font-medium text-couor-gray_2">
                                  
                                       01
                                    </Heading>
                                     <div className="ml-2 h-px w-[26px] bg-color-gray_2"/>
                                      <Heading as="h5" className="ml-2 text-[16] font-medium text-color-gray_2">
                                         Bed Room
                                       </Heading>
                                     </div>
                                    < Heading
                                       size="headingx]"
                                       as="h6"
                                      className="self-end text-[28px] font-semibold text-color-gray_1-0 md:text-[26px] sm:text-[24px]"
                                    >
                                      Inner Peace
                                    </Heading>
                                 </div>
                                 <Button
                                    color="primary"
                                    size="md"
                                    variant="fill"  
                                    className="w-[48px] self-end px-3"
                                 >
                                    <Img src="images/img_right_16px.svg" />
                                   </Button>
i                                </div>
                              </div>
                              <img
                                src="images/img_rectangle_25.png"
                                alt="Image"
                                className="h- [486px] w-[46%] object-contain md:w-full"
                              />
                            </div> 
                           </React. Fragment>
                     ))}
                     />
                     </div>
                     <Button

                     color="color _white"
                     size="md"
                     variant="fill"
                     shape="circle"
                     onClick={() => {
                        sliderRef?.current?.slideNext;
                  }}
                  className="absolute bottom-0 right-[-1px] top-0 my-auto w-[48px] rounded-[24px] px-3 shadow-xs"
               >
               < Img src="images/img_arrow_right.svg" />
                </Button>
                </div> 
               </div>
            </div> 
   );
}        

