import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

class Dashboard extends Component {

  state = {
    name: "",
    image: "",
  }

componentDidMount() {
  const data = JSON.parse(sessionStorage.getItem("userData")) || JSON.parse(localStorage.getItem("userData"));
  const data1 = data;
  // console.log(data.profileObj.imageUrl);
  // console.log(data1.name || data1.profileObj.givenName);
  this.setState({
    name: data1.name || data1.profileObj.givenName,
    // image: data1.profileObj.imageUrl,
  });
}


  render() {
    return (
      <div className="container-fluid text-center dashboard">
          <Header />
          <div className="row">
              <div className="col-sm-12 mb-5 text-center dash">
                {/*<form>
                  <input
                    name="recipeName"
                    type="text"
                    className="userSearch"
                    placeholder="Search Recipes"
                    required
                  />
                  <button className="btn btn-primary mealBtn">Search Recipes</button>
                </form>*/}
              </div>
          </div>
          <div className="row meal">
              <div className="col-sm-12 text-center">
                <p className="welcome">Welcome <span className="userName">{this.state.name}</span></p>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-12 planner m-4 p-3">
                <h3 className="py-2">Meal Planner</h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="39" viewBox="0 0 52 59"><g fill="none" fillRule="evenodd" stroke="#3b5998" strokeWidth="2"><g transform="translate(1 1)"><rect width="46" height="57" x="4" rx="4"></rect><path strokeLinecap="round" d="M0 14h8M0 44h8"></path></g><g transform="translate(14 11)"><rect width="8" height="8" rx="2"></rect><rect width="8" height="8" y="15" rx="2"></rect><rect width="8" height="8" y="30" rx="2"></rect><path strokeLinecap="round" d="M13.672 4h13.345M13.672 19h13.345M13.672 34h13.345"></path></g></g></svg>
                <Link to="/meal-planning" className="btn btn-primary mealBtn mt-4" >Make my Plan</Link>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-12 order m-4">
                <h3>Order Food</h3>
                <Link to="/order" className=" btn mealBtn mt-4" >Place Order</Link>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-12 myRecipes m-4">
                <h3>My Recipes</h3>
                <Link to="/myrecipes" className="btn btn-priamary mealBtn mt-4">View Recipes</Link>
              </div>
          </div>
          <Footer />
      </div>
  );
  }
}

export default Dashboard;