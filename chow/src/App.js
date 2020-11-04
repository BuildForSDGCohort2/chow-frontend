import React, { Component } from "react";
import ReactLoading from "react-loading";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Search from "./components/Search";
import Recipes from "./components/Recipes";
import Hero from "./components/Hero";






const API_KEY=`${process.env.REACT_APP_API_KEY}`;
const API_ID=`${process.env.REACT_APP_API_ID}`;


class App extends Component {

  state = {
    hits: [],
    isLoading: true
  }

  getRecipe = async(e) => {
    const recipeName = e.target.recipeName.value;
    e.preventDefault();
    this.setState({ isLoading: true });
    const apiCall = await fetch(`https://api.edamam.com/search?q=${recipeName}&app_id=${API_ID}&app_key=${API_KEY}&from=0&to=100&time=1%2B`);
   
    
    const data = await apiCall.json();
    //console.log(data.hits[0].recipe.ingredients);
    this.setState({ 
      hits: data.hits,
      isLoading: false
    });
    // console.log(this.state.hits); 
  };

  componentDidMount() {
    const json = localStorage.getItem("hits");
    const hits = JSON.parse(json);
    this.setState({
      hits,
      isLoading: false
    });
  }
  
  componentDidUpdate() {
    const hits = JSON.stringify(this.state.hits);
    localStorage.setItem("hits", hits);
  }
  

  render() {
    return (
      <div className="container-fluid">
         <Header />
         <Hero /> 
         <Search getRecipe={this.getRecipe}/>
        {this.state.isLoading ? (
          <div>
            <ReactLoading type={"spokes"} color={"#f20e0e"}  className="spinner" height={ 25 } width={ 25 } />
          </div>
        ) : (
          <Recipes recipes={this.state.hits} />
        )}
        <Footer />
      </div>
    );
  }
}

export default App;