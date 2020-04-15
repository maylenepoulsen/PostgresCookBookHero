import React, { Component } from "react";
import UserNavBar from "./UserNavBar";
import RecipeCard from './RecipeCard';

class RecipeShow extends Component {
  render() {
    return (
      <div>
        <UserNavBar />
        <div>
          <RecipeCard />
        </div>
      </div>
    );
  }
}

export default RecipeShow;
