import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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

import WarriorVideo from '../assets/block_gif/Warrior_temp.gif';
import MageVideo from '../assets/block_gif/Mage_temp.gif';
import BrawlerVideo from '../assets/block_gif/Brawler_temp.gif';
import ArcherVideo from '../assets/block_gif/Archer_temp.gif';
import ThiefVideo from '../assets/block_gif/fernando-bordon-sprite-0001.gif';

const Block = () => {
    const imgRef = useRef(null);
    const [imageSrc, setImageSrc] = useState(Samurai);
    const [gifSrc, setGifSrc] = useState(WarriorVideo);

    const blockRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(
            blockRef.current,
            {
                opacity: 0,
                y: -25,
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

    const handleClassesIcon = (newSrc, newGifSrc) => {
        gsap.to(imgRef.current, {
            opacity: 0,
            duration: 0.5,
            onComplete: () => {
                gsap.set(imgRef.current, { opacity: 0 });
                setImageSrc(newSrc);
                gsap.to(imgRef.current, {
                    opacity: 1,
                    duration: 0.5,
                });
            },
        });
        setGifSrc(newGifSrc);
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

    const classTitle = {
        [Samurai]: 'WARRIOR',
        [BlueSamurai]: 'BOWMASTER',
        [BlackWhiteSamurai]: 'THIEF',
        [BlackWhiteMaleSamurai]: 'MAGICIAN',
        [SamuraiCool]: 'BRAWLER',
    };

    const classGif = {
        [Samurai]: 'https://forums.tigsource.com/index.php?topic=42569.280',
        [BlueSamurai]: 'https://dribbble.com/shots/2415428-The-Archer',
        [BlackWhiteSamurai]: 'https://www.artstation.com/artwork/Zae83Z',
        [BlackWhiteMaleSamurai]: '',
        [SamuraiCool]: '',
    };

    const classData = [
        {
          image: Samurai,
          video: WarriorVideo,
          icon: Warrior,
          name: 'Warrior',
          description: 'Masters of close combat, warriors are strong and resilient fighters skilled with a variety of melee weapons.'
        },
        {
          image: BlueSamurai,
          video: ArcherVideo,
          icon: Bowmaster,
          name: 'Bowmaster',
          description: 'Bowmasters are expert marksmen, skilled in long-range combat. They specialize in raining arrows down on their enemies from afar.'
        },
        {
          image: BlackWhiteSamurai,
          video: ThiefVideo,
          icon: Thief,
          name: 'Thief',
          description: 'Thieves are nimble and agile, specializing in stealth and subterfuge. They excel at slipping past enemies unnoticed and striking from the shadows.'
        },
        {
          image: BlackWhiteMaleSamurai,
          video: MageVideo,
          icon: Magician,
          name: 'Magician',
          description: 'Magicians wield powerful magic to manipulate the elements and cast devastating spells on their foes. They are masters of arcane knowledge.'
        },
        {
          image: SamuraiCool,
          video: BrawlerVideo,
          icon: Brawler,
          name: 'Brawler',
          description: 'Brawlers are fearless fighters who rely on their brute strength and close-quarters combat skills to overpower their adversaries. They excel in hand-to-hand combat.'
        }
      ];
      

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
                    <div>
                        <img className="block__samurai" ref={imgRef} src={imageSrc} alt="Samurai"></img>
                        <p className="block__samurai-title">{classTitle[imageSrc]}</p>
                        <p className="block__samurai-description">Ipsum dolore esse minim mollit velit.</p>
                    </div>
                    <div className="block__wrapper">
                        <div className="block__classes-wrapper">
                            <div className="block__classes-carousel">
                                {classData.map((classItem, index) => (
                                    <div key={index}>
                                        <div className={imageSrc === classItem.image ? 'block__circle' : 'block__circle block__circle-hidden'} onClick={() => handleClassesIcon(classItem.image, classItem.video)}>
                                            <img src={classItem.icon} alt="icon" className="block__icon" />
                                        </div>
                                        <p>{classItem.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="block__video-classes">
                            <div className="block__video-classes__item">
                                <img src={gifSrc} alt="WarriorGif"></img>
                                <span className="block__video-classes__border"></span>
                            </div>
                            <a href={classGif[imageSrc]} rel="" target="_noblank">
                                Credit
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Block;
