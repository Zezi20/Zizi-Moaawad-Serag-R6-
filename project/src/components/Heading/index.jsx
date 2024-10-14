import React from "react";

const sizes = {
  textxs: "text-[12px] font-medium",
  textmd: "text-[14px] font-medium not-italic",
  textlg: "text-[16px] font-medium",
  textxl: "text-[20px] font-medium not-italic",
  text2xl: "text-[24px] font-medium md:text-[22px]", // Corrected key and spacing
  text3xl: "text-[36px] font-medium md:text-[34px] sm:text-[32px]", // Corrected spacing
  text5xl: "text-[48px] font-medium md:text-[44px] sm:text-[38px]", // Corrected spacing
  headingxs: "text-[16px] font-semibold", // Fixed typo
  headings: "text-[20px] font-semibold",
  headingmd: "text-[24px] font-semibold md:text-[22px]",
  headinglg: "text-[25px] font-semibold md:text-[23px] sm:text-[21px]",
  headingxl: "text-[28px] font-semibold md:text-[26px] sm:text-[24px]",
  heading2xl: "text-[32px] font-bold md:text-[30px] sm:text-[28px]", // Corrected key and spacing
  heading3xl: "text-[34px] font-bold md:text-[32px] sm:text-[30px]", // Corrected key and spacing
  heading4xl: "text-[36px] font-semibold md:text-[34px] sm:text-[32px]", // Corrected key and spacing
  heading5xl: "text-[40px] font-bold md:text-[38px] sm:text-[36px]", // Corrected spacing
};

const Heading = ({ children, className = "", size = "textlg", as, ...restProps }) => { // Fixed destructuring
  const Component = as || "h6"; // Default to 'h6' if 'as' is not provided
  return (
    <Component className={`text-black-900 font-poppins ${className} ${sizes[size]}`} {...restProps}> {/* Fixed typo in props spread */}
      {children}
    </Component> // Removed space before closing tag
  );
};

export { Heading };
