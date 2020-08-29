import React ,{ Component } from 'react';
import heroImg from '../images/heroImg.jpg';



class Hero extends Component {
    render() {
        return(
          <div className="hero">
              <img src={heroImg} />
              <p>Get great recipes anywhere,anytime ...</p>
          </div>
        );
    }
}

export default Hero;
