import React, { Component } from "react";

class RecipeCard extends Component {



  render() {
    return (
      <div className="card">
        <div className="container">
          <h4>{this.props.recipe.name}</h4>
        </div>
        <img style={{width: "80%", height:"80%"}}src={this.props.recipe.image_url} alt="https://via.placeholder.com/300x350"></img>
      </div>
    );
  }
}

export default RecipeCard;
