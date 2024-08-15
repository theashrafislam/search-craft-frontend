import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <div className="bg-red-500">Hello world!</div>,
    },
]);

export default router;