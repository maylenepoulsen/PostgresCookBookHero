import React, { Component } from "react";
import './App.css'
import HomeNavBar from './components/HomeNavBar';

class HomePage extends Component {
  render() {
    return (
      <div>
        <HomeNavBar />
        <div className='centered' >
          <h1 className='site-title'>Cook Book Hero: All Your Recipes Saved</h1>
          <img
            src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=150&w=252"
            alt="Cook Book Hero Recipe Organizer"
          />
        </div>
      </div>
    );
  }
}

export default HomePage;
