import React from "react";
import { clx } from "../../../utils/clx";
import Text from "../../../components/text";
import Button from "../../../components/button/button";
import { FaOutdent, FaTimes } from "react-icons/fa";

const Header = () => {
  const classes = clx(
    "flex flex-row justify-between items-center py-6 px-10 lg:px-20 bg-white h-20"
  );

  //state to toggle the navbar
  const [openNav, setOpenNav] = React.useState(false);

  //show nav bar on mobile
  const showNav = () => {
    setOpenNav(true);
  };

  //hide nav bar on mobile
  const hideNav = () => {
    setOpenNav(false);
  };

  return (
    <div className={classes}>
      <div className="md:basis-[20%]">
        <img src="assets/images/logo.png" alt="" />
      </div>

      {/* desktop view */}
      <ul className="hidden lg:flex basis-[80%] justify-between items-center flex-row space-x-6  ">
        <li>
          <Text as="p">Home</Text>
        </li>

        <li>
          <Text as="p">Services</Text>
        </li>

        <li>
          <Text as="p">About Us</Text>
        </li>

        <li>
          <Text as="p">Contact</Text>
        </li>

        <li>
          <Text as="p">Anonymous Recharge</Text>
        </li>
        <li>
          <div className="flex flex-row">
            <Button
              type="primary"
              size="small"
              variant="outlined"
              classname="mr-2"
            >
              Sign In
            </Button>
            <Button type="primary" size="small" variant="outlined" classname="">
              Sign Up
            </Button>
          </div>
        </li>
      </ul>
      {/* End of desktop view */}

      {/* Start of mobile view */}
      {openNav && (
        <ul className="lg:hidden md:w-[30rem] h-screen flex flex-col justify-evenly items-start fixed right-0 top-0 bg-white pt-8 pl-6 z-10 shadow-lg shadow-slate-700 transition ease-in duration-1000">
          <li>
            <Text as="p" classname="text-xl md:text-3xl">
              Home
            </Text>
          </li>

          <li>
            <Text as="p" classname="text-xl md:text-3xl">
              Services
            </Text>
          </li>

          <li>
            <Text as="p" classname="text-xl md:text-3xl">
              About Us
            </Text>
          </li>

          <li>
            <Text as="p" classname="text-xl md:text-3xl">
              Contact
            </Text>
          </li>

          <li>
            <Text as="p" classname="text-xl md:text-3xl">
              Anonymous Recharge
            </Text>
          </li>
          <li>
            <div className="flex flex-row">
              <Button
                type="primary"
                size="small"
                variant="outlined"
                classname="mr-1"
              >
                Sign In
              </Button>
              <Button
                type="primary"
                size="small"
                variant="outlined"
                classname=""
              >
                Sign Up
              </Button>
            </div>
          </li>
          <li className="absolute top-12 cursor-pointer">
            <FaTimes className="text-3xl" onClick={hideNav} />
          </li>
        </ul>
      )}
      {/* End of mobile view */}
      <div className="text-3xl lg:hidden cursor-pointer">
        <FaOutdent onClick={showNav} />
      </div>
    </div>
  );
};

export default Header;
