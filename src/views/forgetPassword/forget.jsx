import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { clx } from "../../utils/clx";
import Text from "../../components/text";
import LoginSmallScreen from "../Login/loginSmallHeader";
import Button from "../../components/button/button";
import Input from "../../components/input/input";

const Forget = () => {
  const classes = clx(
    "h-[calc(100vh_-_80px)] flex flex-col justify-center items-center px-4 lg:px-0"
  );

  const [validationAttempt, setValidationAttempt] = React.useState(false);

  const initialValues = {
    meter: "",
  };

  const onSubmit = (values, actions) => {
    console.log(values);
    const timer = setTimeout(() => {
      actions.resetForm();
      clearTimeout(timer);
    }, 1000);
  };

  const validationSchema = Yup.object().shape({
    meter: Yup.string("Meter Number must be a range of numbers")
      .min(11)
      //   .positive()
      //   .integer()
      .required("Please enter your meter number"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnBlur: false,
    validateOnChange: validationAttempt,
  });

  return (
    <div className={classes}>
      <LoginSmallScreen />
      <div className="w-full flex flex-col space-y-6 items-center">
        <div className="flex flex-col">
          <Text
            as="h1"
            classname="text-[30px] md:text-[64px] font-semibold text-primary-dark text-center"
          >
            Forget Password ?
          </Text>
          <Text
            as="h4"
            classname="text-base md:text-[20px] text-primary-dark text-center"
          >
            Enter your meter number, we will send an OTP to your email
          </Text>
        </div>

        <form
          onSubmit={formik.handleSubmit}
          className="bg-[#F8F8FF] lg:border-[1px] rounded-lg pt-[70px] pb-[50px] w-full lg:w-[600px] px-4 md:px-[50px]"
        >
          <div className="flex flex-col space-y-6">
            <Input
              name="meter"
              type="number"
              placeholder="Meter Number"
              leftIcon={
                <img src="/assets/icons/meter-id-icon.png" alt="meter icon" />
              }
              onblur={formik.handleBlur}
              onchange={formik.handleChange}
              value={formik.values.meter}
              errorMassage={formik.errors.meter}
            />
            <Button
              onclick={() => setValidationAttempt(true)}
              classname="w-full"
            >
              Submit
            </Button>
          </div>
        </form>

        <Button href="..">Back</Button>
      </div>
    </div>
  );
};

export default Forget;
