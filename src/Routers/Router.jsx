import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layouts/Dashboard";
import Home from "../Pages/Home/Home";
import MainLayout from "../Layouts/MainLayout";
import About from "../Pages/About/About";
import ContactSection from "../Pages/ContactSection/ContactSection";
import PrivacyPolicy from "../Pages/PrivacyPolicy/PrivacyPolicy";
import TermsConditions from "../Pages/TermsConditions/TermsConditions";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <h1>404</h1>,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <ContactSection />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/terms-conditions",
        element: <TermsConditions />,
      },
    ],
  },
  {
    path: "/login",
    element: <h1>Login</h1>,
  },
  {
    path: "/register",
    element: <h1>Register</h1>,
  },
]);
