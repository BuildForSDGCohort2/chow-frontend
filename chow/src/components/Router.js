import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "../App";
import Recipe from "./Recipe";
import Terms from "./Terms";
import SignUp from "./Signup";
import EmailSignUp from "./EmailSignUp";
import SignIn from "./SignIn";
import Privacy from "./Privacy";
import Dashboard from "./Dashboard";
import Order from "./Order";

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={App} exact/>
            <Route path="/recipe/:uri" component={Recipe}/>
            <Route path="/terms" component={Terms} />
            <Route path="/signup" component={SignUp}/>
            <Route path="/email-signup" component={EmailSignUp}/>
            <Route path="/signin" component={SignIn} />
            <Route path="/privacy" component={Privacy} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/order" component={Order} />
        </Switch>
    </BrowserRouter>
);

export default Router;