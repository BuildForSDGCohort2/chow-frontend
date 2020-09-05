import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "../App";
import Recipe from "./Recipe";
import SignUp from "./Signup";
import EmailSignUp from "./EmailSignUp";
import SignIn from "./SignIn";

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={App} exact/>
            <Route path="/recipe/:uri" component={Recipe}/>
            <Route path="/signup" component={SignUp}/>
            <Route path="/email-signup" component={EmailSignUp}/>
            <Route path="/signin" component={SignIn} />
        </Switch>
    </BrowserRouter>
);

export default Router;