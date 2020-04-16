import React, { Component } from "react";
import UserNavBar from "./UserNavBar";

class Recipes extends Component {
  render() {
    console.log(this.props.allRecipes)
    if(this.props.allRecipes) {
      return (
        <div>
          <UserNavBar />
          <h2 style={{ textAlign: "center" }}>A List of all the Recipes</h2>
          <ul>
      {this.props.allRecipes.map(recipe => <li key={recipe.id}>{recipe.name}</li>)}
          </ul>
         
        </div>
      );
    } else return <div></div>
  
  }
}

export default Recipes;
