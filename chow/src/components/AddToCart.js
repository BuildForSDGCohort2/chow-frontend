import React, { useState } from "react";



const AddToCart = () => {
  const [cart, setCart] = useState("Add to Cart");

  const addToCart = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setCart("Added to Cart");
    }, 2000);
};

    return (
      <div className="">
        <button
          className="add"
          onClick={addToCart}
          >
          {cart}
        </button>
      </div>
    );
};

export default AddToCart;