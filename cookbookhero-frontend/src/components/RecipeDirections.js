import React, { Component } from "react";

class RecipeDirections extends Component {
  render() {
    console.log(this.props.recipe)
    return (
      <div className='instructions'>
        <div>
          <h4>Ingredients:</h4>
          <div>
            <ul>
              {this.props.recipe.ingredients.map((ingredient, idx) => (<li className='ingredient-list' key={idx}>{ingredient.unit.concat(' ', ingredient.name)}</li>))}
            </ul>
          </div>
        </div>
        <div>
        <h4>Instructions:</h4>
        {this.props.recipe.directions}
        </div>
      </div>
    );
  }
}

export default RecipeDirections;
