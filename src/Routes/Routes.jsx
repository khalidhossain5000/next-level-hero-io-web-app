import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
    {
        path:'/',
        Component:RootLayout,
        errorElement:<h2 className="text-4xl bg-red-600 p-22 rounded-lg"> OPPES PAGE IS NOT FOUND ROOT COMPOENT ERROR ELEMENT</h2>,
        children:[
            {
                index:true,
                Component:Home
            }
        ]
    }
])