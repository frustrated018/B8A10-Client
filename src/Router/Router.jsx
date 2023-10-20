import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/Error/ErrorPage";
import Gallery from "../Pages/Gallery/Gallery";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import AddProduct from "../Pages/AddProduct/AddProduct";
import Products from "../Pages/Products/Products";
import ProductDetails from "../Components/ProductDetails/ProductDetails";
import Cart from "../Pages/Cart/Cart";

const Router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: "/",
            element:<Home></Home>,
            loader: () => fetch('http://localhost:5000/brands')
        },
        {
            path: "/gallery",
            element: <Gallery></Gallery>
        },
        {
            path: "/login",
            element:<Login></Login>
        },
        {
            path: "/signup",
            element:<Signup></Signup>
        },
        {
            path: "/addproduct",
            element:<AddProduct></AddProduct>
        },
        {
            path: "/products/:brandName",
            element:<Products></Products>
        },
        {
            path: "/products/:brandName/:productName",
            element:<ProductDetails></ProductDetails>,
            loader: () => fetch('')
        },
        {
            path: "/cart",
            element:<Cart></Cart>,
            loader: () => fetch('http://localhost:5000/cart')
            
        },


      ]
    },
  ]);

  export default Router;