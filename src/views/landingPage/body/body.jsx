import { clx } from "../../../utils/clx";
import Text from "../../../components/text";
import Button from "../../../components/button/button";

const Body = () => {
  const classes = clx(
    "lg:flex justify-between items-center px-10 md:px-20 bg-tertiary py-[78px] relative lg:h-[calc(100vh_-_80px)] bg-[#F8F8F8]"
  );

  return (
    <div className={classes}>
      <div className="text-center lg:text-left lg:flex-1 flex flex-col space-y-4">
        <div className="">
          <Text
            as="h1"
            classname="text-[35px] md:text-[50px] lg:text-[64px] font-semibold md:leading-[90px]"
          >
            Asset monitoring at your finger-tips
          </Text>
        </div>

        <div className="">
          <Text as="p" classname="text-xl font-normal leading-[27px]">
            With Ginjar, monitoring your assest remotely is made easy and also
            supported by variety of interesting features.
          </Text>
        </div>

        <div className="flex flex-row justify-center space-x-4 lg:justify-start">
          <Button
            type="primary"
            size="small"
            variant="outlined"
            // classname="mr-2"
          >
            Request Demo
          </Button>
          <Button  size="medium" variant="contained">
            Sign Up
          </Button>
        </div>
      </div>

      <div className="lg:flex-1 hidden lg:block relative top-[20px] right-0">
        <div className="flex flex-row space-x-4 justify-center mb-[45.48px]">
          <img
            src="assets/images/app-store.webp"
            alt=""
            className="w-auto h-[38.5px]"
          />
          <img
            src="assets/images/play-store.webp"
            alt=""
            className="w-auto h-[38.5px]"
          />
        </div>

        <div className="w-full h-full flex justify-center">
          <img src="assets/images/hero-img.png" className="w-[63%]" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Body;
