import React, { Component } from "react";

class Login extends Component {
  state = {
    username: ''
  }
  
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.username) {
      fetch("http://localhost:3001/api/v1/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ username: this.state.username }),
      })
        .then((response) => response.json())
        .then((result) => {
         this.props.handleLogin(result.id)
         
        });
    }
  };

  render() {
    return (
      <div className="centered">
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              <h3 className="site-title">Enter your Username</h3>
              <input
                onChange={this.handleChange}
                type="text"
                style={{ width: "400px", height: "30px", fontSize: "large" }}
                name="username"
                value={this.state.username}
              />
            </label>
            <button className="login-button" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
