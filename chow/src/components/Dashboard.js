import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Dashboard = () => {
  return (
      <div className="container-fluid text-center dashboard">
          <Header />
          <div className="row">
              <div className="col-sm-12 my-5 text-center">
                <form>
                  <input
                    name="recipeName"
                    type="text"
                    className="userSearch"
                    placeholder="Search Recipes"
                    required
                  />
                  <button className="btn btn-primary mealBtn">Search Recipes</button>
                </form>
              </div>
          </div>
          <div className="row meal">
              <div className="col-lg-3 col-md-4 col-sm-12 planner m-4 p-3">
                <h3 className="py-2">Meal Planner</h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="39" viewBox="0 0 52 59"><g fill="none" fill-rule="evenodd" stroke="#3b5998" stroke-width="2"><g transform="translate(1 1)"><rect width="46" height="57" x="4" rx="4"></rect><path stroke-linecap="round" d="M0 14h8M0 44h8"></path></g><g transform="translate(14 11)"><rect width="8" height="8" rx="2"></rect><rect width="8" height="8" y="15" rx="2"></rect><rect width="8" height="8" y="30" rx="2"></rect><path stroke-linecap="round" d="M13.672 4h13.345M13.672 19h13.345M13.672 34h13.345"></path></g></g></svg>
                <button className="btn btn-primary mealBtn mt-3">Make my Plan</button>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-12 order m-4">
                <h3>Order Food</h3>
                <button className="btn btn-priamary mealBtn">Place Order</button>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-12 myRecipes m-4">
                <h3>My Recipes</h3>
                <button className="btn btn-priamary mealBtn mt-4">View Recipes</button>
              </div>
          </div>
          <Footer />
      </div>
  );
}

export default Dashboard;