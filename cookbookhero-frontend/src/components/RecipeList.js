import React, { Component } from "react";

class RecipeList extends Component {
  handleClick = (event) => {
    this.props.showRecipe(event.target.id);
  };

  render() {
    return (
      <div>
        <ul>
        {this.props.recipes.map((recipe) => (
          <li className='recipe-list' key={recipe.id} id={recipe.id} onClick={this.handleClick}>
            {recipe.name}
          </li>
        ))}
        </ul>
      </div>
    );
  }
}

export default RecipeList;
