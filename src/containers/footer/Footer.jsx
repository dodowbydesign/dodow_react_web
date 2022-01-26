import React from "react";
import icon from "../../asset/img/icon.svg";
import "./footer.css"
const Footer = () => {
    return(
        <div id="Footer_section">
            <footer>
                <ul>
                    <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fab fa-behance"></i></a></li>
                    <li><a href="#"><i className="fas fa-images"></i></a></li>
                </ul>
            </footer>
            <nav className="dropup">
                    <a className="dropbtn"><img src={icon} alt="icon"/></a>
                    <ul className="dropup-content">
                        <li><a href="/about">About Me</a></li>
                        <li><a href="/gallery">Gallery</a></li>
                        <li><a href="/metaverse">Metaverse</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>

            </nav>

        </div>
    )
}

export default Footer