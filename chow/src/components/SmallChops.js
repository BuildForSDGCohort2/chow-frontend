import React, { useState } from "react";
import { SmallChops } from "./Products";


const SmallChopsPrdt = () => {
  const [cart, setCart] = useState([]);
  const add = (product) => {
    setCart([...cart, product]);
  }
  return (
    <div className="row">
       <div className="col-sm-12">
            <span>{cart.length} added</span>
        </div>
       {SmallChops.map((item, index) => (
              <div className="col-sm-12 col-md-3 col-lg-4" key={index}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="prdt img-fluid"
                  />
                  <div>
                    <p>{item.name}</p>
                  </div>
                  <div className="prdtFooter">
                    <span>from</span>
                    <span className="from mx-1">₦</span>{item.price}
                  </div>
                  <button onClick={() => add()}>Add to Cart</button>
              </div>
          ))}
    </div>
  );
};


export default SmallChopsPrdt;