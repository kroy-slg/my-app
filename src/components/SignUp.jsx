import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock, FaPhone } from "react-icons/fa";
import "../assets/css/SignUp.css";

const SignUp = () => {
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !mobile || !email || !password || !rePassword) {
            return alert("Please fill all fields");
        }

        if (password !== rePassword) {
            return alert("Passwords do not match");
        }

        const users = JSON.parse(localStorage.getItem("users") || "[]");
        if (users.find((u) => u.email === email)) {
            return alert("User already exists");
        }

        users.push({ name, mobile, email, password });
        localStorage.setItem("users", JSON.stringify(users));
        alert("SignUp successful!");
        navigate("/sign-in");
    };

    return (
        <form onSubmit={handleSubmit} className="signup-container">
            <h2>Sign Up</h2>

            <div className="input-group">
                <FaUser className="icon" />
                <input
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className="input-group">
                <FaPhone className="icon" />
                <input
                    type="tel"
                    placeholder="Mobile No"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                />
            </div>

            <div className="input-group">
                <FaEnvelope className="icon" />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className="input-group">
                <FaLock className="icon" />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <div className="input-group">
                <FaLock className="icon" />
                <input
                    type="password"
                    placeholder="Re-enter Password"
                    value={rePassword}
                    onChange={(e) => setRePassword(e.target.value)}
                />
            </div>

            <button type="submit" className="submit-btn">Sign Up</button>
        </form>
    );
}

export default SignUp;