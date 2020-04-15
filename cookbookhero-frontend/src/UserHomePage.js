import React, { Component } from "react";
import { Link } from 'react-router-dom';
import UserNavBar from "./components/UserNavBar";
import RecipeList from "./components/RecipeList";
import NewRecipe from "./components/NewRecipe";
import Tags from './components/Tags'
import RecipeCard from './components/RecipeCard'

class UserHomePage extends Component {
  state = {
    recipes: [],
    userId: null,
    newRecipe: false,
  };

  componentDidMount() {
    this.setState({
      userId: this.props.match.params.id,
    });

    fetch(`http://localhost:3001/api/v1/users/${this.props.match.params.id}/recipes`)
    .then(response => response.json())
    .then(result => this.setState({recipes: result}))
  }

 

  changeStateRecipe = () => {
    this.setState({ newRecipe: true });
  };

  showRecipe = recipeId => {
    this.props.history.push(`/recipe/${recipeId}`)
  }

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
            <div>
              <Tags recipes={this.state.recipes}/>
            </div>
            <div style={{ position: 'relative', left:'250px'}}>
              <RecipeList recipes={this.state.recipes} userId={this.state.userId} showRecipe={this.showRecipe}/>
            </div>
            <div style={{position: 'relative', left: '350px', top: '-100px'}}>
              <RecipeCard />
              <br />
              <RecipeCard />
            </div>
          </>
        )}
      </div>
    );
  }
}

export default UserHomePage;
