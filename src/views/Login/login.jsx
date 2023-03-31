import { clx } from "../../utils/clx";
import Text from "../../components/text";
import Input from "../../components/input/input";
import { FaEnvelope, FaLock } from "react-icons/fa";
import Button from "../../components/button/button";
import LoginSmallScreen from "./loginSmallHeader";

const Login = () => {
  const classes = clx(
    "px-0 lg:px-10 lg:h-[calc(100vh_-_150px)] lg:flex justify-between items-center space-y-6"
  );
  return (
    <div className="relative flex flex-col px-10 space-y-6">
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

        <form className="bg-[#F8F8FF] rounded-lg py-[70px] px-10 md:px-[50px] flex-[0.8] z-50">
          <div className="flex flex-col space-y-6">
            <Input
              name="email"
              type="email"
              placeholder="Email Address"
              value=""
              leftIcon={<FaEnvelope className="text-[#9799A5]" />}
            />

            <Input
              name="password"
              type="password"
              placeholder="Password"
              value=""
              leftIcon={<FaLock className="text-[#9799A5]" />}
            />

            <Text
              as="h4"
              href="login"
              classname="text-secondary-dark text-[14px] lg:text-base text-right"
            >
              Forgot Password
            </Text>

            <Button buttonType="submit">Sign in</Button>

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
