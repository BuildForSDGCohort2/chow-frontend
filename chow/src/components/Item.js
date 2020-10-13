import React from "react";
import { useCart } from "use-cart";

const Item = ({ image, name, price, id }) => {
    const { additem } = useCart();
    return (
        <div>
            <img src={image} alt="" />
            <p>{name} - N{price}</p>
            <button onClick={() => additem(id)}>Add to Cart</button>
        </div>
    );
};

export default Item;