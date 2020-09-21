import React from 'react';
import { useForm } from "react-hook-form";


const Search = (props) => {
    const { register, handleSubmit, errors } = useForm()
    return(
        <div className="search">
            <form className="form" onSubmit={props.getRecipe} >
                <input 
                    type="text"
                    name="recipeName"
                    id="search"
                    placeholder="E.g Chicken"
                    ref={ register({
                        required: "Search field is required",
                        pattern: {
                            value: /^[A-Za-z]+$/i,
                            message: "Search needs to be Upper or lower case letters"
                        }
                    })}
                    style={{ borderColor: errors.recipeName && "red" }}
                />
                { errors.recipeName && <p>{errors.recipeName.message}</p> }
                <button className="btn" type="submit">Search Recipes</button>
            </form>
        </div>
    );
};


export default Search;
