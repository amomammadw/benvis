import { PathRouteProps } from "react-router";
import homepage from "../pages/homepage";
import about from "../pages/about";

export const routes: PathRouteProps[] = [
  {
    path: "/",
    element: homepage(),
  },
  {
    path: "/about",
    element: about(),
  },
];
