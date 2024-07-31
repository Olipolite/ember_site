import React from "react";
import { Link } from 'react-router-dom';

import Godot from "../assets/godot_logo.png";

  const scrollToTop = () =>{ 
    window.scrollTo({ 
      top: 0,  
      behavior: "smooth",
    }); 
  }; 

const Footer = ({ links }) => {
    return (
        <div className="footer">
            <div className="footer__container">
                <ul className="footer__links">
                    {links.map((link) => (
                        <li key={link.id} className="footer__link">
                            <Link to={link.path}>{link.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
                <div className="footer__copyright">
                    <div className="footer__copyright--container">
                    <Link to='/ember_site'>
                        <span className="footer__logo">IKOL</span>
                    </Link>
                        <span className="footer__scroll" onClick={scrollToTop}>BACK TO TOP</span>
                    </div>
                    <img className="godot" src={Godot} alt="godot"></img>
                </div>
        </div>
    )
}

export default Footer;
