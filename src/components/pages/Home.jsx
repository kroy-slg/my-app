import React, { useState, useEffect } from "react";
import GoogleAuth from "../services/auth/GoogleAuth.jsx";
import "../../assets/css/Home.css";
import { collection, addDoc, serverTimestamp, query, where, getDocs } from "firebase/firestore";
import { db } from "../services/firebase";
import {useNavigate} from "react-router-dom";

const Home = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    // Load saved user on mount
    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
        if (storedUser) setUser(storedUser);
    }, []);

    // Handle login success
    const handleLogin = async (data) => {
        setUser(data);
        localStorage.setItem("loggedInUser", JSON.stringify(data));
        navigate("/profile");

        try {
            const usersRef = collection(db, "users");
            const q = query(usersRef, where("email", "==", data.email));
            const existing = await getDocs(q);

            if (existing.empty) {
                await addDoc(usersRef, {
                    name: data.name,
                    email: data.email,
                    picture: data.picture,
                    loginAt: serverTimestamp(),
                });
                console.log("✅ User added to Firestore");
            } else {
                console.log("ℹ️ User already exists in Firestore");
            }
        } catch (error) {
            console.error("🔥 Error saving user:", error);
        }
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
