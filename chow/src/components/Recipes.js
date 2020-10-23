import React from "react";
import { Link } from "react-router-dom";
import ReactToolTip from "react-tooltip";



const Recipes = (props) => {
    return(
        <div className="row">
              { (props.recipes || []).map((hit, index) => {
          return (
            <div key={index} className="col-md-4 col-lg-3 col-sm-12">
              <Link to={{ 
                 pathname: `/recipe/${hit.recipe.label}`,
                 state: {hit: hit.recipe.label} 
                 }}>
                <img
                  className="active-img"
                  src={hit.recipe.image}
                  alt={hit.recipe.label}
                />
              </Link>
              
              <h5 className="mt-4">
                {hit.recipe.label.length < 20 ? `${hit.recipe.label}` : `${hit.recipe.label.substring(0, 25)} . . .`}
              </h5>
               <Link to={{ 
                 pathname: `/recipe/${hit.recipe.label}`,
                 state: {hit: hit.recipe.label} 
                 }}
                 className="home" >
                   <button className="view">View recipe</button>
               </Link>
              <p>Source: <a href={hit.recipe.url}>{hit.recipe.source}</a></p>
              <div>
              </div>
              <ReactToolTip
                type="dark"
                place="top"
                effect="solid"
                backgroundColor="#000"
                borderColor="#fff"
              />
            </div>
          );
        }) }
        </div>
    );
};

export default Recipes;


