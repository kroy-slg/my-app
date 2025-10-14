import React from "react";
import UserStats from "./Profile.jsx";

const Profile = ({ user, setUser }) => {
    if (!user) return null;
    return (
        <div style={{ textAlign: "center" }}>
            <img src={user.picture} alt="profile-pic" />
            <h2>Hi {user.name}</h2>
            <br />
            <UserStats user={user} />
            <button onClick={() => setUser(null)}>Logout</button>
        </div>
    );
};

export default Profile;
