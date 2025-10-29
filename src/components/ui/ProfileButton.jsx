import React, { useState } from "react";
import ProfilePopup from "./ProfilePopup.jsx";

const ProfileButton = ({ user }) => {
    const [showProfile, setShowProfile] = useState(false);

    return (
        <>
            <button
                className="icon-btn"
                title="Profile"
                onClick={() => setShowProfile(true)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                     fill="currentColor" viewBox="0 0 16 16">
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                </svg>
            </button>


            {showProfile && (

                <ProfilePopup user={user} onClose={() => setShowProfile(false)} />
            )}
        </>
    );
};

export default ProfileButton;
