import { useState } from "react";
import { clx } from "../../utils/clx";
import Text from "../text";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Input = ({
  type = 'text',
  label,
  leftIcon,
  rightIcon,
  name,
  onchange,
  onblur,
  onfocus,
  value,
  defaultvalue,
  placeholder,
  errorMassage,
  inputClass,
  disabled,
  borderColor,
  variant = "primary",
}) => {
  const classes = clx("flex flex-col space-y-2");

  const inputClasses = clx(
    `flex items-center select-none space-x-3 border-${borderColor} rounded-[8px] py-[15px] px-[20px]`,
    variant === "primary" && "bg-[#E6E6E9] dark:bg-[#1B1D26]",
    variant === "secondary" && "bg-secondary-dark",
    variant === "outlined" && "bg-transparent border-[2px]  border-gray-400",
    inputClass
  );

  const [isPasswordVisible, setPasswordVisible] = useState(false);

  return (
    <div className={classes}>
      {label && (
        <label htmlFor={name}>
          <Text as="span" weight="medium" classname="text-[15px] lg:text-base">
            {label}
          </Text>
        </label>
      )}

      <div className={inputClasses}>
        {/* Left Icon */}
       <div>{leftIcon}</div>

        <input
          type={type === "password" && isPasswordVisible ? "text" : type}
          name={name}
          id={name}
          value={value}
          defaultValue={defaultvalue}
          onChange={onchange}
          onBlur={onblur}
          onFocus={onfocus}
          placeholder={placeholder}
          disabled={disabled}
          className={` flex-1 font-gantari font-[500] outline-none select-none placeholder:select-none placeholder:text-[14px] lg:placeholder:text-base bg-transparent ${
            variant === "secondary" && "placeholder-white"
          } dark:text-[#e6e6e9]`}
        />

        {/* right icon */}
        {type === "password" ? (
          isPasswordVisible ? (
            <AiOutlineEye
              className="text-[#9799A5] hover:text-[#8280A5] text-[20px] cursor-pointer"
              onClick={() => setPasswordVisible((state) => !state)}
            />
          ) : (
            <AiOutlineEyeInvisible
              className="text-[#9799A5] hover:text-[#8280A5] text-[20px] cursor-pointer"
              onClick={() => setPasswordVisible((state) => !state)}
            />
          )
        ) : (
          <div>{rightIcon}</div>
        )}
      </div>

      {/* errormassage */}

      {errorMassage && (
        <Text
          as="span"
          weight="medium"
          classname="text-[15px] lg:text-base text-red-600"
        >
          {errorMassage}
        </Text>
      )}
    </div>
  );
};

export default Input;
