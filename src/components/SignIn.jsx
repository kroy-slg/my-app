import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";
import "../assets/css/SignIn.css";

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) return alert("Please fill all fields");

        const users = JSON.parse(localStorage.getItem("users") || "[]");
        const user = users.find((u) => u.email === email && u.password === password);

        if (!user) return alert("Invalid credentials");

        localStorage.setItem("loggedInUser", JSON.stringify(user));
        alert("Sign in successful!");
        navigate("/");
    };

    return (
        <form onSubmit={handleSubmit} className="signin-container">
            <h2>Sign In</h2>

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

            <button type="submit" className="submit-btn">Sign In</button>
        </form>
    );
}

export default SignIn;