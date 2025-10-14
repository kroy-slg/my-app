import { Routes, Route, Navigate } from "react-router-dom";
import React, { useState } from "react";
import About from "./components/About.jsx";
import Profile from "./components/Profile.jsx";
import Home from "./components/Home.jsx";

function App() {
    const [user, setUser] = useState(null);

    return (
        <Routes>
            <Route
                path="/"
                element={<Home user={user} onLogin={setUser} onLogout={() => setUser(null)} />}
            />
            <Route
                path="/profile"
                element={
                    user ? (
                        // <Profile user={user} onLogout={() => setUser(null)} />
                        <Profile user={user} onLogout={() => setUser(null)} />

                    ) : (
                        <Navigate to="/" replace />
                    )
                }
            />
            <Route path="/about" element={<About />} />
        </Routes>
    );
}

export default App;
