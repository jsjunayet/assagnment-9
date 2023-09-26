import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout/MainLayout";
import Error from "./Error/Error";
import Home from "../Home/Home";
import Donation from "../Donation/Donation";
import Statistics from "../Statistics/Statistics";
import SingleCard from "../Home/SingleCard";

const Root = createBrowserRouter([{
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
        {
            path: "/",
            element: <Home></Home>,
            loader: () => fetch('/Json/Api.json')
        },
        {
            path: "/donation",
            element: <Donation></Donation>
        },
        {
            path: "/Statistics",
            element: <Statistics></Statistics>
        },
        {
            path: "/card/:id",
            element: <SingleCard></SingleCard>,
            loader: () => fetch('/Json/Api.json')
        }
    ]
}])

export default Root;