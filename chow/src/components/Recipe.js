import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";





const API_KEY=process.env.REACT_APP_API_KEY;
const API_ID=process.env.REACT_APP_API_ID;


class Recipe extends React.Component {
    state = {
        activeRecipe: [],
        ingredients: [],
        totalNutrients: {},
    };

    componentDidMount = async () => {
        const title = this.props.location.state.hit;
        const req = await fetch(`https://api.edamam.com/search?q=${title}&app_id=${API_ID}&app_key=${API_KEY}&from=0&to=3`);
    //const apiCall= await fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${API_KEY}&ingredients=${recipeName}&number=10`);
    
    const res = await req.json();
    //console.log(res.hits[0]);
    this.setState({
        activeRecipe: res.hits[0].recipe,
        ingredients: res.hits[0].recipe.ingredients,
        totalNutrients: res.hits[0].recipe.totalNutrients,
    });
    //console.log(this.state.activeRecipe);
    // console.log(this.state.totalNutrients);
    };

    render() {
        //console.log(this.props);
        const myRecipe = this.state.activeRecipe;
        const cal = Math.ceil(myRecipe.calories);
        const ingredients = this.state.ingredients;
        const totalNutrients = this.state.totalNutrients;
        const nutrientArr = Object.entries(totalNutrients);
        return (
            <div className="container-fluid">
                { this.state.activeRecipe !== 0 && 
                    <div className="row">
                        <Header />
                        <div className="active-recipe col-md-6 p-3">
                            <img className="active-img" src={myRecipe.image} alt={myRecipe.label} />
                        </div>
                        <div className="col-md-6 pt-2">
                             <h2>{myRecipe.label}</h2>
                            <p className="text-uppercase"><a className="url" href={myRecipe.url}>{myRecipe.source}</a></p>
                            <p>Serving: {myRecipe.yield}</p>
                            <p className="cal">{cal}<span className="mx-1 font-weight-light">Calories</span></p>
                            <p>Total time: {myRecipe.totalTime} mins</p>
                           
                        </div>
                        <div className="col-sm-12 text-center">
                            <div><b>Ingredients</b>
                              {ingredients.map((ingredient,index) => 
                              <div key={index}>
                                  {ingredient.text}
                                  <p>aprox wght: {Math.ceil(ingredient.weight)} g</p>
                                  <img className="ingredient"  src={ingredient.image} alt="" />
                              </div>)}
                            </div>
                        </div>
                        <div className="row text-center">
                            <div><b>Total Nutrients</b>
                              {nutrientArr.map((nutrient, index) => {
                                  return (
                                    <div key={index}>
                                      {nutrient.map((x, index) => {
                                         return (
                                            <div key={index} className="nutrient col-sm-4">
                                                <p>{x.label}</p>
                                                <p>{x.quantity}</p>
                                                <p>{x.unit}</p>
                                            </div>
                                         )
                                      })}
                                  </div>
                                  )
                                  
                              })}
                            </div>    
                        </div>
                        <button className="view">
                            <Link to="/" className="home">Go Home</Link>
                        </button>
                        <Footer />
                    </div> 
                }
            </div>
        );
    }
}

export default Recipe;