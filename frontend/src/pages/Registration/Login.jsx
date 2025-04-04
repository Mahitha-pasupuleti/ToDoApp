import { useState } from "react"
import { postRequest } from "../../services/api";
import { login } from "../../services/authService";
import { useNavigate } from "react-router-dom";
import Navbar from "../NavigationBeforeLogin/Navbar.jsx";
import Cookies from "js-cookie";
import { ApiError } from "../../utils/ApiError.js";

export default function Login() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
    });
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData( (prevData) => ({ ...prevData, [name]: value }) )
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await login(formData);

            const accessToken = response.data.accessToken;
            if (!accessToken) {
                throw new Error("Login failed: No access token received.");
            }

            Cookies.set( "AccessToken", accessToken, { expires: 7, secure: true } );
            Cookies.set( "isAuthenticated", true, { expires: 7, secure: true } );
            // console.log("Login Successfull: ", response);

            setFormData({
                username: "",
                email: "",
                password: ""
            });
            setSuccessMessage(response.message);
            setError("");

            // navigate("/dashboard");
            navigate("/dashboard", { state: { fullName: response.data.user.fullName } });

        } catch (error) {
            setError(error.message);
            setSuccessMessage("");
        }
    }
    return (
       <>
       <Navbar />
       <div className="container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email: </label>
                <input type="email" name="email" id="email" value={formData.email} onChange={handleInputChange} required/>
                <br />

                <label htmlFor="password">Password: </label>
                <input type="password" name="password" id="password" value={formData.password} onChange={handleInputChange} required/>
                <br />
            </div>
            <button type="submit">Login</button>
        </form>
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
       </>
    )
}