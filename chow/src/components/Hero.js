import React from 'react';
import heroImg from '../images/heroImg.jpg';



const Hero = () => {
    return(
        <div className="hero">
            <img src={heroImg} alt=""/>
            <p>Get great recipes anywhere,anytime ...</p>
            
        </div>
      );
};

export default Hero;

