import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Dashboard = () => {
  return (
      <div className="container-fluid text-center">
          <Header />
          <div className="row">
              <div className="col-sm-12">
                <h2>Dashboard</h2>
              </div>
              <div className="col-sm-4">
                <p>Saved Recipes</p>
                <ul>
                    <p>Meal Planner</p>
                    <li>Breakfast</li>
                    <li>Lunch</li>
                    <li>Dinner</li>
                </ul>
                <p>Reviews</p>
                <p>Order Food</p>
              </div>
          </div>
          <Footer />
      </div>
  );
}

export default Dashboard;