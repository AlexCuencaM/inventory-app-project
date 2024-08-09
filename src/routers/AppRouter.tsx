import { createBrowserRouter } from "react-router-dom";
import App from "../App";

export const AppRouter = createBrowserRouter([
    {
      path: "/",
      element: <App/>
    },
]);