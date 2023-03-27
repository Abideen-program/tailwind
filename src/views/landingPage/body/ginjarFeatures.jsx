import { clx } from "../../../utils/clx";
import Text from "../../../components/text";

const GinjarFeatures = () => {
  const classes = clx("bg-white p-10 md:p-20 lg:flex flex-row");

  return (
    <div className={classes}>
      <div className="h-full basis-[40%]">
        <img
          src="assets/images/pattern.png"
          alt="pattern"
          className="mx-auto w-[70%] lg:mx-0 lg:w-[90%] h-auto"
        />
      </div>

      <div className="flex flex-col space-y-1 flex-1 pt-10">
        <Text
          as="h1"
          classname="text-[30px] md:text-[50px] font-bold text-center lg:text-left"
        >
          Ginjar Features
        </Text>
        <Text as="p" classname="text-sm text-center lg:text-left">
          Without effort, save a lot of time with one click
        </Text>

        <div className="md:grid grid-cols-2 gap-x-5 lg:gap-x-8 gap-y-5">
          <div className=" p-8 flex flex-row space-x-3 ">
            <div>
              <img src="assets/icons/features-icon.png" alt="" />
            </div>

            <div>
              <Text as="h3" classname="font-semibold text-[18px]">
                Cost saving
              </Text>
              <Text as="p" classname="text-[14px]">
                Lorem ipsum dolor sit amet, no vide quodsi evertitur has. Pro
                etiam virtute dolores et.
              </Text>
            </div>
          </div>

          <div className=" p-8 flex flex-row space-x-3 ">
            <div>
              <img src="assets/icons/features-icon.png" alt="" />
            </div>

            <div>
              <Text as="h3" classname="font-semibold text-[18px]">
                Productivity enhancement
              </Text>
              <Text as="p" classname="text-[14px]">
                Lorem ipsum dolor sit amet, no vide quodsi evertitur has. Pro
                etiam virtute dolores et.
              </Text>
            </div>
          </div>

          <div className=" p-8 flex flex-row space-x-3 ">
            <div>
              <img src="assets/icons/features-icon.png" alt="" />
            </div>

            <div>
              <Text as="h3" classname="font-semibold text-[18px]">
                Safer work
              </Text>
              <Text as="p" classname="text-[14px]">
                Lorem ipsum dolor sit amet, no vide quodsi evertitur has. Pro
                etiam virtute dolores et.
              </Text>
            </div>
          </div>

          <div className=" p-8 flex flex-row space-x-3 ">
            <div>
              <img src="assets/icons/features-icon.png" alt="" />
            </div>

            <div>
              <Text as="h3" classname="font-semibold text-[18px]">
                Environmental and efficiency improvement
              </Text>
              <Text as="p" classname="text-[14px]">
                Lorem ipsum dolor sit amet, no vide quodsi evertitur has. Pro
                etiam virtute dolores et.
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GinjarFeatures;
