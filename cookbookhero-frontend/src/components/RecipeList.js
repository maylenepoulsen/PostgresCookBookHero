import React, { Component } from "react";
import { Link } from "react-router-dom";

class RecipeList extends Component {
  handleClick = (event) => {
    this.props.addANewRecipe(event.target.id)

  };

  render() {
    return (
      <div>
        <ul>
        {this.props.recipes.map((recipe) =><Link to={`/recipe/${recipe.id}`} key={recipe.id}> <li className='recipe-list' key={recipe.id} id={recipe.id} onClick={this.handleClick}>{recipe.name}</li></Link>)}
        </ul>
      </div>
    );
  }
}

export default RecipeList;
