import React from "react";
import "../../assets/css/Profile.css";
import TopHeader from "../layout/TopHeader.jsx";

const Profile = ({ user }) => {
    return (
        <div className="profile-container">

            <main className="profile-main">
                <div className="profile-content">
                    <div className="customers-container">
                        <TopHeader user={{name: "Test User", email: "test@example.com", picture: "https://via.placeholder.com/80", sub: "1234567890"}} onAdd={() => alert("Add new customer")}/>
                    </div>
                </div>
            </main>

        </div>
    );
};

export default Profile;

