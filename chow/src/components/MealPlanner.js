import React from "react";
import { Link } from "react-router-dom";
import ReactToolTip from "react-tooltip";
import Header from "./Header";
import Footer from "./Footer";

const MealPlanner = () => {
    return (
        <div className="container-fluid">
          <Header />
          <div className="row">
            <div className="col-sm-6 myOrder"></div>
            <div className="col-sm-6 meal-plan text-center mt-5">
                <h2>Meal Planner</h2>
                <h5 className="my-3" >Your Meal Plan is Empty</h5>
                <p>Add some recipes now or <br/>Get <Link to="/ideas">personalized recommendations</Link><br/></p>
                <Link to="/ideas" className="btn btn-primary mealBtn mt-4" data-tip="Make my Plan" >Make My Plan</Link>
                <ReactToolTip
                  place="right"
                  effect="solid"
                  type="dark"
                />
                <div className="my-5">
                  <Link to="/dashboard" className="home view" data-tip="Go Back">Go Back</Link>
                </div>
            </div>
          </div>
          <Footer />
        </div>
    );
};

export default MealPlanner;