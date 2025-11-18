import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/css/Sidebar.css"; // Import CSS

export default function Sidebar({ onLogout }) {
    const navigate = useNavigate();
    const [collapsed, setCollapsed] = useState(false); // sidebar state

    const menuItems = [
        { name: "Home", path: "/", icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 3.293l6 6V15a1 1 0 0 1-1 1h-4v-4H7v4H3a1 1 0 0 1-1-1V9.293l6-6zM7 13v-3h2v3h2V9.293L8 4.293 5 9.293V13h2z" />
                </svg>
            )},
        { name: "Customers", path: "/customers", icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                </svg>
            )},
        { name: "Products", path: "/products", icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M2 2h12v12H2z" fill="none" stroke="currentColor" strokeWidth="2"/>
                </svg>
            )},
        { name: "Sales", path: "/sales", icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M4 1h8v2H4V1zm0 4h8v2H4V5zm0 4h5v2H4V9z"/>
                </svg>
            )},
        { name: "Payments", path: "/payments", icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <rect x="1" y="3" width="14" height="10" rx="2" ry="2" stroke="currentColor" fill="none" strokeWidth="1.5"/>
                <rect x="1" y="5" width="14" height="2" fill="currentColor"/>
                <text x="8" y="12" textAnchor="middle" fontSize="6" fill="currentColor" fontWeight="bold">₹</text>
            </svg>
            )},
        { name: "Expenses", path: "/expenses", icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="2" fill="none"/>
                <path d="M8 4v4l2 2"/>
            </svg>
            )},
        { name: "Reports", path: "/reports", icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <rect x="2" y="6" width="2" height="8" fill="currentColor" rx="0.5"/>
                <rect x="6" y="4" width="2" height="10" fill="currentColor" rx="0.5"/>
                <rect x="10" y="2" width="2" height="12" fill="currentColor" rx="0.5"/>
                <rect x="14" y="8" width="0" height="0"/> {/* spacer to align viewbox */}
            </svg>)},
    ];

    return (
        <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
            <div className="sidebar-top">
                <div className="sidebar-header">
                    <h2 className={`sidebar-title ${collapsed ? "collapsed-title" : ""}`}>
                        TSR Invoice
                    </h2>
                    <button
                        onClick={() => setCollapsed(!collapsed)}
                        className="collapse-btn"
                        title={collapsed ? "Expand Sidebar" : "Collapse Sidebar"}
                    >
                        {collapsed ? "❯" : "❮"}
                    </button>
                </div>

                <nav className="sidebar-nav">
                    {menuItems.map((item) => (
                        <button key={item.name} onClick={() => navigate(item.path)} className="sidebar-btn">
                            <span className="sidebar-icon">{item.icon}</span>
                            {!collapsed && <span>{item.name}</span>}
                        </button>
                    ))}
                </nav>
            </div>

            <button
                onClick={() => {
                    onLogout();
                    navigate("/");
                }}
                className="sidebar-logout"
            >
        <span className="sidebar-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
            <path d="M6 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3h-1V3H7v10h3v-3h1v3a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V3z"/>
            <path d="M11.5 8l-3 3v-2H2v-2h6.5V5l3 3z"/>
          </svg>
        </span>
                {!collapsed && <span>Logout</span>}
            </button>
        </aside>
    );
}
