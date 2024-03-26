import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

const Navbar = ({ links, handleBurgerMenu }) => {

    const logoDog = useRef(null);
    const animationRef = useRef(null);

    useEffect(() => {
        const dogElement = logoDog.current;

        animationRef.current = gsap.to(dogElement, {
            rotation: 360,
            duration: 2.5,
            repeat: -1,
        });

        return () => {
            animationRef.current.kill();
        };
    }, []);


    return (
        <div className="navbar">
            <div className="navbar__items">
                <div className="navbar__logo">
                    <Link to="/ember_site">
                        <svg ref={logoDog} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" style={{ fill: 'rgba(255, 255, 255, 1)', transform: '', msFilter: '' }}>
                            <path d="M21 6h-2l-1.27-1.27A2.49 2.49 0 0 0 16 4h-2.5A2.64 2.64 0 0 0 11 2v6.36a4.38 4.38 0 0 0 1.13 2.72 6.57 6.57 0 0 0 4.13 1.82l3.45-1.38a3 3 0 0 0 1.73-1.84L22 8.15a1.06 1.06 0 0 0 0-.31V7a1 1 0 0 0-1-1zm-5 2a1 1 0 1 1 1-1 1 1 0 0 1-1 1z" />
                            <path d="M11.38 11.74A5.24 5.24 0 0 1 10.07 9H6a1.88 1.88 0 0 1-2-2 1 1 0 0 0-2 0 4.69 4.69 0 0 0 .48 2A3.58 3.58 0 0 0 4 10.53V22h3v-5h6v5h3v-8.13a7.35 7.35 0 0 1-4.62-2.13z" />
                        </svg>
                    </Link>
                    <p>IKOL</p>
                </div>
                <nav className="navbar__links">
                    {links.map((link) => (
                        <li key={link.id} className="navbar__link">
                            <Link to={link.name}>{link.name}</Link>
                        </li>
                    ))}
                </nav>
                <div className="navbar__burger">
                    <svg onClick={handleBurgerMenu} xmlns="http://www.w3.org/2000/svg" width="32" height="30" viewBox="0 0 24 24" style={{ fill: 'rgba(255, 255, 255, 1)', textDecoration: 'none' }}>
                        <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

