import React from "react";
import Search from "./Search";
import Header from "./Header";
import Footer from "./Footer";

const Order = () => {
    return (
        <div className="container-fluid">
          <Header />
          <div className="row">
            <div className="col-sm-12 myOrder text-center mt-5">
                <h2>Order Page</h2>
               <Search 
                className="searchFood"
               />
            </div>
          </div>
          <Footer />
        </div>
    );
};

export default Order;