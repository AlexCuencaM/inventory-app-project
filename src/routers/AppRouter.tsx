import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import RequireAuth from "./components/RequireAuth";
import { ResponsiveDrawer } from "../ui/navbar/Navbar";
import PublicRoute from "./components/PublicRoute";
import { LoginView } from "../pages/Login/LoginView";
import { InventoryView } from "../pages/Inventory/InventoryView";
export const AppRouter = createBrowserRouter(createRoutesFromElements(
    <>
    <Route    
        path="/login"
        element={
            <PublicRoute>
                <LoginView/>   
            </PublicRoute>
        }
    />
        <Route
            path="/"
            element={
                <PublicRoute>
                    <LoginView/>   
                </PublicRoute>
            }
        /> 
    <Route path="/app" element={
        <RequireAuth>
            <ResponsiveDrawer/>
        </RequireAuth>
    }>
        <Route
            path="inventory" element={
                <InventoryView/>
            }
        />
    </Route>
    </>
));
