import React from 'react';


const Search = (props) => {
    return(
        <div className="search">
            <form className="form" onSubmit={props.getRecipe} >
                <input 
                    type="text"
                    name="recipeName"
                    id="search"
                    placeholder="E.g Chicken"
                />
                <button className="btn">Search Recipes</button>
            </form>
        </div>
    );
}


export default Search;
