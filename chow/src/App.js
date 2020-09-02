import React, { Component } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Search from "./components/Search";



//const API_KEY="5b7f8740fa894e699119353666730f46";
const API_KEY="993e24597fd724779edf491d15001a79";
const API_ID="47862355";


class App extends Component {

  state = {
    hits: [],
  }

  getRecipe = async(e) => {
    const recipeName = e.target.recipeName.value;
    e.preventDefault();
    const apiCall = await fetch(`https://api.edamam.com/search?q=${recipeName}&app_id=${API_ID}&app_key=${API_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`);
    //const apiCall= await fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${API_KEY}&ingredients=${recipeName}&number=10`);
    
    const data = await apiCall.json();
    //console.log(data.hits[0].recipe);
    this.setState({ hits: data.hits });
    console.log(this.state.hits);
    
    
  }

  render() {
    return (
      <div className="container-fluid">
        <Header />
        <Hero />
        <Search getRecipe={this.getRecipe}/>
        { this.state.hits.map((hit) => {
          return <p key={hit.recipe.uri}>{hit.recipe.label}</p>
        }) }
        <Footer />
      </div>
    );
  }
}

export default App;
