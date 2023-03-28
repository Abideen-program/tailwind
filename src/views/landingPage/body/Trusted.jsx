import { clx } from "../../../utils/clx";
import Text from "../../../components/text";

const TrustedPartner = () => {
  const classes = clx("bg-[#F4F4F8] p-10 md:p-20 flex flex-col space-y-10");

  return (
    <div className={classes}>
      <Text as="h1" classname="text-[30px] text-center font-semibold md:text-5xl">
        Trusted Partners
      </Text>

      <div className="grid grid-cols-2 gap-x-10 gap md:grid md:grid-cols-4 gap-y-4 lg:flex lg:flex-row  lg:justify-around lg:items-center lg:flex-wrap p-5">
        <div className="w-20 h-auto">
          <img
            src="assets/images/stanbic.png"
            alt="stanbic" 
            className="grayscale w-full h-auto"
          />
        </div>

        <div className="w-16 h-auto">
          <img
            src="assets/images/energy-first.png"
            alt="energy-first"
            className="grayscale w-full h-auto"
          />
        </div>

        <div className="w-14">
          <img
            src="assets/images/mtn.png"
            alt=""
            className="grayscale w-full h-auto"
          />
        </div>

        <div className="w-14">
          <img
            src="assets/images/pearl.png"
            alt=""
            className="grayscale w-full h-auto"
          />
        </div>

        <div className="w-20">
          <img
            src="assets/images/ifitness.png"
            alt=""
            className="grayscale w-full h-auto"
          />
        </div>

        <div className="w-20">
          <img
            src="assets/images/Landwey.png"
            alt=""
            className="grayscale w-full h-auto"
          />
        </div>

        <div className="w-20">
          <img
            src="assets/images/promasidor.png"
            alt=""
            className="grayscale w-full h-auto"
          />
        </div>

        <div className="w-20">
          <img
            src="assets/images/maxmigold.png"
            alt=""
            className="grayscale w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default TrustedPartner;
