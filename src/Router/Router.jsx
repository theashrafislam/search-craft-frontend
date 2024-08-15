import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Layout from "../Root/Layout";
import Products from "../Pages/Products";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import UserProfile from "../Pages/UserProfile";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/products",
                element: <Products/>
            }
            ,
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/register",
                element: <Register/>
            },
            {
                path: "/profile",
                element: <UserProfile/>
            }
        ]
    },
]);

export default router;