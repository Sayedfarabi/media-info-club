import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/error-page/ErrorPage";
import Root from "../layout/Root";
import Home from "../pages/home-page/Home";
import AboutPage from "../pages/about-page/AboutPage";
import DataDetails from "../pages/data-details/DataDetails";

export const routes = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage></ErrorPage>,
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/details/:id",
                element: <DataDetails></DataDetails>,
                loader: async ({ params }) => await fetch(`https://api.tvmaze.com/shows/${params.id}`)
            },
            {
                path: "/about",
                element: <AboutPage></AboutPage>
            }

        ]
    }
])