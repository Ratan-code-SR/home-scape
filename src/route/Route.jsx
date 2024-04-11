
import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/home/Home";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import Details from "../pages/details/Details";
import Protected from "../components/protected/Protected";
import Update_profile from "../components/update_profile/Update_profile";
import Error from "../pages/error/Error";
import Contact from "../pages/contact/Contact";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error/>,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch('../../public/data.json')

            },
            {
                path: "/details/:id",
                element: <Protected> <Details /></Protected>,
                loader: () => fetch('../../public/data.json')

            },
            {
                path: "/register",
                element: <Register />

            },
            {
                path: "/login",
                element: <Login />

            },
            {
                path: "/updateProfile",
                element: <Protected><Update_profile /></Protected>
            },
            {
                path: "/contact",
                element: <Contact/>
            }
        ]
    },
]);

export default router;