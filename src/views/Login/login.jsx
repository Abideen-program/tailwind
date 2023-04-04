import { useState } from "react";
import { clx } from "../../utils/clx";
import Text from "../../components/text";
import Input from "../../components/input/input";
import { FaEnvelope, FaLock } from "react-icons/fa";
import Button from "../../components/button/button";
import LoginSmallScreen from "./loginSmallHeader";
import { useFormik } from "formik";
import * as Yup from "yup";

const Login = () => {
  const classes = clx(
    "px-0 lg:px-10 lg:h-[calc(100vh_-_150px)] lg:flex justify-between items-center space-y-6"
  );

  //handling validation after submission
  const [validationAttempt, setValidationAttempt] = useState(false);

  //initial values of the form
  const initialValues = {
    email: "",
    password: "",
  };

  //handling submission of form
  const onSubmit = (values, actions) => {
    console.log(values);
    setTimeout(()=> {
     actions.resetForm() 
    }, 2000)
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("enter a valid email")
      .required("Please enter your email address"),
    password: Yup.string().required("Please enter your password"),
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
      <LoginSmallScreen />
      <img
        src="assets/images/spiral-background.jpg"
        className="absolute inset-0 object-cover lg:object-fill w-full h-full opacity-[1.5%] lg:opacity-[2%]"
        alt="spiral background"
      />

      <div className={classes}>
        <div className="flex flex-col flex-1 z-50">
          <Text as="h1" classname="text-[30px] md:text-[64px] font-semibold">
            Welcome Back!
          </Text>

          <Text as="h4" classname="md:text-[24px]">
            Sign into your account
          </Text>
        </div>

        <form
          onSubmit={formik.handleSubmit}
          className="bg-[#F8F8FF] rounded-lg pt-[70px] pb-[50px] px-4 md:px-[50px] flex-[0.8] z-50"
        >
          <div className="flex flex-col space-y-6">
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
              name="password"
              type="password"
              placeholder="Password"
              leftIcon={<FaLock className="text-[#9799A5]" />}
              onblur={formik.handleBlur}
              onchange={formik.handleChange}
              value={formik.values.password}
              errorMassage={formik.errors.password}
            />

            <Text
              as="h4"
              href="forget"
              classname="text-secondary-dark text-[14px] lg:text-base text-right"
            >
              Forgot Password
            </Text>

            <Button
              buttonType="submit"
              onclick={() => setValidationAttempt(true)}
            >
              Sign in
            </Button>

            <Text
              as="p"
              classname="text-center text-[14px] lg:text-base"
              href="/signup"
            >
              <span className="text-[#6C6F7F]">New User?</span> Create an
              Account
            </Text>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
