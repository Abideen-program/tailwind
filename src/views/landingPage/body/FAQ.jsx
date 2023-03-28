import { useState } from "react";
import { clx } from "../../../utils/clx";
import Text from "../../../components/text";
const Faq = () => {
  const classes = clx("p-10 md:p-20 md:flex flex-row");

  const [faqOne, setfaqOne] = useState(false);
  const [faqTwo, setfaqTwo] = useState(false);

  const showFaqOne = () => {
    setfaqOne(!faqOne);
    setfaqTwo(false);
  };

  const showFaqTwo = () => {
    setfaqTwo(!faqTwo);
    setfaqOne(false);
  };

  return (
    <div className={classes}>
      <div className="md:w-[45%]">
        <Text
          as="h1"
          classname="mb-4 text-center md:text-left md:mb-0 text-[20px] md:text-[28px] lg:text-[45px] font-semibold"
        >
          Frequently Asked Questions
        </Text>
      </div>

      <div className="md:w-[45%] space-y-4">
        <div className="flex flex-col space-y-2">
          <div className="flex flex-row justify-between">
            <Text as="p" classname="font-semibold">
              Lorem ipsum dolor
            </Text>
            <Text
              as="span"
              classname="font-semibold text-xl cursor-pointer"
              onclick={showFaqOne}
            >
              {faqOne ? "-" : "+"}
            </Text>
          </div>
          {/* show faq when faqone is true */}
          {faqOne && (
            <Text as="p" classname="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              expedita eos eligendi reprehenderit sint iste sequi
            </Text>
          )}
        </div>

        <div className="flex flex-col space-y-2">
          <div className="flex flex-row justify-between">
            <Text as="p" classname="font-semibold">
              Lorem ipsum dolor
            </Text>
            <Text
              as="span"
              classname="font-semibold text-xl cursor-pointer"
              onclick={showFaqTwo}
            >
              {faqTwo ? "-" : "+"}
            </Text>
          </div>
          {/* show faq two when faqtwo is true */}
          {faqTwo && (
            <Text as="p" classname="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              expedita eos eligendi reprehenderit sint iste sequi
            </Text>
          )}
        </div>
      </div>
    </div>
  );
};

export default Faq;
