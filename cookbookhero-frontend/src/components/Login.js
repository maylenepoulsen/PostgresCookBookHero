import React, { Component } from "react";

class Login extends Component {
  state = {
    username: "",
  };

  handleChange = event => {
      this.setState({
          [event.target.name]: event.target.value
      })
  }

  handleSubmit = event => {
      event.preventDefault();
      if(this.state.username) {
          fetch('http://localhost:3001/api/v1/users/username')
          .then(response => response.json())

      }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              Enter your Username:
              <input
                onChange={this.handleChange}
                type="text"
                name="username"
                value={this.state.username}
              />
            </label>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
