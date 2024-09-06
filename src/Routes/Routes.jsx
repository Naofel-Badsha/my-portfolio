import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import AboutMe from "../Pages/AboutMe/AboutMe";
import ContactMe from "../Pages/ContactMe/ContactMe";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/About",
        element: <AboutMe></AboutMe>,
      },
      {
        path: "/contactMe",
        element: <ContactMe></ContactMe>,
      },

    ],
  },
]);
export default router;
