import React from "react";
import BurgerMenu from "../assets/burger_menu.png";



const Navbar = ({ handleBurgerMenu }) => {
    // <p className="navbar__link" href="#">News</p>
    // <p className="navbar__link" href="#">Game Info</p>
    // <p className="navbar__link" href="#">Beta</p>
    // <p className="navbar__link" href="#">Account</p>
    // <p className="navbar__link" href="#">Play Now</p>

    const links = [
        {id: 0, name: 'News' },
        {id: 1, name: 'Game Info' },
        {id: 2, name: 'Beta' },
        {id: 3, name: 'Account' },
        {id: 4, name: 'Play Now' },
    ];

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
