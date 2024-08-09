import { Navigate } from "react-router-dom"
import { IAuthState } from "../../state/Interfaces/IAuthState"
import { useAuth } from "../../hooks/useAuth"

interface RequireAuthProps {
    children: JSX.Element;
}
// export async function loader() {
//     await requireAuth()
//     return null
// }


export default function RequireAuth({children}:RequireAuthProps) {
    const logged: IAuthState = useAuth();
    const isLoggedIn = logged.IsUserLogged();
    if (!isLoggedIn) {
        return <Navigate to="/login" replace state={{ path: location.pathname }}/>
    }
    return children
    // if (!isLoggedIn) {
    //     throw redirect("/login")
    // }
}