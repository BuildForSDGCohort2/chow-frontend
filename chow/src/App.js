import React, { Component } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = "";
  }

  render() {
    return (
      <div className="container">
        <Header />
        <Hero />
        <Footer />
      </div>
    );
  }
}

export default App;
