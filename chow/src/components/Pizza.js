import React, { useState }  from "react";
import { Pizza } from "./Products";



const PizzaPrdt = () => {
  const [cart, setCart] = useState([]);
  const [text] = useState("Add to Cart");
  const add = (product) => {
    setCart([...cart, product]);
  }
    return (
      <div className="row">
        <div className="col-sm-12">
            <span>{cart.length} added</span>
        </div>
         {Pizza.map((item, index) => (
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
                    <button onClick={() => add()} className="add">{text}</button>
                </div>
            ))}
      </div>
    );
}

export default PizzaPrdt;