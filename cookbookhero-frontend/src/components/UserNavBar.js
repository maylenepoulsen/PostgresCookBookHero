import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

class UserNavBar extends Component {
  handleClick = () => {
    this.props.changeStateRecipe();
  };

  handleMyRecipes = () => {
    console.log(this.props.userId)
  }

  render() {
    return (
      <div>
        <ul style={{ listStyleType: "none", margin: 10, padding: 10 }}>
          <li style={{ display: "inline", float: "right", padding: "8px" }}>
            <Link to="/"><button className='button'>Logout</button></Link>
          </li>
          <li style={{ display: "inline", float: "right", padding: "8px" }}>
            <Link to="/recipes"><button className='button'>All Recipes</button></Link>
          </li>
          <li style={{ display: "inline", float: "right", padding: "8px" }}>
            <button className='button' onClick={this.handleMyRecipes}>My Recipes</button>
          </li>
          <li style={{ display: "inline", float: "right", padding: "8px" }}>
            <button onClick={this.handleClick} className="button">
              Add A New Recipe
            </button>
          </li>
          <li>
          <li style={{ display: "inline" }}><img src="../test-hero.png" width={75}/></li>
          </li>
        </ul>
      </div>
    );
  }
}

export default UserNavBar;
