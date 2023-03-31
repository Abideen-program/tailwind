const LoginSmallScreen = () => {
  return (
    <>
      <div className="lg:hidden">
        <div className="my-[40px]">
          <img
            src="assets/images/logo2.png"
            alt="logo"
            className="w-[250px] mx-auto"
          />
        </div>
        <div className="border-[1px] border-secondary-dark w-full rounded-[12px] bg-[#D9D9D9] overflow-hidden">
          <img
            src="assets/images/login-banner.png"
            alt="logo"
            className="w-[100%] object-fill"
          />
        </div>
      </div>
    </>
  );
};

export default LoginSmallScreen