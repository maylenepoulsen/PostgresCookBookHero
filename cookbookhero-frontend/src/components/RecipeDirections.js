import React, { Component } from "react";

class RecipeDirections extends Component {
  render() {
    return (
      <div>
        <div>
          <h4>Ingredients:</h4>
          <div>
            <ul>
              {this.props.recipe.ingredients.map((ingredient, idx) => (
                <li key={idx}>{ingredient.unit.concat(' ', ingredient.name)}</li>
              ))}
            </ul>
          </div>
        </div>
        <h4>Instructions:</h4>
        <div>
        {this.props.recipe.directions}
        </div>
      </div>
    );
  }
}

export default RecipeDirections;
