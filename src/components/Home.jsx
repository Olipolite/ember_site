import React from "react";
import "../styles/main-output.css";
import heroImage from "../assets/hero_image.png";

const Home = () => {
    return (
        <div className="hero">
            <div className="hero__gradient">
                <div className="hero__container">            
                    <img className="hero__image" src={heroImage} alt="wow!"></img> 
                    <div className="hero__content">
                        <h1 className="hero__title">Ember</h1>
                        <p className="hero__paragraph">RPG - FREE TO PLAY</p>
                        <button className="btn hero__btn">PLAY NOW</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
