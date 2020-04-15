import React, { Component } from "react";

class RecipeList extends Component {
  handleClick = (event) => {
    this.props.showRecipe(event.target.id);
  };

  render() {
    return (
      <div>
        {this.props.recipes.map((recipe) => (
          <p key={recipe.id} id={recipe.id} onClick={this.handleClick}>
            {recipe.name}
          </p>
        ))}
      </div>
    );
  }
}

export default RecipeList;
