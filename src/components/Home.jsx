import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import "../assets/css/Home.css"; // Import CSS

const Home = ({ user, onLogin, onLogout }) => {
    const navigate = useNavigate();

    const handleLogin = (userInfo) => {
        onLogin(userInfo);
        navigate("/profile");
    };

    return (
        <div className="home-container">
            {!user && <Header />}

            <main className="home-main">
                {/*<div className="home-card">*/}
                {/*    {!user ? (*/}
                {/*        <GoogleAuth user={user} onLogin={handleLogin} onLogout={onLogout} />*/}
                {/*    ) : (*/}
                {/*        <>*/}
                {/*            <h1 className="home-title">*/}
                {/*                Hey {user.name} <span className="hand-emoji">👋</span>, let's start*/}
                {/*            </h1>*/}
                {/*            <button*/}
                {/*                onClick={() => navigate("/profile")}*/}
                {/*                className="profile-btn"*/}
                {/*            >*/}
                {/*                Go to Profile*/}
                {/*            </button>*/}
                {/*        </>*/}
                {/*    )}*/}
                {/*</div>*/}
            </main>

            {!user && <Footer />}
        </div>
    );
};

export default Home;
