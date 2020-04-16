import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

class UserNavBar extends Component {
  handleClick = () => {
    this.props.changeStateRecipe();
  };

  handleLogOut = () => {
    console.log("logged out");
    this.props.logOutUser();
  };

  render() {
    return (
      <div>
        <ul style={{ listStyleType: "none", margin: 10, padding: 10 }}>
          <li style={{ display: "inline", float: "right", padding: "8px" }}>
            <button onClick={this.handleLogOut} className="button">
              Logout
            </button>
          </li>
          <li style={{ display: "inline", float: "right", padding: "8px" }}>
            <Link to="/recipes">
              <button className="button">All Recipes</button>
            </Link>
          </li>
          <li style={{ display: "inline", float: "right", padding: "8px" }}>
            <Link to={`/users/${this.props.userId}`}>
              <button className="button">My Recipes</button>
            </Link>
          </li>
          <li style={{ display: "inline", float: "right", padding: "8px" }}>
            <Link to="/new-recipe">
              <button onClick={this.handleClick} className="button">
                Add A New Recipe
              </button>
            </Link>
          </li>
          <li style={{ display: "inline" }}>
            <img src="../test-hero.png" width={75} />
          </li>
        </ul>
      </div>
    );
  }
}

export default UserNavBar;
