import { Img } from "./..";
import React from "react";

export default function CloudSofalmagelf({ sofalmag = "images/img-cloud-sofa-three.png", ...props }) {
  return (
    <div {...props} className={`${props.className} flex items-center w-[50%] md:w-full`}>
      <Img src={sofalmag} alt="Cloudsofa" className="h-[34px] w-full rounded-[10px] object-cover sm:h-auto" />
    </div>
  );
}
