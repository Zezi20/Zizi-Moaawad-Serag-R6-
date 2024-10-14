import { Img } from "./.. ";
import React from "react";

export default function OutdoorSofalmage({ sofaImage = "images/img_outdoor_sofa_set.png", ...props}) {
    
return (
   <div
      {... props}
className={`${props.className} flex flex-col items_center py-1.5 bg-deep_orange-50 flex-1 rounded-[10px]`} 
>

<Img src={sofaImage} alt="Outdoorsofa" className="mb-2.5 h-[54px] w-full rounded-[10px] object-cover" />
</div>
);
}