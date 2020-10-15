import React from "react";
import { useCart } from "use-cart";

import products from "./Products";

const getItemData = (id) => {
    return products.find(d => d.id === id);
};

const CartLineItem = ({ item }) => {
    const { addItem, removeItem, removeLineItem } = useCart();
    const productData = getItemData(item.id);
    return (
        <div>
            {productData.name}<button onClick={() => removeItem(item.id)}>x</button>
            {item.quantity} @ N{productData.price}
            <button onClick={() => addItem(item.id)}>+</button>
            <button onClick={() => removeLineItem(item.id)}>x</button>
        </div>
    );
};

const Cart = () => {
    const { clearCart, items, lineItemsCount } = useCart();

    return (
        <div>
            <h3>Cart: {lineItemsCount}</h3>
            {items.map(item => (
                <div>
                    <CartLineItem key={item.id} item={item} />
                    <hr/>
                    <button onClick={clearCart}>Empty</button>
                    {/*<button onClick={() => console.log(items)}>Checkout</button>*/}
                </div>
            ))}
        </div>
    );
};

export default Cart;