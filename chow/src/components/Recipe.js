import React from "react";


const API_KEY="993e24597fd724779edf491d15001a79";
const API_ID="47862355";


class Recipe extends React.Component {
    state = {
        activeRecipe: [],
    };

    componentDidMount = async () => {
        const title = this.props.location.state.hit;
        const req = await fetch(`https://api.edamam.com/search?q=${title}&app_id=${API_ID}&app_key=${API_KEY}&from=0&to=3`);
    //const apiCall= await fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${API_KEY}&ingredients=${recipeName}&number=10`);
    
    const res = await req.json();
    //console.log(res.hits[0]);
    this.setState({
        activeRecipe: res.hits[0].recipe
    });
    console.log(this.state.activeRecipe);
    };

    render() {
        //console.log(this.props);
        const myRecipe = this.state.activeRecipe;
        return (
            <div className="container">
                <div className="active-recipe">
                    <img className="active-img" src={myRecipe.image} alt={myRecipe.label} />
                </div>
            </div>
        );
    }
}

export default Recipe;