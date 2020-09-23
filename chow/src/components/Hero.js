import React from 'react';
import { useState } from "react";
import { Carousel } from "react-bootstrap";
import CaroselImg1 from "../images/anna-pelzer-IGfIGP5ONV0-unsplash-removebg-preview.png";
import CaroselImg2 from "../images/brooke-lark-08bOYnH_r_E-unsplash-removebg(1).png";
import CaroselImg3 from "../images/baehaki-hariri-yBeL0XChO8o-unsplash-removebg-preview.png";


const Hero = () => {
    const [ index, setIndex ] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex)
    }
    return(
        <div className="row">
            <div className="col-sm-12">
            <Carousel activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item>
                  <img 
                    className="img-fluid"
                    src={ CaroselImg1 }
                  />
              </Carousel.Item>
              <Carousel.Caption>
                  
              </Carousel.Caption>
              <Carousel.Item>
                  <img
                    className="img-fluid"
                    src={ CaroselImg2 }
                  />
              </Carousel.Item>
              <Carousel.Caption>
                  
              </Carousel.Caption>
              <Carousel.Item>
                  <img
                    className="img-fluid"
                    src={ CaroselImg3 }
                  />
              </Carousel.Item>
              <Carousel.Caption>
                 
              </Carousel.Caption>
          </Carousel>
            </div>
        </div>
      );
};

export default Hero;

