import React from "react";
import CloseX from "../assets/close_x.png";


const MobileMenu = ({ links, isOpen, handleCloseMobileMenu }) => {
    return (
        <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
            <img className="mobile-menu__close" src={CloseX} alt="menu" onClick={handleCloseMobileMenu}></img>
            <div className="mobile-menu__container">
                <div className="mobile-menu__links">
                    {links.map((link) => (
                        <p key={link.id} className="mobile-menu__link">
                            {link.name}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MobileMenu;
