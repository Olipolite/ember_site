import React from "react";
import GameInfoBackground from "../assets/testy.png";

const GameInfo = () => {
    return (
        <div className="game">
            <div className="game__container">
            <img src={GameInfoBackground} alt="Unlucky">
            </img>
                <h1>Hello World</h1>
            </div>
        </div>
    )
}

export default GameInfo;
