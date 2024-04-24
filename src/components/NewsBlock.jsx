import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// images
import Placeholder from "../assets/portraits_classes/samurai_cool.png";

const NewsBlock = () => {
    const cardOneRef = useRef(null);
    const cardTwoRef = useRef(null);
    const cornerCutRef = useRef(null);

    const newsBlockTitle = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(
            newsBlockTitle.current,
            {
                opacity: 0,
                y: -25,
            },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: newsBlockTitle.current,
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                },
            }
        );
    }, []);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        
        const animations = [
            {
                element: cardOneRef.current,
                props: {
                    opacity: 0,
                    y: -100,
                },
            },
            {
                element: cardTwoRef.current,
                props: {
                    opacity: 0,
                    y: -100,
                },
            },
        ];
    
        animations.forEach((animation, index) => {
            gsap.fromTo(
                animation.element,
                animation.props,
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    scrollTrigger: {
                        trigger: animation.element,
                        start: 'top 80%',
                        toggleActions: 'play none none none',
                    },
                    stagger: 0.4,
                    delay: index * 0.2, // Add a delay based on index to stagger animations
                }
            );
        });
    }, []);
    
    const cardHoverAnimation = () => {
        gsap.to(
            cornerCutRef.current,
            {   
                ease: 'linear',
                rotation: 180,
                top: 0,
                right: 0,
                background: 'transparent',
                borderLeft: '0px',
                borderBottom: '0px',
                duration: 0.5,
                onComplete: () => {
                    gsap.set(cornerCutRef.current, { borderLeft: '0px', borderBottom: '0px' });
                }
            }
        )
    };

    const leaveHoverAnimation = () => {
        gsap.to(
            cornerCutRef.current,
            {
                ease: 'linear',
                rotation: 360,
                top: '-25',
                right: '-25',
                background: 'white',
                duration: 0.5,
                onComplete: () => {
                    gsap.set(cornerCutRef.current, { borderLeft: '0px', borderBottom: '0px' });
                }
            }
        )
    };

    return (
        <div className="newsblock">
            <div className="newsblock__container">
                <div className="newsblock__title-wrapper">
                    <h1 className="newsblock__title" ref={newsBlockTitle}>NEWS</h1>
                    <div className="newsblock__part-underline"></div>
                </div>
                <div className="newsblock__card-wrapper">
                    <div className="newsblock__card" ref={cardOneRef} onMouseEnter={cardHoverAnimation} onMouseLeave={leaveHoverAnimation}>
                        <img className="card__thumbnail" alt="" src={Placeholder}></img>
                        <p className="card__paragraph">Commodo magna cupidatat do consequat consectetur incididunt ut. JORDEL CHAD</p>
                        <div className="card__border"></div>
                        <span className="card__corner-cut" ref={cornerCutRef}></span>
                    </div>
                    <div className="newsblock__card" ref={cardTwoRef}>
                        <img className="card__thumbnail" alt="" src={Placeholder}></img>
                        <p className="card__paragraph">Commodo magna cupidatat do consequat consectetur incididunt ut. PLEASE BUFF WARRIOR PLEASE // BASSE</p>
                        <div className="card__border"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsBlock;
