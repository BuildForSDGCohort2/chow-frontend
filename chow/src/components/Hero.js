import React ,{ Component } from 'react';
import heroImg from '../images/heroImg.jpg';
import Search from './Search';



class Hero extends Component {
    render() {
        return(
          <div className="hero">
              <img src={heroImg} />
              <p>Get great recipes anywhere,anytime ...</p>
              <Search />
          </div>
        );
    }
}

export default Hero;
