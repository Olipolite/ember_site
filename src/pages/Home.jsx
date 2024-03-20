import React from "react";
import Block from "../components/Block";
import BetaBlock from "../components/BetaBlock";
import "../styles/main-output.css";
// import heroImage from "../assets/hero_image.png";
// import test from "../assets/test.png";
import testy from "../assets/testy.png";



const Home = () => {
    return (
        <div>
            <div className="hero">
                <div className="hero__gradient">
                    <div className="hero__container">
                        <img className="hero__image" src={testy} alt="wow!"></img>
                        <div className="hero__content">
                            <h1 className="hero__title">Ember</h1>
                            <p className="hero__paragraph">RPG - FREE TO PLAY</p>
                            <button className="btn hero__btn">PLAY NOW</button>
                        </div>
                    </div>
                </div>
            </div>
            <Block />
            <BetaBlock />
        </div>
    );
}

export default Home;