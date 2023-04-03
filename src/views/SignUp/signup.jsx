import { useState } from "react";
import { clx } from "../../utils/clx";
import Text from "../../components/text";
import Input from "../../components/input/input";
import { FaEnvelope, FaLock, FaUserAlt, FaPhoneAlt } from "react-icons/fa";
import Button from "../../components/button/button";
// import LoginSmallScreen from "./loginSmallHeader";
import { useFormik } from "formik";
import * as Yup from "yup";

const SignUp = () => {
  const classes = clx(
    "px-0 lg:px-10 lg:flex justify-between items-center space-y-6 pb-[30px]"
  );

  //handling validation after submission
  const [validationAttempt, setValidationAttempt] = useState(false);

  //initial values of the form
  const initialValues = {
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  };

  //handling submission of form
  const onSubmit = (values, actions) => {
    console.log(values);
    setTimeout(() => {
      actions.resetForm();
    }, 2000);
  };

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Please enter your full name"),

    email: Yup.string()
      .email("enter a valid email")
      .required("Please enter your email address"),

    phoneNumber: Yup.number()
      .positive()
      .integer()
      .required("Please enter your phone number"),

    password: Yup.string()
      .min(8)
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/, {
        message:
          "Must Contain One Uppercase, One Lowercase, One Number and One Special Case Character",
      })
      .required("Enter your password"),

    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match")
      .required("Confirm your password"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnBlur: false,
    validateOnChange: validationAttempt,
  });

  return (
    <div className="relative flex flex-col px-4 md:px-10 space-y-6">
      {/* <LoginSmallScreen /> */}
      <img
        src="assets/images/spiral-background.jpg"
        className="absolute inset-0 object-cover lg:object-fill w-full h-full opacity-[1.5%] lg:opacity-[2%]"
        alt="spiral background"
      />

      <div className={classes}>
        <div className="flex flex-col flex-1 z-50">
          <Text as="h1" classname="text-[30px] md:text-[64px] font-semibold">
            Let's get started!
          </Text>

          <Text as="h4" classname="md:text-[24px] text-primary-dark">
            One click away to enjoy our amazing features
          </Text>
        </div>

        <form
          onSubmit={formik.handleSubmit}
          className="bg-[#F8F8FF] rounded-lg pt-[70px] pb-[50px] px-4 md:px-[50px] flex-[0.8] z-50"
        >
          <div className="flex flex-col space-y-6">
            <Input
              name="fullName"
              type="text"
              placeholder="Full Name"
              leftIcon={<FaUserAlt className="text-[#9799A5]" />}
              onblur={formik.handleBlur}
              onchange={formik.handleChange}
              value={formik.values.fullName}
              errorMassage={formik.errors.fullName}
            />

            <Input
              name="email"
              type="email"
              placeholder="Email Address"
              leftIcon={<FaEnvelope className="text-[#9799A5]" />}
              onblur={formik.handleBlur}
              onchange={formik.handleChange}
              value={formik.values.email}
              errorMassage={formik.errors.email}
            />

            <Input
              name="phoneNumber"
              type="tel"
              placeholder="Phone Number"
              leftIcon={<FaPhoneAlt className="text-[#9799A5]" />}
              onblur={formik.handleBlur}
              onchange={formik.handleChange}
              value={formik.values.phoneNumber}
              errorMassage={formik.errors.phoneNumber}
            />

            <Input
              name="password"
              type="password"
              placeholder="Password"
              leftIcon={<FaLock className="text-[#9799A5]" />}
              onblur={formik.handleBlur}
              onchange={formik.handleChange}
              value={formik.values.password}
              errorMassage={formik.errors.password}
            />

            <Input
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              leftIcon={<FaLock className="text-[#9799A5]"/>}
              onblur={formik.handleBlur}
              onchange={formik.handleChange}
              value={formik.values.confirmPassword}
              errorMassage={formik.errors.confirmPassword}
            />

            <Button
              buttonType="submit"
              onclick={() => setValidationAttempt(true)}
            >
              Sign up
            </Button>

            <Text
              as="p"
              classname="text-center text-[14px] lg:text-base"
              href="/login"
            >
              Already have an account?
              <span className="text-secondary-dark"> Login</span>
            </Text>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
