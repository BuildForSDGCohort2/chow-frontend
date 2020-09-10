import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "../App";
import Recipe from "./Recipe";
import Terms from "./Terms";

const Router = () => {
    <BrowserRouter>
        <Switch>
            <Route path="/" component={App} exact/>
            <Route path="/recipe/:uri" component={Recipe}/>
            <Route path="/terms" component={Terms} />
        </Switch>
    </BrowserRouter>;
};

export default Router;