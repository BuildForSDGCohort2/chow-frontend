import React, {  useState} from "react";
import { Food } from "./Products";

const PAGE_PRODUCTS = "products";
const PAGE_CART = "cart";

const FoodPrdt = () => {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState("products");
  const [text] = useState("Add to Cart");

  const add = (product) => {
      setCart([...cart, {...product}]);
  };
  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));
  };
  const navigateTo = (nextPage) => {
    setPage(nextPage)
  };

  const renderProducts = () => (
    <>
      {Food.map((item, index) => (
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
      ))};
    </>
  );

  const renderCart = () => (
    <>
      <div className="col-sm-12">
        <h3>Cart</h3>
      </div>
      {cart.map((item, index) => (
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
              <button className="add" onClick={() => removeFromCart(item)}>Remove</button>
          </div>
      ))};
  </>
  )
  
    return (
      <div className="row">
        <div className="col-sm-12 mb-3">
          <button onClick={() => navigateTo(PAGE_CART)} className="add_cart">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
            <span className="px-2">Go to Cart {cart.length}</span>
          </button>
          <button onClick={() => navigateTo(PAGE_PRODUCTS)} className="add_cart mx-2">View Products</button>
        </div>
        {page === PAGE_PRODUCTS && renderProducts()}
        {page === PAGE_CART && renderCart()}
      </div>
    );
};

export default FoodPrdt;