import React from "react";
import GoogleAuth from "../services/auth/GoogleAuth.jsx";
import "../../assets/css/Home.css";
import {useNavigate} from "react-router-dom";

const Home = ({user, onLogin, onLogout}) => {
    const navigate = useNavigate();
    /**
     *
     * @param userInfo
     * Method to handle login
     */
    const handleLogin = (userInfo) => {
        onLogin(userInfo);
        navigate("/profile");
    };

    /**
     *
     * @param userInfo
     * Method to handle logout
     */
    const handleLogout = ( userInfo ) => {
        onLogout(userInfo);
    };

    return (
        <div className="home-container">
            {!user ? (
                <>
                    <GoogleAuth user={user} onLogin={handleLogin} onLogout={onLogout} />
                </>
            ) : (
                <>
                    <h2 className="home-title">
                        Hello <strong>{user.name}</strong> 👋
                    </h2>
                    <button className="logout-btn" onClick={handleLogout}>
                        Logout
                    </button>
                </>
            )}
        </div>
    );
};

export default Home;
