import React, { Component } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Search from "./components/Search";
import Recipes from "./components/Recipes";


const API_KEY="5b7f8740fa894e699119353666730f46";


class App extends Component {

  state = {
    recipes: [],
  }

  getRecipe = async(e) => {
    const recipeName = e.target.recipeName.value;
    e.preventDefault();
    const apiCall= await fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${API_KEY}&ingredients=${recipeName}&number=10`);
    
    const data = await apiCall.json();
    //console.log(data[0].title);
    this.setState({ recipes: data });
    console.log(this.state.recipes);
  }

  render() {
    return (
      <div className="container-fluid">
        <Header />
        <Hero />
        <Search getRecipe={this.getRecipe}/>
        <Recipes recipes={this.state.recipes}/>
        <Footer />
      </div>
    );
  }
}

export default App;
