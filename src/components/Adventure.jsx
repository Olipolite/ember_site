import React from "react";
import AdventureOne from "../assets/adventure1.png";
import AdventureTwo from "../assets/adventure2.png";
import AdventureThree from "../assets/Adventure3.jpeg";
import AdventureFour from "../assets/adventure4.png";

const Adventure = () => {

    return (
        <div className="adventure">
            <div className="adventure__container">
                <div className="adventure__text">
                    <p className="adventure__title">ADVENTURE</p>
                    <p className="adventure__sub">AWAITS</p>
                    <button className="adventure__btn btn">PLAY NOW</button>
                </div>
                <img className="adventure_image" src={AdventureFour} alt="Warrior"></img>
            </div>
        </div>
    )
}

export default Adventure;
