import React from "react";
import { Link } from "react-router-dom";


const API_KEY=process.env.REACT_APP_API_KEY;
const API_ID=process.env.REACT_APP_API_ID;


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
                { this.state.activeRecipe !== 0 &&
                    <div className="row">
                        <div className="active-recipe col-md-6">
                            <img className="active-img" src={myRecipe.image} alt={myRecipe.label} />
                        </div>
                        <div className="col-md-6">
                             <h2>{myRecipe.label}</h2>
                            <p>Source: <a href={myRecipe.url}>{myRecipe.source}</a></p>
                            <p>Serving: {myRecipe.yield}</p>
                            <p>{myRecipe.calories}<span className="mx-1">Calories</span></p>
                            <p>Total time: {myRecipe.totalTime} mins</p>
                            <h4>Ingredients:</h4>
                            <button className="view">
                                <Link to="/">Go Home</Link>
                            </button>
                        </div>
                    </div> 
                }
            </div>
        );
    }
}

export default Recipe;