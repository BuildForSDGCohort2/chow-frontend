import React, { Component, Suspense } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import ReactLoading from "react-loading";

import App from "../App";
import Recipe from "./Recipe";
import Terms from "./Terms";
import Privacy from "./Privacy";
import SignUp from "./Signup";
import SignIn from "./SignIn";
import EmailSignUp from "./EmailSignUp";
import MyRecipes from "./MyRecipes";
import MealPlanner from "./MealPlanner";
import MealIdeas from "./MealIdeas";
import Order from "./Order";
import Dashboard from "./Dashboard";


const isLoggedIn = () => {
    return localStorage.getItem("userData") !== null || sessionStorage.getItem("userData") !== null;
};

const SecureRoute = ({ component: Component, ...rest }) => {
   return <Route
    {...rest}
    render={(props) =>
        isLoggedIn() === true ? (
            <Component {...props} />
        ): (
            <Redirect to="/signup" />
        )
    }
  />;
};

class Router extends Component {
    render() {
        return (
  <Suspense fallback={<div className="loader m-5">
    <ReactLoading type={"spokes"} color={"#f20e0e"}  className="spinner" height={ 25 } width={ 25 } />
    <h3>chowing....</h3>
  </div>}>
    <BrowserRouter>
        <Switch>
            <Route path="/" component={ App } exact/>
            <Route path="/recipe/:uri" component={ Recipe }/>
            <Route path="/terms" component={ Terms } />
            <Route path="/signup" component={ SignUp }/>
            <Route path="/email-signup" component={ EmailSignUp }/>
            <Route path="/signin" component={ SignIn } />
            <Route path="/privacy" component={ Privacy } />

            <SecureRoute path="/myrecipes" component={ MyRecipes } />
            <SecureRoute path="/meal-planning" component={ MealPlanner } />
            <SecureRoute path="/ideas" component={ MealIdeas } />
            <SecureRoute path="/order" component={ Order } />
            <SecureRoute path="/dashboard" component={ Dashboard } />
        </Switch>
    </BrowserRouter>
    </Suspense>
        );
    }
}

export default Router;