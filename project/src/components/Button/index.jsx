import React from "react";
import PropTypes from "prop-types";

const shapes = {
  circle: "rounded-[50%]",
  round: "rounded-[5px]",
  square: "rounded-[0px]",
};

const variants = {
  fill: {
    color_white: "bg-color-white text-primary",
    primary: "bg-primary text-color-white",
    deep_orange_50: "bg-deep_orange-50 text-black-900",
  },
  outline: {
    gray_500: "border-gray-500 border border-solid text-black-900",
    black_900: "border-black-900 border border-solid text-black-900",
  },
};

const sizes = {
  "2x1": "h-[54px] px-4 text-[20px]",
  "4x1": "h-[64px] px-[34px] text-[23px]",
  sm: "h-[32px] px-3 text-[16px]",
  xl: "h-[54px] px-[34px] text-[16px]",
  md: "h-[48px] px-3",
  "5x1": "h-[64px] px-[34px] text-[20px]",
  "3x1": "h-[60px] px-[26px] text-[20px]",
  lg: "h-[48px] px-[34px] text-[16px]",
  xs: "h-[30px] px-3 text-[13px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "outline",
  size = "xs",
  color = "black_900",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap ${shape && shapes[shape]} ${size && sizes[size]} ${variant && variants[variant]?.[color]}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "round", "square"]),
  size: PropTypes.oneOf(["2x1", "4x1", "sm", "xl", "3x1", "lg", "xs"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "color_white",
    "primary",
    "deep_orange_50",
    "gray_500",
    "black_900",
  ]),
};

export { Button };
