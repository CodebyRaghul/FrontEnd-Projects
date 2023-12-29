import {createBrowserRouter} from "react-router-dom";
import Login from "../Pages/Login";

//export key is more important. never forget this.
export const router = createBrowserRouter([
    {
      path: "/login",
      element: <div> <Login /> </div>,
    },
  ]);