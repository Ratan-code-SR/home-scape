
import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/home/Home";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import Details from "../pages/details/Details";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch('../../public/data.json')

            },
            {
                path: "/details/:id",
                element: <Details />,
                loader: () => fetch('../../public/data.json')

            },
            {
                path: "/register",
                element: <Register />

            },
            {
                path: "/login",
                element: <Login />

            }
        ]
    },
]);

export default router;