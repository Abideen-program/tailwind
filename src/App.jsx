import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./views/landingPage/landingPage";
import Header from "./views/landingPage/header/header";
import SignUp from "./views/SignUp/signup";
import Login from "./views/Login/login";
import Forget from "./views/forgetPassword/forget";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header />,
      children: [
        { index: true, element: <LandingPage /> },
        { path: "login", element: <Login /> },
        { path: "signup", element: <SignUp /> },
        { path: "login/forget", element: <Forget /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
