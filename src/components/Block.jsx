import React, { useState, useRef } from 'react';
import gsap from 'gsap';

import Samurai from '../assets/samurai.png';
import BlueSamurai from '../assets/blue-smurai.png';
import BlackWhiteSamurai from '../assets/samurai-blacak-white.png';
import BlackWhiteMaleSamurai from '../assets/blue-smurai-blackwhite.png';
import SamuraiCool from '../assets/samurai_cool.png';
import Classes from '../assets/classes.png';

const Block = () => {
    const imgRef = useRef(null);
    const blockCircleRef = useRef(null);
    const [imageSrc, setImageSrc] = useState(Samurai);

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

    return (
        <div className="block">
            <div className="block__container">
                <p className="block__title">CHOOSE YOUR</p>
                <h2 className="block__title-hero">HERO!</h2>
                <p className="block__paragraph">Proident ullamco enim excepteur non duis adipisicing Lorem. Qui est incididunt commodo aute esse tempor fugiat aliqua exercitation id magna.</p>
                <div className="block__button-wrapper">
                    <button className="block__btn block__btn-orange">Talent Calculator</button>
                    <button className="block__btn">Play Now</button>
                </div>

                <div className="block__content">
                    <img className="block__samurai" ref={imgRef} src={imageSrc} alt="Samurai"></img>
                    <div className="block__classes-wrapper">
                        <div className="block__classes-carousel">
                            <div>
                                <div className={imageSrc === Samurai ? 'block__circle' : 'block__circle block__circle-hidden'} ref={blockCircleRef} onClick={() => handleClassesIcon(Samurai)}>
                                    <img src={Classes} alt="icon" className="block__icon" />
                                </div>
                                <p>Warrior</p>
                            </div>
                            <div>
                                <div className={imageSrc === BlueSamurai ? 'block__circle' : 'block__circle block__circle-hidden'} onClick={() => handleClassesIcon(BlueSamurai)}>
                                    <img src={Classes} alt="icon" className="block__icon" />
                                </div>
                                <p>Archer</p>
                            </div>
                            <div>
                                <div className={imageSrc === BlackWhiteSamurai ? 'block__circle' : 'block__circle block__circle-hidden'} onClick={() => handleClassesIcon(BlackWhiteSamurai)}>
                                    <img src={Classes} alt="icon" className="block__icon" />
                                </div>
                                <p>Thief</p>
                            </div>
                            <div>
                                <div className={imageSrc === BlackWhiteMaleSamurai ? 'block__circle' : 'block__circle block__circle-hidden'} onClick={() => handleClassesIcon(BlackWhiteMaleSamurai)}>
                                    <img src={Classes} alt="icon" className="block__icon" />
                                </div>
                                <p>Magician</p>
                            </div>
                            <div>
                                <div className={imageSrc === SamuraiCool ? 'block__circle' : 'block__circle block__circle-hidden'} onClick={() => handleClassesIcon(SamuraiCool)}>
                                    <img src={Classes} alt="icon" className="block__icon" />
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
