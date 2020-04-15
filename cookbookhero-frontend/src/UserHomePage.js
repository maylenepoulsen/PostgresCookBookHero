import React, { Component } from "react";
import UserNavBar from "./components/UserNavBar";
import RecipeList from "./components/RecipeList";
import NewRecipe from "./components/NewRecipe";

class UserHomePage extends Component {
  state = {
    recipes: [],
    tags: [],
    userId: null,
    newRecipe: false,
  };

  componentDidMount() {
    this.setState({
      userId: this.props.match.params.id,
    });
    fetch(`http://3001/api/v1/users/${this.props.match.params.id}/recipes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }, 
      body: JSON.stringify({})
    })
    .then(response => response.json())
    .then(result => console.log(result))
  }

  changeStateRecipe = () => {
    this.setState({ newRecipe: true });
  };

  render() {
    return (
      <div>
        <UserNavBar changeStateRecipe={this.changeStateRecipe} userId={this.state.userId}/>
        {this.state.newRecipe ? (
          <NewRecipe userId={this.state.userId}/>
        ) : (
          <>
            <div>
              <h3>Sort Dropdown</h3>
              <h1 style={{ textAlign: "center" }}>User Display</h1>
            </div>
            <div style={{ textAlign: "center" }}>
              <RecipeList recipes={this.state.recipes} userId={this.state.userId}/>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default UserHomePage;
