import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const MyRecipes = () => {

  const [activeRecipe, setActiveRecipe] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
   const json = localStorage.getItem("active");
   const savedRecipes = JSON.parse(json);
   if (savedRecipes) {
     setActiveRecipe(savedRecipes);
     setIngredients(savedRecipes.ingredients);
     console.log(savedRecipes);
   }
  }, [])

  const getActiveRecipe = (e) => {
    e.preventDefault();
  }
  const cal = parseInt(activeRecipe.calories).toString();
  const calServ = (Math.round(cal / (activeRecipe.yield))).toString();
  
    return (
        <div className="container-fluid">
          <Header />
          <div className="row">
            <div className="col-sm-12 col-lg-3 myOrder text-center">
              <div className="my m-5 p-3">
                <Link onClick={getActiveRecipe} className="go">view Recipe</Link>
              </div>
            </div>
            <div className="col-sm-12 col-lg-9 text-center">
              <h3>Recent Saved Recipe</h3>
              <div className="row">
                <div className="col-sm-12 col-lg-6 my-3">
                  <img
                    className="img-fluid prdt"
                    src={activeRecipe.image}
                    alt={activeRecipe.label}
                  />
                </div>
                <div className="col-sm-12 col-lg-6 mt-5 text-justify px-5">
                  <p><b>{activeRecipe.label}</b></p>
                  <span>Source: </span>
                  <a href={activeRecipe.url}>{activeRecipe.source}</a>
                  <p>Servings: {activeRecipe.yield}</p>
                  <div className="my-1 row">
                    <span className="item1 px-5"></span>
                    <span className="item2 px-5"></span>
                    <span className="item3 px-5"></span>
                  </div>
                  <hr/>
                  <div className="details">
                    <span className="item"><b>{ingredients.length}</b> Ingredients</span>
                    <span className="item"><b className="y">{activeRecipe.totalTime ? activeRecipe.totalTime : "--"}</b> Mins</span>
                    <span className="item"><b className="y">{calServ}</b> Cal / Serv</span>
                  </div>
                  <hr/>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
    );
};

export default MyRecipes;