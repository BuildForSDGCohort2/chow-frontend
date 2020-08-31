import React from 'react';
import heroImg from '../images/heroImg.jpg';
import Search from './Search';


const Hero = () => {
    return(
        <div className="hero">
            <img src={heroImg} alt=""/>
            <p>Get great recipes anywhere,anytime ...</p>
            <Search />
        </div>
      );
}

export default Hero;

