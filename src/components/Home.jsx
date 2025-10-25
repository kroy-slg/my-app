import React, { useState } from "react";
import GoogleAuth from "../components/GoogleAuth.jsx";
import "../assets/css/Home.css";
import {useNavigate} from "react-router-dom";

const Home = () => {
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("loggedInUser")) || null
    );

    const navigate = useNavigate();

    const handleLogin = (data) => {
        setUser(data);
        // navigate("/about");
    };

    const handleLogout = () => {
        localStorage.removeItem("loggedInUser");
        setUser(null);
    };

    return (
            <div className="home-container">
                <h2>Hello {user ? user.name : "User"}!</h2>
                {!user ? (
                    <>
                        <p>Please sign in with Google to continue</p>
                        <GoogleAuth user={user} onLogin={handleLogin} onLogout={handleLogout} />
                    </>
                ) : (
                    <>
                        <GoogleAuth user={user} onLogin={handleLogin} onLogout={handleLogout} />
                    </>
                )}
            </div>
    );
};

export default Home;
