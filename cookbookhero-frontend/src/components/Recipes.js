import React, { Component } from "react";
import SideBar from "./SideBar";
import UserNavBar from "./UserNavBar";

class Recipes extends Component {
  render() {
    return (
      <div>
        <UserNavBar />
        <SideBar />

        <h2 style={{ textAlign: "center" }}>A List of all the Recipes</h2>
      </div>
    );
  }
}

export default Recipes;
