import React from "react";
import "../../assets/css/TopHeader.css";
import SearchBar from "../ui/SearchBar.jsx";
import AddButton from "../ui/AddButton.jsx";
import SettingsButton from "../ui/SettingsButton.jsx";
import ProfileButton from "../ui/ProfileButton.jsx";

const TopHeader = ({ user, onAdd }) => {
    return (
        <header className="top-header">
            <SearchBar />
            <div className="top-header-right">
                <AddButton onAdd={onAdd} />
                <SettingsButton />
                <ProfileButton user={user} />
            </div>
        </header>
    );
};

export default TopHeader;
