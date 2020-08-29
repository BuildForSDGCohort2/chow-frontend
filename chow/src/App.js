import React, { Component } from "react";
import "./App.css";
import Footer from "./components/Footer";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = "";
  }

  render() {
    return (
      <div className="container">
        <h1>choW</h1>
        <Footer />
      </div>
    );
  }
}

export default App;
