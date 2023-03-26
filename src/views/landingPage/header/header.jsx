import { clx } from "../../../utils/clx";
import Text from "../../../components/text";
import Button from "../../../components/button/button";

const Header = () => {
  const classes = clx(
    "flex flex-row justify-between items-center py-6 px-20 bg-white h-20"
  );
  return (
    <div className={classes}>
      <div>
        <img src="assets/images/logo.png" alt="" />
      </div>

      <nav>
        <ul className="flex flex-row space-x-8  ">
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
        </ul>
      </nav>

      <div className="flex flex-row">
        <Button type="primary" size="small" variant="outlined" classname="mr-2">
          Sign In
        </Button>
        <Button type="primary" size="small" variant="outlined" classname="">
          Sign Up
        </Button>
      </div>
    </div>
  );
};

export default Header;
