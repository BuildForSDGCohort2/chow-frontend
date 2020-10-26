import React, { useState, useEffect } from "react";


const AddRecipeBtn = () => {

    const [text, setText] = useState( "Add to my Recipes" );
    const [dataTip, setDataTip] = useState("Add this recipe to my Recipes");
    const [error, setError] = useState("");
    const [savedRecipe, setSavedRecipe] = useState([]);

    
    useEffect(() => {
        const savedRecipes = JSON.parse(localStorage.getItem("active"));
        return (
            savedRecipes || [...savedRecipe, savedRecipes]
        )
    }, [savedRecipe])

    const addRecipe = (e, recipe) => {
        e.preventDefault();
        if(localStorage.getItem("userData") !== null || sessionStorage.getItem("userData") !==null) {
            setTimeout(() => {
                console.log("Recipe Saved")
                setSavedRecipe([...savedRecipe, {recipe}]);
                setText("Recipe Added");
                setDataTip("Recipe was Added!");
                
            }, 1500);
        } else {
            return (
                setError("Please Sign in to add this Recipe")
            );
        }
    };

    return (
        <span>
             <button
          className="home view mx-2"
          data-tip={dataTip}
          onClick={addRecipe}
          >
          {text}
          </button>
          <span className="error px-3">{error}</span>
        </span>
    );
}


export default AddRecipeBtn;