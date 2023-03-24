import { clx } from "./utils/clx";
import Header from "./views/landingPage/header/header";
import LandingPage from "./views/landingPage/landingPage";
// import "./output.css";
function App() {
  const classes = clx("bg-red-500 text-white font-bold");
  return (
    <div className={classes}>
      <Header />
      <LandingPage />
    </div>
  );
}

export default App;
