import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Layout from "../Root/Layout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Home/>
            }
        ]
    },
]);

export default router;