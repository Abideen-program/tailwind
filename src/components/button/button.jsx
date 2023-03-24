import React from "react";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import { clx } from "../utils/clx";

export default function Button({
  isLoading,
  href,
  buttonType,
  onclick,
  variant = "contained",
  type = "primary",
  iconLeft,
  iconRight,
  size = "large",
  disabled,
  classname,
  children,
}) {

  // const [isLoading, setLoading] = React.useState(true)

  const classes = clx(
    "flex items-center justify-center space-x-2 rounded-[16px] bg-transparent ",
    variant === "contained" &&
      size === "large" &&
      `${
        type === "primary"
          ? isLoading
            ? "bg-transparent"
            : "bg-primary-dark hover:bg-primary-light text-white dark:bg-[#E6E6E9] dark:text-primary-dark dark:hover:bg-primary-dark dark:hover:text-[#e6e6e9]"
          : type === "secondary"
          ? isLoading
            ? "bg-transparent"
            : "bg-secondary-dark hover:bg-secondary-dark/80 text-white"
          : type === "white"
          ? isLoading
           ? "bg-transparent"
            : "bg-[#fff] hover:bg-secondary-light text-primary-dark"
          : null
      } py-[16px] px-[32px] duration-400 ${
        disabled &&
        "bg-primary-dark/40 cursor-not-allowed hover:bg-primary-dark/40"
      }`,
    variant === "contained" &&
      size === "medium" &&
      `${
        type === "primary"
          ? isLoading
            ? "bg-transparent"
            : "bg-primary-dark hover:bg-primary-light text-white border-2 border-primary-dark hover:border-primary-light dark:bg-[#E6E6E9] dark:text-primary-dark dark:hover:bg-primary-dark dark:hover:text-[#e6e6e9]"
          : type === "secondary"
          ? isLoading
            ? "bg-transparent"
            : "bg-secondary-dark hover:bg-secondary-dark/80 text-white"
          : type === "white"
          ? isLoading
            ? "bg-transparent"
            : "bg-[#fff] hover:bg-secondary-light text-primary-dark"
          : null
      } py-[10px] lg:py-[12px] px-[32px] duration-400 ${
        disabled &&
        "bg-primary-dark/40 cursor-not-allowed hover:bg-primary-dark/40"
      }`,
    variant === "contained" &&
      size === "small" &&
      `${
        type === "primary"
          ? isLoading
            ? "bg-transparent"
            : "bg-primary-dark hover:bg-primary-light text-white border-2 border-primary-dark hover:border-primary-light dark:bg-[#E6E6E9] dark:text-primary-dark dark:hover:bg-primary-dark dark:hover:text-[#e6e6e9]"
          : type === "secondary"
          ? isLoading
            ? "bg-transparent"
            : "bg-secondary-dark hover:bg-secondary-dark/80 text-white"
          : type === "white"
          ? isLoading
            ? "bg-transparent"
            : "bg-[#fff] hover:bg-secondary-light text-primary-dark"
          : null
      } py-[8px] px-[26px] duration-400 ${
        disabled &&
        "bg-primary-dark/40 cursor-not-allowed hover:bg-primary-dark/40"
      }`,
    type === "tertiary"
      ? isLoading
        ? "bg-transparent border-none"
        : "bg-white hover:bg-secondary-light"
      : variant === "outlined" &&
          size === "large" &&
          "bg-white text-primary-dark dark:text-white dark:hover:text-primary-dark border-2 border-secondary-dark py-[16px] px-[32px] hover:bg-secondary-light duration-400",
    variant === "outlined" &&
      size === "medium" &&
      "bg-white text-primary-dark dark:text-white dark:hover:text-primary-dark border-2 border-secondary-dark py-[12px] px-[32px] hover:bg-secondary-light duration-400",
    variant === "outlined" &&
      size === "small" &&
      "bg-white text-primary-dark dark:text-white dark:hover:text-primary-dark border-2 border-secondary-dark py-[8px] px-[26px] hover:bg-secondary-light duration-400",
    disabled &&
      "bg-primary-dark/40 cursor-not-allowed hover:bg-primary-dark/40",
    classname
  );
  if (href) {
    return (
      <Link to={href} onClick={onclick}>
        <button className={classes}>
          {/* Left Icon */}
          {iconLeft}
          <Text as='span' classname='text-base'>
            {children}
          </Text>
          {/* Right Icon */}
          {iconRight}
        </button>
      </Link>
    );
  }
  return (
    <button
      type={buttonType}
      className={classes}
      onClick={!disabled ? onclick : null}
    >
      {/* Left Icon */}
      {!isLoading && iconLeft}
      {!isLoading && (
        <Text as='span' classname='text-base'>
          {children}
        </Text>
      )}
      {/* Right Icon */}
      {!isLoading && iconRight}

      {/* Loading Spinner */}
      {!disabled && isLoading && (
        <div>
          <img
            src='/assets/icons/loader.gif'
            alt='loading-spinner'
            className='h-[40px]'
          />
        </div>
      )}
    </button>
  );
}
