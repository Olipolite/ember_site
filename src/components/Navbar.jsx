import React from "react";
import BurgerMenu from "../assets/burger_menu.png";

const Navbar = ({ links, handleBurgerMenu }) => {
    return (
        <div className="navbar">
            <div className="navbar__items">
                <div className="navbar__logo">IKOL</div>
                <nav className="navbar__links">
                    {links.map((link) => (
                        <li key={link.id} className="navbar__link">
                            {link.name}
                        </li>
                    ))}
                </nav>
                <div className="navbar__burger">
                    <img src={BurgerMenu} onClick={handleBurgerMenu} alt="burgerMenu"></img>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
