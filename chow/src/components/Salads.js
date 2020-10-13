import React from "react";
import { Salads } from "./Products";
import AddToCart from "./AddToCart";
import Counter from "./Counter";


const SaladsPrdt = () => {
    return (
        <div className="row">
           {Salads.map((item, index) => (
                  <div className="col-sm-12 col-md-3 col-lg-4" key={index}>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="prdt img-fluid"
                      />
                      <div>
                        <p>{item.name}</p>
                      </div>
                      <div>
                        <span>from</span>
                        <span className="from mx-1">₦</span>{item.price} 
                      </div>
                      <Counter />
                      <AddToCart />
                  </div>
              ))}
        </div>
      );
};

export default SaladsPrdt;