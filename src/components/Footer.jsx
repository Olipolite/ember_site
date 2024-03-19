import React from "react";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__container">
                <nav className="footer__links">
                    <li className="footer__link">NEWS</li>
                    <li className="footer__link">GAME INFO</li>
                    <li className="footer__link">BETA</li>
                    <li className="footer__link">ACCOUNT</li>
                    <li className="footer__link">PLAY NOW</li>
                </nav>
            </div>
                <div className="footer__copyright">
                    <div className="footer__copyright--container">
                        <p>IKOL</p>
                        <p>BACK TO TOP</p>
                    </div>
                </div>
        </div>
    )
}

export default Footer;
