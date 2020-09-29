import React from "react";
import { Link } from "react-router-dom";
import ReactToolTip from "react-tooltip";
import Header from "./Header";
import Footer from "./Footer";


const MealIdeas = () => {
    return (
        <div className="container-fluid">
          <Header />
          <div className="row">
            <div className="col-sm-6 myOrder"></div>
            <div className="col-sm-6 meal-plan text-justify mt-5">
                <h2 className="text-center">Create Your Plan</h2>
                <p>Ready to choose your meals! Use the + icon to add recipes to your plan.For exciting new meals personalized to your taste preferences,check Your Recommendations.
                  Or check your saved recipes.
                </p>
                <div className="my-3">
                  <Link
                    to="/meal-planning"
                    className="home view"
                    data-tip="Go Back"
                    >Go Back</Link>
                    <ReactToolTip
                      place="right"
                      type="dark"
                      effect="solid"
                    />
                </div>
            </div>
          </div>
          <Footer />
        </div>
    );
};

export default MealIdeas;