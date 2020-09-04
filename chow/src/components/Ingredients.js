import React from "react";


const Ingredients = props => {
    return (
        <div className="row">
        {props.ingredients.map((ingredient, index) => {
            return (
                <ol key={index}>
                    <li>{ingredient}</li>
                </ol>
            )
        })}
    </div>
    )
}

export default Ingredients;