import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Order = () => {
    return (
        <div className="container-fluid">
          <Header />
          <div className="row">
            <div className="col-sm-12 myOrder text-center">
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