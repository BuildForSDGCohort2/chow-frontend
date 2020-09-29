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
                <h3>My Recipes Page</h3>
                <p>Sorry dear,we are still working on this page.</p>
                <Link to="/dashboard">Go back</Link>
            </div>
          </div>
          <Footer />
        </div>
    );
};

export default MyRecipes;