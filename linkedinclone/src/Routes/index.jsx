import {createBrowserRouter} from "react-router-dom";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
// import Home from "../Pages/Home";
import HomeLayout from "../Layout/HomeLayout";

//export key is more important. never forget this.
export const router = createBrowserRouter([
    {
      path: "/",
      element: <div> <Login /> </div>,
    },
    {
      path: "/Register",
      element: <div> <Register /> </div>,
    },
    {
      path: "/Home",
      element: <div> <HomeLayout /> </div>,
    },

  ]);