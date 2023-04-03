import { clx } from "../../utils/clx";
import Text from "../../components/text";

const SignUpInfo = () => {
  const classes = clx(
    "bg-secondary-light my-[40px] rounded-[8px] md:w-[97%] flex flex-col p-6 px-8 space-y-3 lg:space-y-0"
  );
  return (
    <div className={classes}>
      <div className="grid grid-cols-2 lg:flex items-start lg:space-x-[40px] justify-between gap-y-3 lg:gap-y-0">
        <div className="flex flex-col space-y-1">
          <Text as="p" classname="text-[14px] lg:text-base text-primary-dark">
            Meter Number
          </Text>
          <Text
            as="span"
            classname="text-[14px] lg:text-base bg-primary-dark text-white rounded-[4px] w-fit p-1 px-4"
          >
            5232464252
          </Text>
        </div>

        <div className="flex flex-col space-y-1 place-self-end">
          <Text as="p" classname="text-[14px] lg:text-base text-primary-dark">
            Company
          </Text>
          <Text
            as="span"
            classname="text-[14px] lg:text-base bg-secondary-dark text-primary-dark rounded-[4px] w-fit p-1 px-4"
          >
            Ginjar RMP
          </Text>
        </div>

        <div className="hidden lg:flex flex-col space-y-1">
          <Text as="p" classname="text-[14px] lg:text-base text-primary-dark">
            Apartment
          </Text>
          <Text
            as="span"
            classname="text-[14px] lg:text-base bg-primary-dark text-white rounded-[4px] w-full p-1 px-4"
          >
            Seventh Appartment
          </Text>
        </div>
      </div>
      <div className="flex lg:hidden flex-col space-y-1">
        <Text as="p" classname="text-[14px] lg:text-base text-primary-dark">
          Apartment
        </Text>
        <Text
          as="span"
          classname="text-[14px] lg:text-base bg-primary-dark text-white rounded-[4px] w-full p-1 px-4"
        >
          Seventh Appartment
        </Text>
      </div>
    </div>
  );
};

export default SignUpInfo;
