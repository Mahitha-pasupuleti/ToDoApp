import { Outlet, Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoutes = () => {
    let auth = Cookies.get("isAuthenticated");
    return (
        auth === "true" ? <Outlet /> : <Navigate to="/login" />
    )
}

export default ProtectedRoutes;