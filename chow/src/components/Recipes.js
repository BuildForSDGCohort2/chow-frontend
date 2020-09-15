import React from "react";
import { Link } from "react-router-dom";



const Recipes = (props) => {
    return(
        <div className="row">
              { (props.recipes || []).map((hit, index) => {
          return (
            <div key={index} className="col-md-4">
              <img className="active-img" src={hit.recipe.image} alt={hit.recipe.label}/>
              <h3>
                {hit.recipe.label.length < 20 ? `${hit.recipe.label}` : `${hit.recipe.label.substring(0, 25)} . . .`}
              </h3>
               <Link to={{ 
                 pathname: `/recipe/${hit.recipe.label}`,
                 state: {hit: hit.recipe.label} 
                 }}
                 className="home" >
                   <button className="view">View Recipe</button>
               </Link> 
              <p>Source: <a href={hit.recipe.url}>{hit.recipe.source}</a></p>
              <div>
              <p>Recipe tags:</p>
              <div>{hit.recipe.dietLabels.map((label, index) => {
                return (
                  <ul key={index} className="diet">
                    <li className="dietLabel">{label}</li>
                  </ul>
                )
              })}</div>
              
              </div>
            </div>
          );
        }) }
        </div>
    );
};

export default Recipes;


