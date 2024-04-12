import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import AdventureFour from '../assets/adventure4.png';

const Adventure = () => {
    return (
      <div className="adventure">
          <div className="adventure__container">
              <div className="adventure__text">
                  <p className="adventure__title">ADVENTURE</p>
                  <p className="adventure__sub">AWAITS</p>
                  <div className="adventure__part-underline"></div>
                  <button className="adventure__btn btn">PLAY NOW</button>
              </div>
              <img className="adventure_image" src={AdventureFour} alt="Warrior" />
          </div>
      </div>
    );
};

export default Adventure;
