import React, { Component } from "react";
import { Link } from 'react-router-dom';

class SideBar extends Component {
  render() {
    return (
      <div className='sidenav'>

        <Link to='/new-recipe'>Add a New Recipe</Link>
        <h2>Tags</h2>
      </div>
    );
  }
}

export default SideBar;
