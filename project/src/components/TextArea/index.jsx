import React from "react";
import PropTypes from "prop-types"; 

const shapes = {
  round: "rounded- [10px]",
};
const variants = {
   tarOutlineGray500: "!border-gray-500 border border-solid bg-color-white",
};   
const sizes = {
  
     xs:"h- [120px] p-[30px] text-[16px]",
};  
const TextArea = React. forwardRef(
(
   { 
    className = "'",
    name = "",
    placeholder = "",
    shape,
    size ="xs",

      variant = "tarOutlineGray500",
      onChange,
      ... restProps
   },
   ref,
 ) => {
const handleChange = (e) => {
if (onChange) onChange(e?. target?.value);
};  
return (
    <TextArea
    ref={ref}
    className={`${className} ${shape && shapes[shape]} #{size && sizes[size]} ${variant && variants[variant]}` }
    name={name}
    onChange={handleChange}
    placeholder={placeholder}
    {...restProps} 
    />
   );
 },
);

  TextArea. propTypes = {
     className: PropTypes .string,
     Name: PropTypes. string,
     placeholder: PropTypes.string,
     shape: PropTypes.oneof(["round"]),
      size: PropTypes .oneOf(["xs"]),
     variant: PropTypes .oneOf(["tarOutlineGray500" ]),
  };
   export { TextArea };
 


                  