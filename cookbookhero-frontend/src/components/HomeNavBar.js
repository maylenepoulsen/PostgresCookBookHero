import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomeNavBar extends Component {
  render() {
    return (
      <div>
        <ul style={{ listStyleType: "none", margin: 10, padding: 10 }}>
          <li style={{ display: "inline" }}>
            <img src="../test-hero.png" width={75} />
          </li>
          <li style={{ display: "inline", float: "right", padding: "8px" }}>
            <Link to="/login">
              <button className="home-button">Login</button>
            </Link>
          </li>
          <li style={{ display: "inline", float: "right", padding: "8px" }}>
            <Link to="/sign-up">
              <button className="home-button">Sign-Up</button>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default HomeNavBar;
