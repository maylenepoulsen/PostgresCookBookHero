import React, { Component } from "react";

class Signup extends Component {
  state = {
    name: "",
    username: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.name && this.state.username) {
      fetch("http://localhost:3001/api/v1/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: this.state.name,
          username: this.state.username,
        }),
      })
        .then((response) => response.json())
        .then((result) => this.props.handleSignUp(result.id));

    } else {
      alert("Both fields must be filled in.");
    }
  };

  render() {
    return (
      <div className='centered'>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              <strong>Name:</strong>
              <input
                onChange={this.handleChange}
                type="text"
                style={{ width: "400px", height: "30px", fontSize: "large" }}
                name="name"
                value={this.state.name}
              />
            </label>
          </div>
          <div>
            <label>
              <strong>Username:</strong>
              <input
                onChange={this.handleChange}
                type="text"
                style={{ width: "400px", height: "30px", fontSize: "large" }}
                name="username"
                value={this.state.username}
              />
            </label>
          </div>
          <div>
            <button className='login-button' type="submit">Sign-Up</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Signup;
