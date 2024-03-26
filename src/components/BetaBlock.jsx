import React from 'react';
import moonBoy from "../assets/moon_boy.jpg";

const BetaBlock = () => {
    return (
        <div className="beta-block">
            <div className="beta-block__container">
                <img className="beta-block__image" src={moonBoy} alt="Boy and a Moon"></img>
                <div className="beta-block__content">
                <h2 className="beta-block__title">
                    SIGN UP
                </h2>
                <button className="btn beta-block__button">
                    BETA
                </button>
                </div>
            </div>
        </div>
    )
}

export default BetaBlock;
