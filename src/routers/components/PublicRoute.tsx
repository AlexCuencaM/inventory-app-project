import { Navigate, useLocation } from "react-router-dom"
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