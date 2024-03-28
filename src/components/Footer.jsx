import React from "react";
import { Link } from 'react-router-dom';

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
                <nav className="footer__links">
                    {links.map((link) => (
                        <li key={link.id} className="footer__link">
                            <Link to={link.path}>{link.name}</Link>
                        </li>
                    ))}
                </nav>
            </div>
                <div className="footer__copyright">
                    <div className="footer__copyright--container">
                    <Link to='/ember_site'>
                        <p className="footer__logo">IKOL</p>
                    </Link>
                        <p className="footer__scroll" onClick={scrollToTop}>BACK TO TOP</p>
                    </div>
                </div>
        </div>
    )
}

export default Footer;
