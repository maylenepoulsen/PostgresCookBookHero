import React, { Component } from "react";

class RecipeDirections extends Component {
  render() {
      console.log('recipe-direction', this.props.recipe.ingredients)
    return (
      <div>
        <div>
          <h4>Ingredients:</h4>
          <div>
            {/* <ul>
              {this.props.recipe.ingredients.map((ingredient) => (
                <li>{ingredient.unit}</li>
              ))}
            </ul> */}
          </div>
        </div>
        <h4>Instructions:</h4>
        {this.props.recipe.directions}
      </div>
    );
  }
}

export default RecipeDirections;
