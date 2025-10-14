import React from "react";
import {Link} from "react-router-dom";
import "../assets/css/Header.css"// Import CSS

const Header = () => {
    return (
        <>
            <div className="header">
                <ul>
                    <Link to={"/about"}><li>About</li></Link>
                    {/*<Link to={"/services"}><li>Services</li></Link>*/}
                    {/*<Link to={"/contact"}><li>Contact</li></Link>*/}
                </ul>
            </div>
        </>
    )
}

export default Header;
