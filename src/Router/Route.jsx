import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Details from "../Pages/Details/Details";
import Statistics from './../Pages/Statistics/Statistics';



const myCreatedRoute =  createBrowserRouter([
    {
        path : "/",
        element : <MainLayout></MainLayout>,
        errorElement : <ErrorPage></ErrorPage>,
        children : [
            {
            path : "/",
            element : <Home></Home>,
            loader : ()=> fetch('/donation.json')
            },

            {
            path : "/donation",
            element : <Donation></Donation> ,
            loader : ()=> fetch('/donation.json')
            },

            {
            path : "/statistics",
            element : <Statistics></Statistics>,
            loader : ()=> fetch('/donation.json')
            },

            {
                path : "/details/:id",
                element : <Details></Details>,
                loader : ()=> fetch('/donation.json')
               
            }
        ]
    }
])

export default myCreatedRoute;
