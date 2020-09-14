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
        const req = await fetch(`https://api.edamam.com/search?q=${title}&app_id=${API_ID}&app_key=${API_KEY}`);
    
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
                        <div className="col-md-6 pt-2 ingredients">
                             <h2>{myRecipe.label}</h2>
                            <p>Servings: {myRecipe.yield}</p>
                            <ul>
                                <li className="list a">
                                    <p><b className="x">{ingredients.length}</b> Ingredients</p>
                                </li>
                                <li className="list b">
                                    <p><b className="x">{myRecipe.totalTime ? myRecipe.totalTime : "No time"}</b> Minutes</p>
                                </li>
                                <li className="list c">
                                    <p><b className="x">{cal}</b><span className="mx-1 font-weight-light">Cal / Serv</span></p>
                                </li>
                            </ul>
                            <button className="view">
                                <Link to="/" className="home">Go Home</Link>
                            </button>
                            <div>
                                <p><b>Ingredients:</b></p>
                                <hr/>
                              {ingredients.map((ingredient,index) => 
                              <div key={index}>
                                  {ingredient.text}
                              </div>)}
                            </div>
                            <p className="text-capitalize my-3"><a className="url" href={myRecipe.url} target="_blank" rel="noopener noreferrer">Read Directions</a></p>
                            <hr/>
                        </div>
                        <div className=" col-sm-6 text-justify m-3">
                            <div>
                                <b>Nutrition</b>
                            </div>
                          {nutrientArr.map((nutrient, index) => {
                              return (
                                <div key={index}>
                                  {nutrient.map((x, index) => {
                                      const qty = parseInt((x.quantity), 10)
                                     return (
                                        <div key={index} className="nutrient">
                                            <p>{x.label}</p>
                                            <p>{qty} {x.unit}</p>
                                        </div>
                                     )
                                  })}
                              </div>
                              )
                              
                          })}
                        </div>    
                        <Footer />
                    </div> 
                }
            </div>
        );
    }
}

export default Recipe;