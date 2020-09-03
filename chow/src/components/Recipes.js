import React from "react";
import { Link } from "react-router-dom";

const Recipes = props => {
    return(
        <div className="row mt-5">
              { props.recipes.map((hit) => {
          return (
            <div key={hit.recipe.uri} className="col-md-4">
              <img src={hit.recipe.image} alt={hit.recipe.label}/>
              <h3>{hit.recipe.label}</h3>
              <button className="view">
               <Link to={{ 
                 pathname: `/recipe/${hit.recipe.label}`,
                 state: {hit: hit.recipe.label} 
                 }}
                 className="home" >
                   View Recipe
               </Link> 
              </button>
              <p>Source: <a href={hit.recipe.url}>{hit.recipe.source}</a></p>
            </div>
          );
        }) }
        </div>
    );
};

export default Recipes;


