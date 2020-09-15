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
        totalDaily: {},
        healthLabels: [],
        cautions: []
    };

    componentDidMount = async () => {
      const title = this.props.location.state.hit;
      const req = await fetch(`https://api.edamam.com/search?q=${title}&app_id=${API_ID}&app_key=${API_KEY}`);
  
      const res = await req.json();
      const json = localStorage.getItem("activeRecipe");
      const active = JSON.parse(json);
      this.setState({
          active,
          activeRecipe: res.hits[0].recipe,
          ingredients: res.hits[0].recipe.ingredients,
          totalNutrients: res.hits[0].recipe.totalNutrients,
          totalDaily: res.hits[0].recipe.totalDaily,
          healthLabels: res.hits[0].recipe.healthLabels,
          cautions: res.hits[0].recipe.cautions
      });
    };

    componentDidUpdate() {
        const active = JSON.stringify(this.state.active);
        localStorage.setItem("active", active);
    }


    render() {
        //console.log(this.props);
        const myRecipe = this.state.activeRecipe;
        const cal = parseInt(myRecipe.calories).toString();
        const calServ = (cal / (myRecipe.yield)).toString();
        const ingredients = this.state.ingredients;
        const totalNutrients = this.state.totalNutrients;
        const totalDaily = this.state.totalDaily;
        const nutrientArr = Object.entries(totalNutrients);
        const dailyArr = Object.entries(totalDaily);
        const dailys = dailyArr.flat();
        const nutrients = nutrientArr.flat();
        const healthLabels = this.state.healthLabels;
        const cautions = this.state.cautions;
        // console.log(nutrients);
        // console.log(nutrientArr)
        // console.log(dailys);
        console.log(cautions);
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
                            <div>Servings: {myRecipe.yield}</div>
                            <ul>
                                <li className="list a">
                                    <p><b className="x">{ingredients.length}</b> Ingredients</p>
                                </li>
                                <li className="list b">
                                    <p><b className="x">{myRecipe.totalTime ? myRecipe.totalTime : "No time"}</b> Minutes</p>
                                </li>
                                <li className="list c">
                                    <p><b className="x">{calServ}</b> Cal per Serv</p>
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
                            <div className="row m-3">
                                <p className="health">Health</p>
                                {healthLabels.map((elem, index) => 
                                        <ul key={index}>
                                            <li>{elem}</li>
                                        </ul>
                                    )}
                            </div>
                            <div className="row m-3">
                                <p className="cautions">Caution</p>
                                {cautions.map((elem, index) => 
                                    <ul key={index}>
                                        <li>{elem}</li>
                                    </ul>
                                    )}
                            </div>
                            <hr/>
                        </div>
                        <div className="col-sm-6 col-md-4 text-justify m-3">
                            <h3>Nutrition</h3><hr/>
                            {nutrients.map((elem, index) => {
                                return (
                                    <div key={index}>
                                        <p><b className="nut">{elem.label}</b></p>
                                        <span>{elem.quantity} {elem.unit}</span>
                                    </div>
                                )
                            })}
                        </div> 
                        <div className="col-sm-6 col-md-4 text-justify m-3">
                            <h3>Daily recommended %</h3><hr/>
                            {dailys.map((elem, index) => {
                                return (
                                    <div key={index}>
                                        <p><b className="nut">{elem.label}</b></p>
                                        <span>{elem.quantity} {elem.unit}</span>
                                    </div>
                                )
                            })}
                            <h4>Health</h4>
                        </div>  
                        <Footer />
                    </div> 
                }
            </div>
        );
    }
}

export default Recipe;