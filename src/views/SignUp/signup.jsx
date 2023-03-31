import React from "react";
import Input from "../../components/input/input";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaEnvelope, FaUser, FaLock } from "react-icons/fa";
import { clx } from "../../utils/clx";
import Button from "../../components/button/button";

const SignUp = () => {
  const [validationAttempt, setValidationAttempt] = React.useState(false);

  const formValue = {
    email: "",
    age: "",
    password: "",
    confirmPassword: "",
  };

  const onSubmit = () => {
    console.log("submitting");
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Enter a valid email")
      .required("Please enter your email address"),

    age: Yup.number().positive().integer().required("Please enter your age"),

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
    initialValues: formValue,
    onSubmit,
    validationSchema,
    validateOnChange: validationAttempt,
    validateOnBlur: false,
  });

  console.log(formik);

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="flex flex-col space-y-6 p-20">
        <Input
          type="email"
          label="Email"
          name="email"
          placeholder="Enter your email address"
          leftIcon={<FaEnvelope className="text-[#9799A5]" />}
          value={formik.values.email}
          onchange={formik.handleChange}
          onblur={formik.handleBlur}
          errorMassage={formik.errors.email}
        />

        <Input
          type="number"
          label="Age"
          name="age"
          placeholder="Enter your age"
          leftIcon={<FaUser className="text-[#9799A5]" />}
          value={formik.values.age}
          onblur={formik.handleBlur}
          onchange={formik.handleChange}
          errorMassage={formik.errors.age}
        />

        <Input
          type="password"
          label="Password"
          name="password"
          placeholder="Enter your password"
          leftIcon={<FaLock className="text-[#9799A5]" />}
          value={formik.values.password}
          onblur={formik.handleBlur}
          onchange={formik.handleChange}
          errorMassage={formik.errors.password}
        />

        <Input
          type="password"
          label="Confirm Password"
          name="confirmPassword"
          placeholder="Confirm your password"
          leftIcon={<FaLock className="text-[#9799A5]" />}
          value={formik.values.confirmPassword}
          onblur={formik.handleBlur}
          onchange={formik.handleChange}
          errorMassage={formik.errors.confirmPassword}
        />

        <Button
          buttonType="submit"
          classname="w-full text-[14px] lg:text-base "
          onclick={() => setValidationAttempt(true)}
        >
          Sign in
        </Button>
      </div>
    </form>
  );
};

export default SignUp;
