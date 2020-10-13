import React from "react";
import AddToCart from "./AddToCart";
import Counter from "./Counter";
import { Food } from "./Products";


const FoodPrdt = () => {
   
    return (
        <div className="row">
            {Food.map((item, index) => (
                <div className="col-sm-12 col-md-3 col-lg-4 card" key={index}>
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

export default FoodPrdt;