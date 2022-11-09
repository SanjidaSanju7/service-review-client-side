import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import AddService from "../../Pages/Home/Services/AddService";
import ServiceDetails from "../../Pages/Home/Services/ServiceDetails";

import Services from "../../Pages/Home/Services/Services";
import Login from "../../Pages/Login/Login";
import Reviews from "../../Pages/Reviews/Reviews";
import SignUp from "../../Pages/SignUp/SignUp";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <Services></Services>,

            },
            {
                path: '/blog',

            },
            {
                path: '/services/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/reviews',
                element: <Reviews></Reviews>
            },
            {
                path: '/addservice',
                element: <AddService></AddService>
            }

        ]
    }
])

export default router;