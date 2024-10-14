import { Heading } from "../ ../ components";

import UserProfileStack from "../ ../ components/UserProfileStack"; 

 import  React,{ Suspense } from "react"; 

const data = [
    {firstUserImage: "images/img_image_81-png",secondUserImage: "images/img_image_106.png",sectionTitle: "Dining"},
     {firstUserImage: "images/img_image_76-png",secondUserImage: "images/img_image_106.png",sectionTitle: "Living"}, 
     {firstUserImage: "images/img_image_82.png", secondUserImage: "images/img_image_101.png",sectionTitle: "Bedroom"},
];
export default function HomelColumn () {
   return (
     <div className="flex flex-col items-center">
        < div className="container-xs flex flex-col items-center gap-14 px-7 md:px-5 sm:gap-7">
          <div className="flex flex-col items-start">
             < Heading
                 size="heading2x1"
                  as="h1"
                  className="ml- [88px] text-[32px] font-bold text-font-color md:ml-0 md:text-[30px] sm:text-[28px]"
                 >
                  Browse The Range
                </Heading>
                 <Heading size="textxl" as="h2" className="text-[20px] font-normal text-font-color1">
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Heading>
              </div>
             <div className="ml-1 flex gap-5 self-stretch md:ml-0 md:flex-col">
              <Suspense fallback={<div>Loading feed...</div>}>
                 {data. map((d, index) => (
                <UserProfileStack {...d} key={ "home" +index} />
              ))}
           </Suspense>
         </div>
        </div>
     </div>
     );
    }