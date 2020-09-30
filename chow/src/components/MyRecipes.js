import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const MyRecipes = () => {
    return (
        <div className="container-fluid">
          <Header />
          <div className="row">
            <div className="col-sm-12 myOrder text-center mt-5">
              <div className="my m-5 p-3">
              <h3>My Recipes Page</h3>
                <p>Sorry dear,we are still working on this page.</p>
                <Link to="/dashboard" className="go">Go back</Link>
              </div>
            </div>
          </div>
          <Footer />
        </div>
    );
};

export default MyRecipes;