Import { Headings} from "./..";

import React from "react";

export default function ProductDetails ({
skuText = "SKU",
categoryText = "Category",
tagsText = "Tags",
shareText = "Share",
... props
}) {
return
  <div {...props} className={`${props.className} flex flex-col items-start gap-3`}> 
    <Heading as="p" className="text - [16px] font-normal text-gray-500 ">
         {skuText}
    </Heading>
     <Heading as="p" className="text-[16px] font-normal text-gray-500 ">

        {categoryText}
      </Heading>
      <Heading as="p"  className="text-[16px] font-normal text-gray-500 ">

        { tagsText}
       </Heading>
        <Heading as="p"  className="text-[16px] font-normal text-gray-500 ">

           {shareText}
</Heading>
</div>
);
}