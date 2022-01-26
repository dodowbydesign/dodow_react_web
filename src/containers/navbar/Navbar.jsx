import React from "react";
// import {RiMenu3Line, RiCloseLine} from "react-icons/ri";

import logo from "../../asset/img/dodowlogo.svg";
import "./navbar.css";


const Navbar = () => {
    return(
        <div id="page">
            <nav>
                <a href="/"><img id ="logo" src={logo} alt="logo"/></a>
            </nav>
        </div>
    )
}

export default Navbar
