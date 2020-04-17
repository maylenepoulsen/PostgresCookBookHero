import React, { Component } from "react";
import { Link } from "react-router-dom";

class RecipeList extends Component {
  handleClick = (event) => {
    this.props.addANewRecipe(event.target.id)
    // return <Redirect to={`/recipe/${event.target.id}`} />
  };

  render() {
    return (
      <div>
        <ul>
          {this.props.recipes.map((recipe) =>
            <Link key={recipe.id} to={`/recipe/${recipe.id}`}>
              <li className='recipe-list'
                id={recipe.id}
                onClick={this.handleClick}>{recipe.name}</li>
            </Link>
          )}
        </ul>
      </div>
    );
  }
}

export default RecipeList;
