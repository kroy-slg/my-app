import React, { useState, useEffect } from "react";
import GoogleAuth from "../components/GoogleAuth.jsx";
import "../assets/css/Home.css";

const Home = () => {
    const [user, setUser] = useState(null);

    // Load saved user on mount
    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
        if (storedUser) setUser(storedUser);
    }, []);

    // Handle login success
    const handleLogin = (data) => {
        setUser(data);
        localStorage.setItem("loggedInUser", JSON.stringify(data));
    };

    // Handle logout
    const handleLogout = () => {
        localStorage.removeItem("loggedInUser");
        setUser(null);
    };

    return (
        <div className="home-container">
            {!user ? (
                <>
                    {/*<h2 className="home-title">WELCOME TO TSR INVOICE</h2>*/}
                    {/*<p className="home-text">Please sign in with Google to continue</p>*/}
                    <GoogleAuth onLogin={handleLogin} />
                </>
            ) : (
                <>
                    <h2 className="home-title">
                        Hello <strong>{user.name}</strong> 👋
                    </h2>
                    <p className="home-text">
                        You are now logged in. Click below to log out.
                    </p>
                    <img src={user.picture} alt={user.name} className="user-pic" />
                    <button className="logout-btn" onClick={handleLogout}>
                        Logout
                    </button>
                </>
            )}
        </div>
    );
};

export default Home;
