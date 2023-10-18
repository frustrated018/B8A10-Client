import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/Error/ErrorPage";

const Router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage> ,
      children: [
        {
            path: "/",
            element:<Home></Home>
        }
      ]
    },
  ]);

  export default Router;