import React from "react";
import img1 from "../images/eiliv-sonas-aceron-ZuIDLSz3XLg-unsplash.jpg";

const Hero = () => {
  return (
    <div className="row">
      <div className="col-sm-12 text-center my-3">
        <img 
          src={img1}
          alt=""
          className="img-fluid"
        />
      </div>
    </div>
  )
}

export default Hero;