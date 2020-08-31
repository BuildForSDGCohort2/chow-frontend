import React, { Component } from 'react';



class Search extends Component {
    render() {
        return(
            <div className="search">
                <form className="form">
                    <input 
                        type="text"
                        id="search"
                        placeholder="E.g Chicken"
                    />
                    <button className="btn">Search Recipes</button>
                </form>
            </div>
        );
    }
}

export default Search;