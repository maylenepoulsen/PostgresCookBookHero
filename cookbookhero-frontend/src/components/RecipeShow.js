import React, { Component } from "react";
import UserNavBar from "./UserNavBar";
import RecipeCard from "./RecipeCard";
import RecipeDirections from "./RecipeDirections";
import Note from "./Note";

class RecipeShow extends Component {
  handleClick = () => {
    const recipeId = this.props.showRecipe.id;
    fetch(`http://localhost:3001/api/v1/recipes/${recipeId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    this.props.deleteRecipe(recipeId);
  };

  render() {
    if (this.props.showRecipe) {
      return (
        <div>
          <UserNavBar />
          <div style={{ position: "absolute", left: "110px", top: "125px" }}>
            <RecipeCard recipe={this.props.showRecipe} />
          </div>
          <div style={{ position: "absolute", left: "110px", top: "600px" }}>
            <strong>Notes:</strong>
            <Note recipe={this.props.showRecipe} />
          </div>
          <div style={{ position: "absolute", left: "500px", top: "125px" }}>
            <RecipeDirections recipe={this.props.showRecipe} />
          </div>
          <div style={{ position: 'absolute', left: '110px', top: '720px'}}>
            <button className='button' onClick={this.handleClick}>Delete Recipe</button>
          </div>
        </div>
      );
    } else return <div></div>;
  }
}

export default RecipeShow;
