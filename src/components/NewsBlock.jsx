import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// images
import Placeholder from '../assets/portraits_classes/samurai_cool.png';

const NewsBlock = () => {
    const cardOneRef = useRef(null);
    const cardTwoRef = useRef(null);
    const cornerCutRef = useRef(null);

    const newsBlockTitle = useRef(null);

    // //Title Animation
    // useEffect(() => {
    //     gsap.registerPlugin(ScrollTrigger);
    //     gsap.fromTo(
    //         newsBlockTitle.current,
    //         {
    //             opacity: 0,
    //             y: -25,
    //         },
    //         {
    //             y: 0,
    //             opacity: 1,
    //             duration: 1,
    //             scrollTrigger: {
    //                 trigger: newsBlockTitle.current,
    //                 start: 'top 80%',
    //                 toggleActions: 'play none none none',
    //             },
    //         }
    //     );
    // }, []);

    //New Title Animation
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(
            newsBlockTitle.current,
            {
                x: -500,
            },
            {
                x: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: newsBlockTitle.current,
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                    ease: 'linear',
                },
                onComplete: () => {
                    gsap.set(newsBlockTitle.current, { backgroundColor: 'transparent' });
                },
            }
        );
    });

    // Card Animation
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const animations = [
            {
                element: cardOneRef.current,
                props: {
                    y: 350,
                    start: 'top 120%',
                    end: '+=500',
                    delay: 0,
                },
            },
            {
                element: cardTwoRef.current,
                props: {
                    y: 350,
                    start: 'top 120%',
                    end: '+=500',
                    delay: 0,
                },
            },
        ];

        const mediaQuery = window.matchMedia('(max-width: 768px)');

        if (mediaQuery.matches) {
            animations.forEach((animation) => {
                animation.props.start = 'top 150%';
                animation.props.end = 'bottom 140%';
            });
        }

        animations.forEach((animation, index) => {
            gsap.fromTo(animation.element, animation.props, {
                y: 0,
                scrollTrigger: {
                    trigger: animation.element,
                    start: animation.props.start,
                    end: animation.props.end,
                    scrub: 1,
                    ease: 'power4.inOut',
                },
                stagger: {
                    each: 1,
                    from: 'random',
                },
                delay: animation.props.delay,
            });
        });
    }, []);

    return (
        <div className="newsblock">
            <div className="newsblock__container">
                <div className="newsblock__title-wrapper">
                    <div className="newsblock__title-animation" ref={newsBlockTitle}></div>
                    <h1 className="newsblock__title">
                        NEWS
                    </h1>
                    <div className="newsblock__part-underline"></div>
                </div>
                <div className="newsblock__card-wrapper">
                    <div className="newsblock__card" ref={cardOneRef}>
                        <img className="card__thumbnail" alt="" src={Placeholder}></img>
                        <p className="card__paragraph">Commodo magna cupidatat do consequat consectetur incididunt ut. Eiusmod aute incididunt non et anim ut id cupidatat commodo. Proident quis aliquip reprehenderit aliquip eiusmod quis fugiat aliquip officia irure occaecat officia. JORDEL CHAD</p>
                        <div className="card__border"></div>
                        <span className="card__corner-cut" ref={cornerCutRef}></span>
                    </div>
                    <div className="newsblock__card" ref={cardTwoRef}>
                        <img className="card__thumbnail" alt="" src={Placeholder}></img>
                        <p className="card__paragraph">Commodo magna cupidatat do consequat consectetur incididunt ut. PLEASE BUFF WARRIOR PLEASE // BASSE</p>
                        <div className="card__border"></div>
                        <span className="card__corner-cut" ref={cornerCutRef}></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsBlock;
