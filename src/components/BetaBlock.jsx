import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import moonBoy from '../assets/moon_boy.jpg';

const BetaBlock = () => {
    const boxBorder = useRef(null)
    const boxBorderBottom = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const animateBorderFill = () => {

            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".beta-block__container",
                    start: "15% 35%",
                }
            });
            tl.fromTo(
                boxBorder.current,
                { width: 0 },
                { ease: 'power3.out', width: '100%', duration: 1, borderTop: '1px solid rgb(241, 145, 1)' }
            );
            tl.fromTo(
                boxBorder.current,
                { height: 0 },
                { ease: 'power3.out', height: '100%', duration: 1, borderRight: '1px solid rgb(241, 145, 1)' }
            );
            tl.fromTo(
                boxBorderBottom.current,
                { left: '100%', width: 0 }, 
                { ease: 'power3.out', left: 0, width: '100%', duration: 1, borderBottom: '1px solid rgb(241, 145, 1)' }
            ); 
            tl.fromTo(
                boxBorderBottom.current,
                { height: 0, top: '100%' }, 
                { ease: 'power3.out', height: '100%', top: 0, duration: 1, borderLeft: '1px solid rgb(241, 145, 1)' },
            );
        }

        animateBorderFill();
    }, []);

    return (
        <div className="beta-block">
            <div className="beta-block__container">
                <img className="beta-block__image" src={moonBoy} alt="Boy and a Moon" />
                <div className="beta-block__content">
                    <h2 className="beta-block__title">SIGN UP</h2>
                    <p className="beta-block__paragraph">Dolor qui ea laborum est velit ipsum exercitation ipsum adipisicing.Consequat ex amet ex aute est laboris duis esse.</p>
                    <button className="btn beta-block__button">BETA</button>
                    <div ref={boxBorder} className="beta-block__content-border"></div>
                    <div ref={boxBorderBottom} className="beta-block__content-border-bottom"></div>
                </div>
            </div>
        </div>
    );
};

export default BetaBlock;