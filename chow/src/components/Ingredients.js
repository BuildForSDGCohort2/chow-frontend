import React from "react";


const Ingredients = props => {
    return (
        <ol>
            {props.ingredients.map((ingredient) => {
                <li>{ingredient.text}</li>
            })}
        </ol>
    )
}

export default Ingredients;