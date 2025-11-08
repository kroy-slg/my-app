import React from "react";
import "../../assets/css/Profile.css";
import TopHeader from "../layout/TopHeader.jsx";

const Profile = ({ user, onLogOut }) => {
    return (
        <div className="profile-container">
            <main className="profile-main">
                <div className="profile-content">
                    <div className="customers-container">
                        <TopHeader
                            user={user}
                            onAdd={() => alert("Add new customer")}
                            onLogOut={onLogOut}
                        />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Profile;
