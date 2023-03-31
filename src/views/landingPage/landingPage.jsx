import Faq from "./body/FAQ";
import TrustedPartner from "./body/Trusted";
import Body from "./body/body";
import Footer from "./body/footer";
import GinjarFeatures from "./body/ginjarFeatures";
import SecondBody from "./body/secondBody";
// import Header from "./header/header";

const LandingPage = () => {
  return (
    <>
      <Body />
      <SecondBody />
      <GinjarFeatures />
      <TrustedPartner />
      <Faq />
      <Footer />
    </>
  );
};

export default LandingPage;
