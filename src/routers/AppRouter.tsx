import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import RequireAuth from "./components/RequireAuth";
import { ResponsiveDrawer } from "../ui/navbar/Navbar";
import PublicRoute from "./components/PublicRoute";
import { LoginView } from "../pages/Login/LoginView";
import { InventoryView } from "../pages/Inventory/InventoryView";
import { ClientsView } from "../pages/Clients/ClientsView";
import { UsersView } from "../pages/Users/UsersView";
import { LaboratoryView } from "../pages/Laboratory/LaboratoryView";
import { ProductView } from "../pages/Product/ProductView";
import { ProviderView } from "../pages/Provider/ProviderView";
import { ResupplyView } from "../pages/Resupply/ResupplyView";
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
        <Route
            path="client"
            element = {
                <ClientsView/>
            }
        />
        <Route
            path="user"
            element = {
                <UsersView/>
            }
        />
        <Route
            path="laboratory"
            element = {
                <LaboratoryView/>
            }
        />
        <Route
            path="product"
            element = {
                <ProductView/>
            }
        />
        <Route
            path="provider"
            element = {
                <ProviderView/>
            }
        />
        <Route
            path="resupply"
            element = {
                <ResupplyView/>
            }
        />


    </Route>
    </>
));
