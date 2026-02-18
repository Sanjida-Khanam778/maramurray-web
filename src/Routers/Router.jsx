import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layouts/Dashboard";
import Home from "../Pages/Home/Home";
import MainLayout from "../Layouts/MainLayout";
import About from "../Pages/About/About";
import ContactSection from "../Pages/ContactSection/ContactSection";
import PrivacyPolicy from "../Pages/PrivacyPolicy/PrivacyPolicy";
import TermsConditions from "../Pages/TermsConditions/TermsConditions";
import AdminDashboard from "../Admin/AdminDashboard";
import UsersManagement from "../Admin/User";
import Plant from "../Admin/Plant";
import PostsManagement from "../Admin/PostsManagement";
import Settings from "../Admin/Settings";
import SignIn from "../Pages/Auth/SignIn";
import SignUp from "../Pages/Auth/SignUp";

export const router = createBrowserRouter([
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
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
    path: "/admin",
    element: <Dashboard />,
    children: [
      {
        path: "/admin/dashboard",
        element: <AdminDashboard />,
      },
      {
        path: "/admin/users",
        element: <UsersManagement />,
      },
      {
        path: "/admin/plant",
        element: <Plant />,
      },
      {
        path: "/admin/posts",
        element: <PostsManagement />
      },
      {
        path: "/admin/settings",
        element: <Settings />
      }
    ],
  },
  {
    path: "/login",
    element: <SignIn />
  },
  {
    path: "/register",
    element: <SignUp />
  }

]);
