import TrustedPartner from "./body/Trusted";
import Body from "./body/body";
import GinjarFeatures from "./body/ginjarFeatures";
import SecondBody from "./body/secondBody";
import Header from "./header/header";

const LandingPage = () => {
  return (
    <>
      <Header />
      <Body />
      <SecondBody />
      <GinjarFeatures />
      <TrustedPartner />
    </>
  );
};

export default LandingPage;
