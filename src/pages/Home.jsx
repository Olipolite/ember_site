import React from "react";

// Components
import Block from "../components/Block";
import BetaBlock from "../components/BetaBlock";
import Adventure from "../components/Adventure";
import NewsBlock from "../components/NewsBlock";

import handleButtonClick from '../functions/helper-functions';
import LandScapeTest from "../assets/temp-background-image.png";
import "../styles/main-output.css";



const Home = () => {
    return (
        <div>
            <div className="hero">
                <div className="hero__gradient">
                    <div className="hero__container">
                        <img className="hero__image" src={LandScapeTest} alt="wow!"></img>
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
            <NewsBlock />
            <Adventure />
        </div>
    );
}

export default Home;
