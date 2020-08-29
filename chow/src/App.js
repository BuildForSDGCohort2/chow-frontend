import React, { Component } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = "";
  }

  render() {
    return (
      <div className="container">
        <Header />
        <h1>choW</h1>
        <Footer />
      </div>
    );
  }
}

export default App;
