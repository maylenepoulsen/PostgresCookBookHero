import React, { Component } from "react";

class RecipeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="container">
          <h4>Recipe Name</h4>
        </div>
        <img src="https://via.placeholder.com/300x350" alt="Recipe"></img>
      </div>
    );
  }
}

export default RecipeCard;
