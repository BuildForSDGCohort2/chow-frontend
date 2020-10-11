import React, { useState } from "react";


const AddRecipeBtn = () => {

    const [text, setText] = useState( "Add to my Recipes" );
    const [dataTip, setDataTip] = useState("Add this recipe to my Recipes");
    const [error, setError] = useState("");
   

    const addRecipe = (e) => {
        e.preventDefault();
        if(localStorage.getItem("userData") !== null || sessionStorage.getItem("userData") !==null) {
            setTimeout(() => {
                setText("Recipe Added");
                setDataTip("Recipe was Added!");
                localStorage.setItem("value", "Recipe Added");
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