import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import Routing from "./components/Routing";
// import { BrowserRouter as Router } from "react-router-dom";
import * as serviceWorker from './serviceWorker';
// import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Routing/>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
