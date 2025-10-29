import React from "react";
import { useNavigate } from "react-router-dom";

const SettingsButton = () => {
    const navigate = useNavigate();

    return (
        <button
            className="icon-btn"
            title="Settings"
            onClick={() => navigate("/edit-profile")}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                 fill="currentColor" viewBox="0 0 16 16">
                <path d="M9.405 1.05a.5.5 0 0 1 .49.598l-.288 1.29a5.53 5.53 0 0 1 1.036.6l1.144-.662a.5.5 0 0 1 .659.163l.866 1.5a.5.5 0 0 1-.163.659l-1.144.662a5.522 5.522 0 0 1 0 1.2l1.144.662a.5.5 0 0 1 .163.659l-.866 1.5a.5.5 0 0 1-.659.163l-1.144-.662a5.53 5.53 0 0 1-1.036.6l.288 1.29a.5.5 0 0 1-.49.598H6.595a.5.5 0 0 1-.49-.598l.288-1.29a5.53 5.53 0 0 1-1.036-.6l-1.144.662a.5.5 0 0 1-.659-.163l-.866-1.5a.5.5 0 0 1 .163-.659l1.144-.662a5.522 5.522 0 0 1 0-1.2l-1.144-.662a.5.5 0 0 1-.163-.659l.866-1.5a.5.5 0 0 1 .659-.163l1.144.662a5.53 5.53 0 0 1 1.036-.6l-.288-1.29a.5.5 0 0 1 .49-.598h2.81zM8 10.5A2.5 2.5 0 1 0 8 5.5a2.5 2.5 0 0 0 0 5z"/>
            </svg>
        </button>
    );
};

export default SettingsButton;
