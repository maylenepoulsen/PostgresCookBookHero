import React, { Component } from "react";
import { Link } from 'react-router-dom';

class HomeNavBar extends Component {
    render() {
    return (
      <div>
        <ul style={{listStyleType: 'none', margin: 10, padding: 10}}>
        <li>Small Logo</li>
        <li><Link to='/sign-up'>Sign-Up</Link></li>
        <li><Link to='/login'>Login</Link></li>
        </ul>
        
        
      </div>
    );
  }
}

export default HomeNavBar;
