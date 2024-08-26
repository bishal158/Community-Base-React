// ------------ All css ---------------- //
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.js";
// react multi carasoul
import "react-multi-carousel/lib/styles.css"
// package css'
import 'yet-another-react-lightbox/styles.css';
// component css
import "./App.css";
// GASP
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, useGSAP);

// Router
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

// Routes Elements
import BuyerHome from "./pages/BuyerHome";
import SellerHome from "./pages/SellerHome";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Cart from "./pages/Cart";
import Settings from "./pages/Settings";
import Orders from "./pages/Orders";
import Message from "./pages/Message";
import Notifications from "./pages/Notification";
import PageTransition from "./utils/PageTransition.jsx";
// Define routes with PageTransition wrapped around the components
const router = createBrowserRouter([
  {
    path: "/",
    index: true,
    element: <PageTransition><Home /></PageTransition>,
  },
  {
    path: "signup",
    element: <PageTransition><SignUp /></PageTransition>,
  },
  {
    path: "signin",
    element: <PageTransition><SignIn /></PageTransition>,
  },
  {
    path: "forgot-password",
    element: <PageTransition><ForgotPassword /></PageTransition>,
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        index: true,
        element: <Navigate to="buyer" replace />,
      },
      {
        path: "user-notification",
        element: <PageTransition><Notifications /></PageTransition>,
      },
      {
        path: "buyer",
        element: <PageTransition><BuyerHome /></PageTransition>,
      },
      {
        path: "seller",
        element: <PageTransition><SellerHome /></PageTransition>,
      },
      {
        path: "user-dashboard",
        element: <PageTransition><Dashboard /></PageTransition>,
      },
      {
        path: "cart",
        element: <PageTransition><Cart /></PageTransition>,
      },
      {
        path: "settings",
        element: <PageTransition><Settings /></PageTransition>,
      },
      {
        path: "orders",
        element: <PageTransition><Orders /></PageTransition>,
      },
      {
        path: "message",
        element: <PageTransition><Message /></PageTransition>,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
