import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav>
            <Link to="/signup">SignUp </Link>
            <Link to="/login">Login</Link>
        </nav>
    );
};
