import React, { useEffect, useRef } from "react";
import CloseX from "../assets/close_x.png";
import gsap from "gsap";

const MobileMenu = ({ links, isOpen, handleCloseMobileMenu }) => {
    let menuRef = useRef(false);

    
    useEffect(() => {
        let menu = menuRef.current;

        if (isOpen) {
            gsap.to(menu, {
                x: 0,
                duration: 0.5,
                ease: 'power2.inOut',
            });
        } else {
            gsap.to(menu, {
                x: '100%',
                duration: 0.5,
                ease: 'power2.inOut',
            });
        }}, [isOpen]);

    return (
        <div
            ref={menuRef}
            className={`mobile-menu`}
            style={{ transform: 'translateX(100%)' }}
        >
            <img className="mobile-menu__close" src={CloseX} alt="menu" onClick={handleCloseMobileMenu} />
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