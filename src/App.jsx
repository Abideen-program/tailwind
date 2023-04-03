import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./views/landingPage/landingPage";
import Header from "./views/landingPage/header/header";
import SignUp from "./views/SignUp/signup";
import Login from "./views/Login/login";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header />,
      children: [
        { index: true, element: <LandingPage /> },
        { path: "login", element: <Login /> },
        { path: "signup", element: <SignUp /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
