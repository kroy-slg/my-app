import { Link, useLocation } from "react-router-dom";
import "../assets/css/Navbar.css";

const Navbar = () => {
    const location = useLocation();

    return (
        <nav className="navbar">
            <Link className={location.pathname === "/" ? "active" : ""} to="/">Home</Link>
            <Link className={location.pathname === "/sign-up" ? "active" : ""} to="/sign-up">Sign Up</Link>
            <Link className={location.pathname === "/sign-in" ? "active" : ""} to="/sign-in">Sign In</Link>
        </nav>
    );
}

export default Navbar;
