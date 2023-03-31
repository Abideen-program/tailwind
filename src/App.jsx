import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { clx } from "./utils/clx";
import LandingPage from "./views/landingPage/landingPage";
import Header from "./views/landingPage/header/header";
import SignUp from "./views/SignUp/signup";
import Login from "./views/Login/login";
// import Input from "./components/input/input";
// import "./output.css";
function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Header />, children: [
      {index: true, element: <LandingPage />},
      {path: 'login', element: <Login />}
    ] },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
