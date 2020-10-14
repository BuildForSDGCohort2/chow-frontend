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

  const cal = parseInt(activeRecipe.calories).toString();
  const calServ = (Math.round(cal / (activeRecipe.yield))).toString();
 
  
    return (
        <div className="container-fluid">
          <Header />
          <div className="row">
            <div className="col-sm-12 col-lg-3 myOrder text-center">
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
                  <div>
                    <Link to="/" className="  home view">View More</Link>
                  </div>
                  <p>Servings: {activeRecipe.yield}</p>
                  <hr/>
                  <div className="my-2 row">
                    <span className="item1 px-5"></span>
                    <span className="item2 px-5"></span>
                    <span className="item3 px-5"></span>
                  </div>
                  <div className="details">
                    <span className="item"><b>{ingredients.length}</b> Ingredients</span>
                    <span className="item"><b className="y">{activeRecipe.totalTime ? activeRecipe.totalTime : "--"}</b> Mins</span>
                    <span className="item"><b className="y">{calServ}</b> Cal/Serv</span>
                  </div>
                  <hr/>
                  <div>
                    <h6>Ingredients</h6>
                    <hr/>
                    {ingredients.map((item, index) => (
                      <div key={index}>
                        <p>{item.text}</p>
                      </div>
                    ))}
                  </div>
                  <hr/>
                  <div>
                    <a className="url px-4 py-1" href={activeRecipe.url}>Directions</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
    );
};

export default MyRecipes;