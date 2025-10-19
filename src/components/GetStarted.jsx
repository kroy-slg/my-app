import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {FaEye, FaEyeSlash, FaMobileAlt, FaUserAstronaut, FaRegEnvelope, FaUserLock} from "react-icons/fa";
import "../assets/css/GetStarted.css";

const GetStarted = () => {
    const [isSignUp, setIsSignUp] = useState(true);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        mobile: "",
        email: "",
        password: "",
        rePassword: "",
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showRePassword, setShowRePassword] = useState(false);

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSignUp = (e) => {
        e.preventDefault();
        const { name, mobile, email, password, rePassword } = formData;

        if (!name || !mobile || !email || !password)
            return alert("Please fill all fields");
        if (password !== rePassword) {
            return alert("Passwords do not match");
        }

        const users = JSON.parse(localStorage.getItem("users") || "[]");
        if (users.find((u) => u.email === email))
            return alert("User already exists");

        users.push({ name, mobile, email, password });
        localStorage.setItem("users", JSON.stringify(users));

        alert("Sign Up successful!");
        setIsSignUp(false);
    };

    const handleSignIn = (e) => {
        e.preventDefault();
        const { email, password } = formData;

        if (!email || !password) return alert("Please fill all fields");

        const users = JSON.parse(localStorage.getItem("users") || "[]");
        const user = users.find((u) => u.email === email && u.password === password);

        if (!user) return alert("Invalid credentials");

        localStorage.setItem("loggedInUser", JSON.stringify(user));
        alert("Sign in successful!");
        navigate("/");
    };

    return (
        <div className="get-started-container">
            <div className={`form-box ${isSignUp ? "signup-mode" : "signin-mode"}`}>
                {/* Left toggle section */}
                <div className="toggle-box">
                    <h2>{isSignUp ? "Welcome Back!" : "Join Us Today!"}</h2>
                    <p>
                        {isSignUp
                            ? "Already have an account? Sign in to continue."
                            : "Don't have an account yet? Create one to get started."}
                    </p>
                    <button
                        className="toggle-btn"
                        onClick={() => setIsSignUp(!isSignUp)}
                    >
                        {isSignUp ? "Sign In" : "Sign Up"}
                    </button>
                </div>

                {/* Right form section */}
                <div className="form-content">
                    <form
                        onSubmit={isSignUp ? handleSignUp : handleSignIn}
                        className="form"
                    >
                        <h2>{isSignUp ? "Sign Up" : "Sign In"}</h2>

                        {isSignUp && (
                            <>
                                <div className="input-group">
                                    <FaUserAstronaut className="icon" />
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Full Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="input-group">
                                    <FaMobileAlt className="icon" />
                                    <input
                                        type="tel"
                                        name="mobile"
                                        placeholder="Mobile No"
                                        value={formData.mobile}
                                        onChange={handleChange}
                                    />
                                </div>
                            </>
                        )}

                        <div className="input-group">
                            <FaRegEnvelope className="icon" />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="input-group password-group">
                            <FaUserLock className="icon" />
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                            <span
                                className="eye-icon"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
                        </div>

                        {isSignUp && (
                            <div className="input-group password-group">
                                <FaUserLock className="icon" />
                                <input
                                    type={showRePassword ? "text" : "password"}
                                    name="rePassword"
                                    placeholder="Re-enter Password"
                                    value={formData.rePassword}
                                    onChange={handleChange}
                                />
                                <span
                                    className="eye-icon"
                                    onClick={() => setShowRePassword(!showRePassword)}
                                >
                  {showRePassword ? <FaEyeSlash /> : <FaEye />}
                </span>
                            </div>
                        )}

                        <button type="submit" className="submit-btn">
                            {isSignUp ? "Sign Up" : "Sign In"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default GetStarted;
