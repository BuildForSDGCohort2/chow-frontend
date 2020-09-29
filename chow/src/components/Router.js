import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import App from "../App";
import Recipe from "./Recipe";
import Terms from "./Terms";
import SignUp from "./Signup";
import EmailSignUp from "./EmailSignUp";
import SignIn from "./SignIn";
import Privacy from "./Privacy";
import Dashboard from "./Dashboard";
import Order from "./Order";
import MyRecipes from "./MyRecipes";
import MealPlanner from "./MealPlanner";


const isLoggedIn = () => {
    return localStorage.getItem("userData") !== null || sessionStorage.getItem("userData") !== null;
}

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
  />
};

class Router extends Component {
    render() {
        return (
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
            <SecureRoute path="/mealplanner" component={ MealPlanner } />
            <SecureRoute path="/order" component={ Order } />
            <SecureRoute path="/dashboard" component={ Dashboard } />
        </Switch>
    </BrowserRouter>
        )
    }
};

export default Router;