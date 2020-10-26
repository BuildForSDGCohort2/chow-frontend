import React, { useState } from "react";



const AddToCart = () => {
  const [text, setText] = useState("Add to Cart");
  const [cart, setCart] = useState([]);
  
 

  const addToCart = (e,product) => {
    e.preventDefault();
    setTimeout(() => {
      setText("Added to Cart");
      setCart([...cart, product]);
      console.log("Added to cart");
    }, 2000);
};

    return (
      <div className="">
        <button
          className="add"
          onClick={addToCart}
          >
          {text}
        </button>
      </div>
    );
};

export default AddToCart;