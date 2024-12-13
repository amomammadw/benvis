import { PathRouteProps } from "react-router";
import Homepage from "../pages/Homepage";
import About from "../pages/About";

export const routes: PathRouteProps[] = [
  {
    path: "/",
    element: Homepage(),
  },
  {
    path: "/About",
    element: About(),
  },
];
