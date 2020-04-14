import React, { Component } from "react";
import './App.css'
import HomeNavBar from './components/HomeNavBar';

class HomePage extends Component {
  render() {
    return (
      <div>
        <HomeNavBar />
        <div className='centered' >
          <h1 className='site-title'>Cook Book Hero Title</h1>
          <img
            src="https://via.placeholder.com/550x375"
            alt="Cook Book Hero Recipe Organizer"
          />
        </div>
      </div>
    );
  }
}

export default HomePage;
