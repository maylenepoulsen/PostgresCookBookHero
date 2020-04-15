import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

class UserNavBar extends Component {
  handleClick = () => {
    this.props.changeStateRecipe();
  };

  render() {
    return (
      <div>
        <ul style={{ listStyleType: "none", margin: 10, padding: 10 }}>
          <li style={{ display: "inline", float: "right", padding: "8px" }}>
            <Link to="/">Logout</Link>
          </li>
          <li style={{ display: "inline", float: "right", padding: "8px" }}>
            <Link to="/recipes">All Recipes</Link>
          </li>
          <li style={{ display: "inline", float: "right", padding: "8px" }}>
            <Link to='/users'>My Recipes</Link>
          </li>
          <li style={{ display: "inline", float: "right", padding: "8px" }}>
            <button onClick={this.handleClick} className="button">
              Add A New Recipe
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

export default UserNavBar;
