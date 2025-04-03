import "./NavLogout.css";
import { Link } from "react-router-dom";

export default function NavLogout() {
    return (
        <nav>
            <Link to="/logout">Logout</Link>
        </nav>
    );
};