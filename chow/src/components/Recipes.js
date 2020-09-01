import React from "react";

const Recipes = (props) => {
    return(
        <div className="row">
                {props.recipes.map((recipe) => {
                return (
                  <div key={recipe.id} className="col-md-4">
                    <img src={recipe.image} alt={recipe.title} className="img-fluid"/>
                    <div className="recipeTitle">
                        <h3>{recipe.title}</h3>
                        <p className="likes"><span className="like">Likes:</span> {recipe.likes}</p>
                    </div>
                  </div>
                );
              })}
        </div>
    );
};

export default Recipes;