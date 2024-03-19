import React from "react";
import BurgerMenu from "../assets/burger_menu.png";



const Navbar = ({ links, handleBurgerMenu }) => {
    return (
        <div className="navbar">
            <div className="navbar__items">
                <p className="navbar__logo">IKOL</p>
                <div className="navbar__links">
                    {links.map((link) => (
                        <p key={link.id} className="navbar__link">
                            {link.name}
                        </p>
                    ))}
                </div>
                <div className="navbar__burger">
                    <img src={BurgerMenu} onClick={handleBurgerMenu} alt="burgerMenu"></img>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
