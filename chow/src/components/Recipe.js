import React from "react";
import { Link } from "react-router-dom";
import { 
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    PinterestShareButton,
    PinterestIcon
  } from "react-share";
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
        cautions: [],
        dietLabels: []
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
          cautions: res.hits[0].recipe.cautions,
          dietLabels: res.hits[0].recipe.dietLabels,
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
        const dietLabels = this.state.dietLabels;
        // console.log(nutrients);
        // console.log(nutrientArr)
        // console.log(dailys);
        // console.log(cautions);
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
                            <div>Servings: {myRecipe.yield}</div>
                            <div className="ingredients">
                              <div className="m-1 a list">
                                  <span><b className="x">{ingredients.length}</b> Ingredients</span>
                              </div>
                              <div className="m-1 b list">
                                  <span><b className="x">{myRecipe.totalTime ? myRecipe.totalTime : "Time Unavailable"}</b> Mins</span>
                              </div>
                              <div className="m-1 c list">
                                  <span><b className="x">{calServ}</b></span> 
                                  <span> Cal per Serv</span>
                              </div>
                            </div>
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
                            <div className="socials">
                              <FacebookShareButton
                                url={window.location.href}
                                quote={myRecipe.label}
                                hashtag={myRecipe.label}
                                className="mx-3"
                                title="Share on Facebook"
                              >
                                <FacebookIcon 
                                    size={32}
                                    round
                                />
                                <p>Share on facebook</p>
                              </FacebookShareButton>
                              <TwitterShareButton
                                url={window.location.href}
                                title={myRecipe.label}
                                via={`https://twitter.com/intent?text=${myRecipe.label}`}
                                hashtags={["food",`${myRecipe.label}`]}
                                className="mx-3"
                              >
                                <TwitterIcon 
                                  size={32}
                                  round
                                />
                                <p>Share on twitter</p>
                              </TwitterShareButton>
                              <PinterestShareButton
                                url={window.location.href}
                                media={myRecipe.image}
                                description={myRecipe.label}
                                className="mx-3"
                                title="Share on Pinterest"
                              >
                                <PinterestIcon 
                                  size={32}
                                  round
                                />
                                <p>Pin this recipe</p>
                              </PinterestShareButton>
                            </div>
                            <hr/>
                            <div className="row m-1">
                                <p className="tags">Recipe Tags</p>
                                {dietLabels.map((elem, index) => 
                                        <ul key={index} className="tg">
                                            <li className="tags-item m-1 py-1 px-3">{elem}</li>
                                        </ul>
                                    )}
                            </div>
                            <div className="row m-1">
                                <p className="health">Health</p>
                                    {healthLabels.map((elem, index) => 
                                        <ul key={index} className="he">
                                            <li className="health-item m-1 py-1 px-3">{elem}</li>
                                        </ul>
                                    )}
                            </div>
                            <div className="row m-1">
                                <p className="cautions">Caution</p>
                                {cautions.map((elem, index) => 
                                    <ul key={index} className="ca">
                                        <li className="cautions-item m-1 py-1 px-3">{elem}</li>
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
                        </div>  
                        <Footer />
                    </div> 
                }
            </div>
        );
    }
}

export default Recipe;
