import React from 'react';
import { Navbar } from "react-bootstrap";

const Search = (props) => {
    return(
        <div className="search m-3">
            <form className="form" onSubmit={props.getRecipe}>
                <input 
                    type="search"
                    name="recipeName"
                    id="search"
                    placeholder="E.g Chicken"
                    required
                />
                <button className="btn" type="submit">Search Recipes</button>
            </form>
        </div>
    );
};


export default Search;
