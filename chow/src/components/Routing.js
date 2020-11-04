import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";


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
import NotFound from "./404";


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

class Routing extends Component {
    render() {
        return (
        <Router>
            <Switch>
                <Route exact path="/" component={ App } />
                <Route exact path="/home" component={ App } />
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
                <Route component={ NotFound } />
            </Switch>
        </Router>
        );
    }
}

export default Routing;