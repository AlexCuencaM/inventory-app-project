import { Navigate, redirect, useLocation } from "react-router-dom"
import { IAuthState } from "../../state/Interfaces/IAuthState"
import { useAuth } from "../../hooks/useAuth"
interface RequireAuthProps {
    children: JSX.Element;
}
export default function PublicRoute({children}: RequireAuthProps) {
    const logged: IAuthState = useAuth();
    const isLoggedIn = logged.IsUserLogged();
    const location = useLocation();
    if (isLoggedIn) {
        return <Navigate to="/app" replace state={{ path: location.pathname }}/>
    }
    return children
}
export async function loaderWithoutAuth() {
    await withoutAuth()
    return null
}


export async function withoutAuth() {
    const logged: IAuthState = useAuth();
    const isLoggedIn = logged.IsUserLogged();
    alert(isLoggedIn)
    // if (!isLoggedIn) {
    //     return <Navigate to="/login" replace state={{ path: location.pathname }}/>
    // }
    if (isLoggedIn) {
        throw redirect("/app")
    }
}