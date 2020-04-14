import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomeNavBar extends Component {
  render() {
    return (
      <div>
        <ul style={{ listStyleType: "none", margin: 10, padding: 10 }}>
          <li style={{ display: "inline" }}>Small Logo</li>
          <li style={{ display: "inline", float: "right", padding: "8px" }}>
            <Link to="/login">Login</Link>
          </li>
          <li style={{ display: "inline", float: "right", padding: "8px" }}>
            <Link to="/sign-up">Sign-Up</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default HomeNavBar;
