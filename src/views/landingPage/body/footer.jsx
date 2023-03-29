import { clx } from "../../../utils/clx";
import Text from "../../../components/text";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const classes = clx(
    "p-10 md:p-20 bg-[#010623] text-white md:flex flex-col space-y-4 md:flex-row justify-around items-center"
  );
  return (
    <div className={classes}>
      <div className="flex flex-col md:w-[33%] space-y-4">
        <div className="w-[110px]">
          <img
            src="assets/images/logo.png"
            alt="logo"
            className="grayscale bg-white w-full"
          />
        </div>
        <Text as="p" classname="text-xs lg:w-[60%]">
          A solution where actual consumption rate of asset monitory is at your
          finger- tips in easy and efficient ways.
        </Text>

        <div className="flex flex-row space-x-4">
          <FaTwitter />
          <FaFacebook />
          <FaInstagram />
          <FaLinkedin />
        </div>
      </div>

      <div className="flex flex-col md:w-[30%] space-y-4 md:px-20">
        <Text as="h6" classname='font-semibold'>Company</Text>
        <Text as="p" classname='text-xs'>Service</Text>
        <Text as="p" classname='text-xs'>About Us</Text>
        <Text as="p" classname='text-xs'>FAQs</Text>
      </div>

      <div className="flex flex-col md:w-[30%] space-y-4">
      <Text as="h6" classname='font-semibold'>Contact</Text>
        <Text as="p" classname='text-xs lg:w-[40%]'>
          12 Seidu Ajibowu street off Toyin street, Opposite Adeson Hotel,
          Ikeja, Lagos.
        </Text>
        <Text as="p" classname='text-xs'>@Ginjar</Text>
      </div>
    </div>
  );
};

export default Footer;
