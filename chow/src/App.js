import React, { Component } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Search from "./components/Search";


class App extends Component {

  getRecipe = (e) => {
    const recipeName = e.target.recipeName.value;
    e.preventDefault();
    console.log(recipeName);
  }

  render() {
    return (
      <div className="container">
        <Header />
        <Hero />
        <Search getRecipe={this.getRecipe}/>
        <Footer />
      </div>
    );
  }
}

export default App;
