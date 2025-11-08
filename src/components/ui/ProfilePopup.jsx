import React from "react";

const ProfilePopup = ({ user, onClose, onLogOut }) => {

    const handleLogOut = () => {
        onLogOut();
        console.log("✅ Logged out successfully!");
    };

    return (
        <div className="profile-popup-overlay" onClick={onClose}>
            <div className="profile-popup" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>×</button>
                <img src={user.picture} alt={user.name} className="popup-pic" />
                <h2 className="home-title">
                    <strong>{user.name}</strong> 👋
                </h2>
                <p>{user.email}</p>
                <div className="popup-id">
                    Google ID: <code>{user.sub}</code>
                </div>
                <button className="logout-btn" onClick={handleLogOut}>Logout</button>
            </div>
        </div>
    );
};

export default ProfilePopup;
