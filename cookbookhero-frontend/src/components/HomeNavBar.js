import React, { Component } from "react";
// import {Redirect} from 'react-router-dom';

class HomeNavBar extends Component {
    handleClick = () => {
      console.log('redirect to users home page')
    }
    render() {
    return (
      <div>
        <h2 onClick={this.handleClick}>HomeNavBar Component</h2>
      </div>
    );
  }
}

export default HomeNavBar;
