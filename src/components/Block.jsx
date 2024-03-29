import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import handleButtonClick from '../functions/helper-functions';

import Samurai from '../assets/portraits_classes/samurai.png';
import BlueSamurai from '../assets/portraits_classes/blue-smurai.png';
import BlackWhiteSamurai from '../assets/portraits_classes/samurai-blacak-white.png';
import BlackWhiteMaleSamurai from '../assets/portraits_classes/blue-smurai-blackwhite.png';
import SamuraiCool from '../assets/portraits_classes/samurai_cool.png';
import Warrior from '../assets/icons_classes/WarriorIcon.png';
import Bowmaster from '../assets/icons_classes/ArcherIcon.png';
import Thief from '../assets/icons_classes/ThiefIcon.png';
import Magician from '../assets/icons_classes/MageIcon.png';
import Brawler from '../assets/icons_classes/BrawlerIcon.png';

const Block = () => {
    const imgRef = useRef(null);
    const blockCircleRef = useRef(null);
    const [imageSrc, setImageSrc] = useState(Samurai);

    const blockRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(
            blockRef.current,
            {
                opacity: 0,
                y: -50,
            },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: blockRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                },
            }
        );
    }, []);



    const handleClassesIcon = (newSrc) => {
        // Fade out animation img
        gsap.to(imgRef.current, {
            opacity: 0,
            duration: 0.5,
            onComplete: () => {
                // Change image source
                setImageSrc(newSrc);

                // Reset opacity of the new image to 0
                gsap.set(imgRef.current, { opacity: 0 });

                // Fade in animation
                gsap.to(imgRef.current, {
                    opacity: 1,
                    duration: 0.5,
                });
            },
        });
    };

    // Probably could do with some refactoring :3
    const buttonRef = useRef(null);
    const borderRefTopRight = useRef(null);
    const borderRefBottomLeft = useRef(null);

    const handleMouseEnter = () => {
        gsap.to(borderRefTopRight.current, { duration: 0.3, opacity: '0.9', borderTop: '0', borderLeft: '0' });
        gsap.to(borderRefBottomLeft.current, { duration: 0.3, opacity: '0.9', borderBottom: '0', borderRight: '0' });
    };

    const handleMouseLeave = () => {
        gsap.to(borderRefTopRight.current, { duration: 0.3, opacity: '0.9', borderTop: '10px solid white', borderLeft: '10px solid rgb(241, 145, 1)' });
        gsap.to(borderRefBottomLeft.current, { duration: 0.3, opacity: '0.9', borderBottom: '10px solid white', borderRight: '10px solid rgb(241, 145, 1)' });
    };

    const buttonRefBlue = useRef(null);
    const borderRefTopRightBlue = useRef(null);
    const borderRefBottomLeftBlue = useRef(null);

    const handleMouseEnterBlue = () => {
        gsap.to(borderRefTopRightBlue.current, { duration: 0.3, opacity: '0.9', borderTop: '0', borderLeft: '0' });
        gsap.to(borderRefBottomLeftBlue.current, { duration: 0.3, opacity: '0.9', borderBottom: '0', borderRight: '0' });
    };

    const handleMouseLeaveBlue = () => {
        gsap.to(borderRefTopRightBlue.current, { duration: 0.3, opacity: '0.9', borderTop: '10px solid white', borderLeft: '10px solid rgba(30, 197, 227)' });
        gsap.to(borderRefBottomLeftBlue.current, { duration: 0.3, opacity: '0.9', borderBottom: '10px solid white', borderRight: '10px solid rgba(30, 197, 227)' });
    };

    return (
        <div className="block">
            <div className="block__container" ref={blockRef}>
                <p className="block__title">CHOOSE YOUR</p>
                <h2 className="block__title-hero">HERO!</h2>
                <p className="block__paragraph">Proident ullamco enim excepteur non duis adipisicing Lorem. Qui est incididunt commodo aute esse tempor fugiat aliqua exercitation id magna.</p>
                <div className="block__button-wrapper">
                    <button ref={buttonRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="block__btn block__btn-orange">
                        Talent Calculator
                        <div ref={borderRefTopRight} className="border__orange-top-right"></div>
                        <div ref={borderRefBottomLeft} className="border__orange-bottom-left"></div>
                    </button>
                    <button ref={buttonRefBlue} onClick={handleButtonClick} onMouseEnter={handleMouseEnterBlue} onMouseLeave={handleMouseLeaveBlue} className="block__btn">
                        Play Now
                        <div ref={borderRefTopRightBlue} className="border__blue-top-right"></div>
                        <div ref={borderRefBottomLeftBlue} className="border__blue-bottom-left"></div>
                    </button>
                </div>

                <div className="block__content">
                    <img className="block__samurai" ref={imgRef} src={imageSrc} alt="Samurai"></img>
                    <div className="block__classes-wrapper">
                        <div className="block__classes-carousel">
                            <div>
                                <div className={imageSrc === Samurai ? 'block__circle' : 'block__circle block__circle-hidden'} ref={blockCircleRef} onClick={() => handleClassesIcon(Samurai)}>
                                    <img src={Warrior} alt="icon" className="block__icon" />
                                </div>
                                <p>Warrior</p>
                            </div>
                            <div>
                                <div className={imageSrc === BlueSamurai ? 'block__circle' : 'block__circle block__circle-hidden'} onClick={() => handleClassesIcon(BlueSamurai)}>
                                    <img src={Bowmaster} alt="icon" className="block__icon" />
                                </div>
                                <p>Bowmaster</p>
                            </div>
                            <div>
                                <div className={imageSrc === BlackWhiteSamurai ? 'block__circle' : 'block__circle block__circle-hidden'} onClick={() => handleClassesIcon(BlackWhiteSamurai)}>
                                    <img src={Thief} alt="icon" className="block__icon" />
                                </div>
                                <p>Thief</p>
                            </div>
                            <div>
                                <div className={imageSrc === BlackWhiteMaleSamurai ? 'block__circle' : 'block__circle block__circle-hidden'} onClick={() => handleClassesIcon(BlackWhiteMaleSamurai)}>
                                    <img src={Magician} alt="icon" className="block__icon" />
                                </div>
                                <p>Magician</p>
                            </div>
                            <div>
                                <div className={imageSrc === SamuraiCool ? 'block__circle' : 'block__circle block__circle-hidden'} onClick={() => handleClassesIcon(SamuraiCool)}>
                                    <img src={Brawler} alt="icon" className="block__icon" />
                                </div>
                                <p>Brawler</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Block;
