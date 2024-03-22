import React from "react";
import Dragon from "../assets/dragon.jpg";

const BetaPage = () => {
    return (
        <div className="beta-page">
            <div className="beta-page__container">
                <div className="beta-page__background">
                    <img className="beta-page__dragon" src={Dragon} alt="Dragon"></img>
                </div>
                <h1>Hello World</h1>
            </div>
        </div>
    )
}

export default BetaPage;
