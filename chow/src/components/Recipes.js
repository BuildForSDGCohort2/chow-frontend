import React from "react";

const Recipes = (props) => {
    return(
        <div className="row ">
                {props.recipes.map((recipe) => {
                return (
                  <div key={recipe.id} className="card col-md-4">
                    <img src={recipe.image} className="card-img-top" alt={recipe.title} />
                    <div className="card-body">
                      <h3 className="card-title recipeTitle">{recipe.title}</h3>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <p className="likes"><span className="like px-3">Likes:</span>{recipe.likes}</p>
                      <a href="#" className="btn">View Recipe</a>
                    </div>
                  </div>
                );
              })}
        </div>
    );
};

export default Recipes;


