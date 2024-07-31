import React from 'react';

import handleButtonClick from '../functions/helper-functions';
import AdventureFour from '../assets/adventure4.png';

const Adventure = () => {
    return (
      <div className="adventure">
          <div className="adventure__container">
              <div className="adventure__text">
                  <p className="adventure__title">ADVENTURE</p>
                  <p className="adventure__sub">AWAITS</p>
                  <div className="adventure__part-underline"></div>
                  <button className="adventure__btn btn" onClick={handleButtonClick}>PLAY NOW</button>
              </div>
              <img className="adventure_image" src={AdventureFour} alt="Warrior" />
          </div>
      </div>
    );
};

export default Adventure;
