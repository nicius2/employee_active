import { createBrowserRouter } from "react-router";
import { HomePage } from "./pages/HomePage";
import { LayoutStyle } from "./_layout";
import { Directory } from "./pages/Directory";

export const routes = createBrowserRouter([
     {
          path: "/",
          Component: LayoutStyle,
          children: [
               {index: true, Component: HomePage},
               { path: "/directory", Component: Directory }
          ]
     },
])