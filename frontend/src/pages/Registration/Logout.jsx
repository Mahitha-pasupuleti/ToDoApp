import { logout } from "../../services/authService";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function Logout() {
    const accessToken = Cookies.get("AccessToken");
    const navigate = useNavigate();

    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const handleLogout = async (e) => {
        e.preventDefault();
        // make API call for logout
        try {
            const response = await logout(accessToken);
            // console.log("Logged out Sucessfully:", response);

            Cookies.remove("AccessToken");
            Cookies.remove("isAuthenticated");

            setSuccessMessage(response.message);
            setError("")

            navigate("/login");
        } catch (error) {
            // console.error("Logout Unsuccessful:", error.message);
            setError(error.message)
            setSuccessMessage("");
        }
    }
    return (
        <div>
            <button onClick={handleLogout}>Click to Logout</button>
            {successMessage && (
                <div className="message success">
                    {successMessage}
                </div>
            )}
            {error && (
                <div className="message error">
                    {error}
                </div>
            )}
        </div>
    )
}