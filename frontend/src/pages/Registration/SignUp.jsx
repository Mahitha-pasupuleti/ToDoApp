import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../services/authService";
import Navbar from "../NavigationBeforeLogin/Navbar.jsx";

export default function SignUp() {
    const [formData, setFormData] = useState({
        fullName: "",
        username: "",
        email: "",
        password: ""
    });
    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // API call to backend - we got data from useState
        try {
            const response = await signUp(formData);
            // console.log("SignUp successful:", response);

            setFormData({
                fullName: "",
                username: "",
                email: "",
                password: ""
            });
            setSuccessMessage(response.message);
            setError("")
        } catch ( error ) {
            // console.log("User Registration failed:", error);
            setError(error.message);
            setSuccessMessage("");
        }
    }

    return (
        <>
        <Navbar />
        <div className="container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="fullName">Full Name: </label>
                    <input type="text" name="fullName" id="fullName" value={formData.fullName} onChange={handleInputChange} required/>
                    <br />

                    <label htmlFor="username">Username: </label>
                    <input type="text" name="username" id="username" value={formData.username} onChange={handleInputChange} required/>
                    <br />

                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" id="email" value={formData.email} onChange={handleInputChange} required/>
                    <br />

                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" id="password" value={formData.password} onChange={handleInputChange} required/>
                    <br />
                </div>
                <button type="submit">Sign Up</button>
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