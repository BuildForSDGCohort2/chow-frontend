import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Tabs, Tab } from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer";
import DrinksPrdt from "./Drinks";
import PizzaPrdt from "./Pizza";
import SmallChopsPrdt from "./SmallChops";
import SmoothiesPrdt from "./Smoothies";
import SaladsPrdt from "./Salads";
import SnacksPrdt from "./Snacks";
import FoodPrdt from "./Food";



const Order = () => {
  const [key, setKey] = useState("food", "snacks", "salads", "smoothie", "drinks", "small chops", "pizza");
  const [cart, setCart] = useState([]);

  const addToCart = (e,product) => {
    e.preventDefault();
    setTimeout(() => {
      setCart([...cart, {...product}]);
    }, 2000);
};
  
    return (
        <div className="container-fluid">
          <Header />
          <div className="row">
            <div className="col-sm-12 col-lg-9 text-center">
              <h3 className="mb-2">Hungry?</h3>
              <p>We got your Back</p>
              <span>{cart.length}</span>
              <div className="row">
                <div className="col-sm-12">
                  <Tabs
                  id="orders"
                  activeKey={key}
                  onSelect={(k) => setKey(k)}
                  transition={false}
                  >
                    <Tab eventKey="food" title="Food" className="mx-3 food">
                      <h5 className="text-justify">Food Menu</h5>
                      <div className="row">
                        <FoodPrdt addToCart={addToCart}/>
                      </div>
                    </Tab>
                    <Tab eventKey="snacks" title="Snacks" className="mx-3">
                      <h5 className="text-justify">Snack Menu</h5>
                      <div className="row">
                        <SnacksPrdt />
                      </div>
                    </Tab>
                    <Tab eventKey="salads" title="Salads" className="mx-3">
                      <h5 className="text-justify">Salad Menu</h5>
                      <div className="row">
                        <SaladsPrdt />
                      </div>
                    </Tab>
                    <Tab eventKey="smoothie" title="Smoothies" className="mx-3">
                      <h5 className="text-justify">Smoothie Menu</h5>
                      <div className="row">
                        <SmoothiesPrdt />
                      </div>
                    </Tab>
                    <Tab eventKey="small chops" title="Small Chops" className="mx-3">
                      <h5 className="text-justify">Small Chops Menu</h5>
                      <div className="row">
                        <SmallChopsPrdt />
                      </div>
                    </Tab>
                    <Tab eventKey="pizza" title="Pizza" className="mx-3">
                      <h5 className="text-justify">Pizza Menu</h5>
                      <div className="row">
                        <PizzaPrdt />
                      </div>
                    </Tab>
                    <Tab eventKey="drinks" title="Drinks" className="mx-3">
                      <h5 className="text-justify">Drink Menu</h5>
                      <div className="row">
                        <DrinksPrdt />
                      </div>
                    </Tab>
                  </Tabs>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-lg-3 myOrder text-center">
              <div className="my m-5 p-3">
                <h3>Order Page</h3>
                <p>Sorry dear,we are still working on this page.</p>
                <Link to="/dashboard" className="go">Go Back</Link>
              
              </div>  
            </div>
          </div>
          <Footer />
        </div>
    );
};

export default Order;