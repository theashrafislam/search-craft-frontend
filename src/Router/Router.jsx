import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Layout from "../Root/Layout";
import Products from "../Pages/Products";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import UserProfile from "../Pages/UserProfile";
import PrivateRouter from "./PrivateRouter";

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
                element: <PrivateRouter><Products/></PrivateRouter>
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
                element: <PrivateRouter><UserProfile/></PrivateRouter>
            }
        ]
    },
]);

export default router;