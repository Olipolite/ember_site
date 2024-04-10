import React from "react";

// Components
import Block from "../components/Block";
import BetaBlock from "../components/BetaBlock";
import Adventure from "../components/Adventure";

import handleButtonClick from '../functions/helper-functions';
import login from "../assets/block_gif/Register - Login.gif";
import "../styles/main-output.css";



const Home = () => {
    return (
        <div>
            <div className="hero">
                <div className="hero__gradient">
                    <div className="hero__container">
                        <img className="hero__image" src={login} alt="wow!"></img>
                        <div className="hero__content">
                            <h1 className="hero__title">Ember</h1>
                            <p className="hero__paragraph">RPG - FREE TO PLAY</p>
                            <button type="button" onClick={handleButtonClick} className="btn hero__btn">PLAY NOW</button>
                        </div>
                    </div>
                </div>
            </div>
            <Block />
            <BetaBlock />
            <Adventure />
        </div>
    );
}

export default Home;
