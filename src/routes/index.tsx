import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout";
import { Home } from "../pages/home";
import { CarDetail } from "../pages/CarDetail";
import { Dashboard } from "../pages/dashboard";
import { NewCar } from "../pages/NewCar";
import { Login } from "../pages/login";
import { Register } from "../pages/register";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/car/id:",
        element: <CarDetail />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/new",
        element: <NewCar />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export { router };
