import { createBrowserRouter, createRoutesFromElements, Route, Routes } from "react-router-dom";
import RequireAuth from "./components/RequireAuth";
import { ResponsiveDrawer } from "../ui/navbar/Navbar";
import PublicRoute from "./components/PublicRoute";
import { Login } from "../pages/Login/Login";


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
    <Route>
        <Route
            path="/app"
            element={
                <RequireAuth>
                    <ResponsiveDrawer/>
                </RequireAuth>
            }
        />
        <Route
            path="/login"
            element={
                <PublicRoute>
                    <Login/>
                </PublicRoute>
            }
        />

    </Route>
));
