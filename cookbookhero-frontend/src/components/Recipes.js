import React, { Component } from "react";
import UserNavBar from "./UserNavBar";

class Recipes extends Component {
  render() {
    return (
      <div>
        <UserNavBar />
        <h2 style={{ textAlign: "center" }}>A List of all the Recipes</h2>
      </div>
    );
  }
}

export default Recipes;
