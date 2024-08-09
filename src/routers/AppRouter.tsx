import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import RequireAuth from "./components/RequireAuth";
import { ResponsiveDrawer } from "../ui/navbar/Navbar";


// export const AppRouter = createBrowserRouter([
//     {
//       path: "/",
//       element: <Home/>
//     },
//     {
//         path: "/inventory",
//         element: <Inventory/>
//     }
// ]);
export const AppRouter = createBrowserRouter(createRoutesFromElements(
    <Route
        path="/app"
        element={
            <RequireAuth>
                <ResponsiveDrawer/>
            </RequireAuth>
        }
    />
));
