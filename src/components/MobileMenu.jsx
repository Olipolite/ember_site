import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

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
        }
    }, [isOpen]);

    return (
        <div ref={menuRef} className={`mobile-menu`} style={{ transform: 'translateX(100%)' }}>
            <svg className="mobile-menu__close" onClick={handleCloseMobileMenu} xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" style={{ fill: 'rgba(255, 255, 255, 1)', transform: '', msFilter: '' }}>
                <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
            </svg>
            <div className="mobile-menu__container">
            <Link to="/ember_site">
                <div className="mobile-menu__logo" onClick={handleCloseMobileMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" style={{ fill: 'rgba(255, 255, 255, 1)', transform: '', msFilter: '' }}>
                        <path d="M21 6h-2l-1.27-1.27A2.49 2.49 0 0 0 16 4h-2.5A2.64 2.64 0 0 0 11 2v6.36a4.38 4.38 0 0 0 1.13 2.72 6.57 6.57 0 0 0 4.13 1.82l3.45-1.38a3 3 0 0 0 1.73-1.84L22 8.15a1.06 1.06 0 0 0 0-.31V7a1 1 0 0 0-1-1zm-5 2a1 1 0 1 1 1-1 1 1 0 0 1-1 1z" />
                        <path d="M11.38 11.74A5.24 5.24 0 0 1 10.07 9H6a1.88 1.88 0 0 1-2-2 1 1 0 0 0-2 0 4.69 4.69 0 0 0 .48 2A3.58 3.58 0 0 0 4 10.53V22h3v-5h6v5h3v-8.13a7.35 7.35 0 0 1-4.62-2.13z" />
                    </svg>
                    <h2>IKOL</h2>
                </div>
            </Link>
                <ul className="mobile-menu__links">
                    {links.map((link) => (
                        <li key={link.id} className="mobile-menu__link">
                            <Link to={link.path} onClick={handleCloseMobileMenu} >{link.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default MobileMenu;
