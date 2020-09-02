import React from "react";

const Recipes = props => {
    return(
        <div className="row mt-5">
              { props.recipes.map((hit) => {
          return (
            <div key={hit.recipe.uri} className="col-md-4">
              <img src={hit.recipe.image} alt={hit.recipe.label}/>
              <h3>{hit.recipe.label}</h3>
              <button className="view">View Recipe</button>
              <p>Source: <a href={hit.recipe.url}>{hit.recipe.source}</a></p>
            </div>
          );
        }) }
        </div>
    );
};

export default Recipes;


