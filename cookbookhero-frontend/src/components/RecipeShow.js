import React, { Component } from "react";
import UserNavBar from "./UserNavBar";
import RecipeCard from "./RecipeCard";
import RecipeDirections from "./RecipeDirections";
import Note from "./Note";

class RecipeShow extends Component {
  render() {
   if(this.props.showRecipe) {
    return (
      <div>
        <UserNavBar />
        <div style={{ position: "relative", left: "-400px", top: "60px" }}>
          <RecipeCard recipe={this.props.showRecipe} />
        </div>
        <div style={{ position: "relative", left: "110px", top: "85px" }}>
          <strong>Notes:</strong>
          <Note recipe={this.props.showRecipe} />
        </div>
        <div style={{ position: "relative", left: "250px", top: "-450px" }}>
          <RecipeDirections recipe={this.props.showRecipe} />
        </div>
      </div>
    );
  } else return <div></div>
  }
}

export default RecipeShow;
