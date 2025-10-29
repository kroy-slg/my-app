import React from "react";

const ProfilePopup = ({ user, onClose }) => (
    <div className="profile-popup-overlay" onClick={onClose}>
        <div className="profile-popup" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={onClose}>×</button>
            <img src={user.picture} alt={user.name} className="popup-pic" />
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <div className="popup-id">
                Google ID: <code>{user.sub}</code>
            </div>
        </div>
    </div>
);

export default ProfilePopup;
