import React, { Component } from 'react';


class Search extends Component {
    render() {
        return(
            <div className="search">
                <input 
                    type="text"
                    placeholder="E.g Chicken"
                />
                <button>Search Recipes</button>
            </div>
        );
    }
}

export default Search;