import React, {Component} from 'react';
import SideBar from './components/SideBar';
import UserNavBar from './components/UserNavBar'

class UserHomePage extends Component {
  render() {
      return (
          <div>
              <UserNavBar />
              <SideBar />
             
              <h3 style={{textAlign: 'center'}}>Sort Dropdown</h3>
              <h1 style={{textAlign: 'center'}}>User Display</h1>
          </div>
      )
  }
}

export default UserHomePage;