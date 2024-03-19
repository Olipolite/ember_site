import React from "react";
import Samurai from "../assets/samurai.png";

const Block = () => {
    return (
        <div className="block">
            <div className="block__container">
                <p className="block__title">CHOOSE YOUR</p>
                <h2 className="block__title-hero">HERO!</h2>

                <div className="block__content">
                    <img className="block__samurai" src={Samurai} alt="Samurai"></img>
                    <p className="block__paragraph">
                        Laborum fugiat ut Lorem commodo. Enim proident dolore reprehenderit aliquip velit dolor tempor Lorem id mollit culpa anim anim. Dolore minim in sit commodo enim sunt. 
                        <br></br><br></br>
                        Cillum exercitation est labore aliquip id adipisicing voluptate. Eu Lorem ex do sunt esse nulla ea duis aute ut nulla. Do dolor officia ea nulla in ipsum deserunt elit. Voluptate labore sit adipisicing dolore minim sint non ut duis cillum.
                        <br></br><br></br>
                        Est Lorem qui et cupidatat sit ullamco ipsum veniam Lorem enim. Minim aute tempor et deserunt.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Block;
