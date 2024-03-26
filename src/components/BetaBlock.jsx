import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import moonBoy from '../assets/moon_boy.jpg';

const BetaBlock = () => {


    return (
        <div className="beta-block">
            <div className="beta-block__container">
                <img className="beta-block__image" src={moonBoy} alt="Boy and a Moon" />
                <div className="beta-block__content">
                    <h2 className="beta-block__title">SIGN UP</h2>
                    <p className="beta-block__paragraph">Dolor qui ea laborum est velit ipsum exercitation ipsum adipisicing.Consequat ex amet ex aute est laboris duis esse.</p>
                    <button className="btn beta-block__button">BETA</button>
                    <div className="beta-block__content-border"></div>
                </div>
            </div>
        </div>
    );
};

export default BetaBlock;
