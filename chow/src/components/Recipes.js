import React from "react";
import { Link } from "react-router-dom";

const Recipes = props => {
    return(
        <div className="row mt-5">
              { props.recipes.map((hit) => {
          return (
            <div key={hit.recipe.uri} className="col-md-4">
              <img className="active-img" src={hit.recipe.image} alt={hit.recipe.label}/>
              <h3>{hit.recipe.label}</h3>
               <Link to={{ 
                 pathname: `/recipe/${hit.recipe.label}`,
                 state: {hit: hit.recipe.label} 
                 }}
                 className="home" >
                   <button className="view">View Recipe</button>
               </Link> 
              <p>Source: <a href={hit.recipe.url}>{hit.recipe.source}</a></p>
            </div>
          );
        }) }
        </div>
    );
};

export default Recipes;


