import React, { Component } from "react";

class Login extends Component {
  state = {
    username: "",
    recipes:[]
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  renderUserPage = (result) => {
    this.props.history.push(`/users/${result.id}`);
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
          this.setState({recipes: result.recipes})
          this.renderUserPage(result);
        });
    }
  };

  render() {
    return (
      <div className="centered">
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              Enter your Username:
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
