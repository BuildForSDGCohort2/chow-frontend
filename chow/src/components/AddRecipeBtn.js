import React, { useState } from "react";


const AddRecipeBtn = () => {

    const [text, setText] = useState( "Add to my Recipes" );
    const [dataTip, setDataTip] = useState("Add this recipe to my Recipes");

    const addRecipe = (e) => {
        e.preventDefault();
        setTimeout(() => {
            setText("Recipe Added");
            setDataTip("Recipe was Added!");
            localStorage.setItem("value", "Recipe Added");
            
        }, 1500);
    };
    
    return (
        <button
          className="home view mx-2"
          data-tip={dataTip}
          onClick={addRecipe}
          >
          {text}
          </button>
    );
}


export default AddRecipeBtn;