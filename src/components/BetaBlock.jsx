import { useRef, useState } from 'react';
import gsap from 'gsap';
import moonBoy from '../assets/moon_boy.jpg';

const BetaBlock = () => {
    const boxBorder = useRef(null);
    const [borderVisible, setBorderVisible] = useState(false);

    const animateBorderFill = () => {
        setBorderVisible(true);

        gsap.fromTo(
            boxBorder.current,
            { width: 0, },
            {   
                ease: 'none',
                width: '100%',
                duration: 4,
                borderTop: '1px solid rgb(241, 145, 1)',
            }
        );
    };

    return (
        <div className="beta-block">
            <div className="beta-block__container">
                <img className="beta-block__image" src={moonBoy} alt="Boy and a Moon" />
                <div className="beta-block__content">
                    <h2 className="beta-block__title">SIGN UP</h2>
                    <p className="beta-block__paragraph">Dolor qui ea laborum est velit ipsum exercitation ipsum adipisicing.Consequat ex amet ex aute est laboris duis esse.</p>
                    <button className="btn beta-block__button" onClick={animateBorderFill}>BETA</button>
                    <div style={{ display: borderVisible ? 'block' : 'none' }} ref={boxBorder} className="beta-block__content-border"></div>
                </div>
            </div>
        </div>
    );
};

export default BetaBlock;
