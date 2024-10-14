import React from "react";
const sizes = {
texts: "text-[13px] font-normal not-italic",
text4xl: "text-[42px] font-normal not-italic md:text-[38px] sm:text-[32px]",
};
const Text = ({ children, className = "", as, size = "text", ...restProps }) => {
const Component = as || "p";

return (
 <Component className={ `text-black-900 font-poppins ${className} ${sizes[size]}`} {...restProps}>
{children}
  </Component>
 );
};
export { Text };