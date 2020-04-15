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
  }

  changeStateRecipe = () => {
    this.setState({ newRecipe: true });
  };

  render() {
    return (
      <div>
        <UserNavBar changeStateRecipe={this.changeStateRecipe} />
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
