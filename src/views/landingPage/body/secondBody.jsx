import { clx } from "../../../utils/clx";
import Text from "../../../components/text";

const SecondBody = () => {
  const classes = clx(
    "bg-[#E6E9FB] h-full py-[100px] px-4  md:px-20"
  );

  return (
    <div className={classes}>
      <div className="text-center">
        <Text as="h1" classname="text-[30px] md:text-[50px] text-[#010623] mb-4">
          Our monitoring IOT Solutions
        </Text>

        <Text as="p" classname="font-normal text-xl mb-12">
          We provide specialized solutions across the entire IoT development
          cycle ranging from
        </Text>
      </div>

      <div className="grid grid-flow-row md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl py-[40px] pl-10 pr-[80px] relative h-[280px] hover:shadow-xl transition ease-in duration-1000">
          <Text as="h3" classname="font-bold text-xl">
            Energy
          </Text>

          <Text as="p" classname="my-3 text-xs text-left">
            Be in complete control of your residential, commercial and
            industrial buildings electricity
          </Text>

          <img
            src="assets/images/energy-card-img.png"
            className="w-auto h-[120px] absolute bottom-0 right-[60px]"
            alt=""
          />
        </div>

        <div className="bg-white rounded-xl py-[40px] pl-10 pr-[80px] relative h-[280px] hover:shadow-md transition ease-in duration-1000">
          <Text as="h3" classname="font-bold text-xl">
            Water metering
          </Text>

          <Text as="p" classname="my-3 text-xs text-left">
            Ginjar helps control and measure the water usage in your estates and
            buildings.
          </Text>

          <img
            src="assets/images/water-card-img.png"
            className="w-auto h-[120px] absolute bottom-0 right-[60px]"
            alt=""
          />
        </div>

        <div className="bg-white rounded-xl py-[40px] pl-10 pr-[80px] relative h-[280px] hover:shadow-xl transition ease-in duration-1000">
          <Text as="h3" classname="font-bold text-xl">
            Diesel generator
          </Text>

          <Text as="p" classname="my-3 text-xs text-left">
            It is used for industrial and residential power generators, which
            are used as main, reserve, or auxiliary energy source
          </Text>

          <img
            src="assets/images/diesel-card-img.png"
            className="w-auto h-[120px] absolute bottom-0 right-[60px]"
            alt=""
          />
        </div>

        <div className="bg-white rounded-xl py-[40px] pl-10 pr-[80px] relative h-[280px] hover:shadow-xl transition ease-in duration-1000">
          <Text as="h3" classname="font-bold text-xl">
            Diesel tank
          </Text>

          <Text as="p" classname="my-3 text-xs text-left">
            Our fuel monitoring solution was created specifically for your daily
            fuel requirements, keep track of your consumption and maximize
            asset.
          </Text>

          <img
            src="assets/images/diesel-tank-img.png"
            className="w-auto h-[110px] absolute bottom-0 right-[60px]"
            alt=""
          />
        </div>

        <div className="bg-white rounded-xl py-[40px] pl-10 pr-[80px] relative h-[280px] hover:shadow-xl transition ease-in duration-1000">
          <Text as="h3" classname="font-bold text-xl">
            Industrial internet of things:
          </Text>

          <Text as="p" classname="my-3 text-xs text-left">
            This functionality allows you to monitor real-time machine status.
          </Text>

          <img
            src="assets/images/iot-card-img.png"
            className="w-auto h-[120px] absolute bottom-0 right-[60px]"
            alt=""
          />
        </div>

        <div className="bg-white rounded-xl py-[40px] pl-10 pr-[80px] relative h-[280px] hover:shadow-xl transition ease-in duration-1000">
          <Text as="h3" classname="font-bold text-xl">
            Fleet management
          </Text>

          <Text as="p" classname="my-3 text-xs text-left">
            Ginjar allows companies to organize and coordinate the movement of
            vehicles.
          </Text>

          <img
            src="assets/images/fleet-management-img.png"
            className="w-auto h-[120px] absolute bottom-0 right-[60px]"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default SecondBody;
