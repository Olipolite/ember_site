import React, { useState } from "react";
import burgerMenu from "../assets/burger_menu.png" ;
import closeX from "../assets/close_x.png";



const Navbar = () => {
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

    const [openMenu, setOpenMenu] = useState(false);
    
    const handleBurgerMenu = () => {
      setOpenMenu((prev) => !prev);
    };
    
    // const closeBurgerMenu = () => {
    //   setOpen(false);
    // };

    return (
        <div className="navbar">
            <div className="navbar__items">
                <p className="navbar__logo">IKOL</p>
                <div className="navbar__links">
                    {links.map((link) => (
                        <p key={link.id} className="navbar__link">{link.name}</p>
                    ))}
                </div>
                {openMenu ? (
                    <div className="navbar__burger-close" >
                        <img src={closeX} onClick={handleBurgerMenu} alt="close"></img>
                    </div>
                ) : (
                <div className="navbar__burger">
                    <img src={burgerMenu} onClick={handleBurgerMenu} alt="burgerMenu"></img>
                </div>
                )}
            </div>
        </div>
    )
}

export default Navbar;
