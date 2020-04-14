import React, { Component } from "react";
import UserNavBar from "./UserNavBar";
import SideBar from "./SideBar";
import RecipeCard from './RecipeCard';

class RecipeShow extends Component {
  render() {
    return (
      <div>
        <UserNavBar />
        <SideBar />
        <div>
          <RecipeCard />
        </div>
      </div>
    );
  }
}

export default RecipeShow;
