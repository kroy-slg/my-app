import { Link, useLocation } from "react-router-dom";
import "../assets/css/Navbar.css";

const Navbar = () => {
    const location = useLocation();

    const navItems = [
        { path: "/about", label: "About" },
        { path: "/services", label: "Services" },
        { path: "/contact", label: "Contact" },
        { path: "/sign-up", label: "Sign Up" },
        { path: "/sign-in", label: "Sign In" },
    ];

    return (
        <nav className="navbar">
            <ul className="nav-list">
                {navItems.map((item) => (
                    <li
                        key={item.path}
                        className={`nav-item ${
                            location.pathname === item.path ? "active" : ""
                        }`}
                    >
                        <Link to={item.path}>{item.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
