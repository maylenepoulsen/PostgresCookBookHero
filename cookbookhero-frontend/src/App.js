import React, { Component } from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";

import HomePage from "./HomePage";
import UserHomePage from "./UserHomePage";
import NewRecipe from "./components/NewRecipe";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Recipes from "./components/Recipes";
import RecipeShow from "./components/RecipeShow";

class App extends Component {
  state = {
    loggedIn: false,
    userId: null,
    recipes: [],
    allRecipes: [],
    showRecipe: null
  };

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/recipes')
    .then(response => response.json())
    .then(result => this.setState({allRecipes: result}))
  }

  handleLogin = (userId) => {
    this.setState({
      loggedIn: true,
      userId: userId,
    });

    fetch(`http://localhost:3001/api/v1/users/${this.state.userId}/recipes`)
          .then((response) => response.json())
          .then((result) => {
            this.setState({ recipes: result });
          });
  };

  handleSignUp = (userId) => {
    this.setState({
      loggedIn: true,
      userId: userId
    })
  }

  logOutUser = () => {
    this.setState({
      loggedIn: false,
      userId: null,
      recipes: []
    })
  }

  addANewRecipe = recipeId => {
    console.log(recipeId)
    // this.setState({recipeToShow: recipeId})
    fetch(`http://localhost:3001/api/v1/recipes/${recipeId}`)
    .then(response => response.json())
    .then(result => {
      this.setState({showRecipe: result})
      //console.log(this.state.showRecipe)
    })
    
  } 


  render() {
    if (!this.state.loggedIn) {
      return (
        <Switch>
          <Route path="/login">
            <Login
              loggedIn={this.state.loggedIn}
              handleLogin={this.handleLogin}
            />
          </Route>
          <Route path="/sign-up">
            <Signup handleSignUp={this.handleSignUp} />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      );
    }
    return (
      <div>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path={`/users/${this.state.userId}`}>
            <UserHomePage
              recipes={this.state.recipes}
              userId={this.state.userId}
              logOutUser={this.logOutUser}
              addANewRecipe={this.addANewRecipe}
            />
          </Route>
          <Route path="/new-recipe">
            <NewRecipe userId={this.state.userId} 
            recipes={this.state.recipes} 
            logOutUser={this.logOutUser}
            addANewRecipe={this.addANewRecipe}
            />
          </Route>
          <Route exact path="/recipe/:id">
            <RecipeShow 
            showRecipe={this.state.showRecipe}
           />
          </Route>
          <Route path="/recipes" >
            <Recipes allRecipes={this.state.allRecipes}/>
          </Route>
          <Route path="/">
            <Redirect to={`/users/${this.state.userId}`}>
              <UserHomePage
                recipes={this.state.recipes}
                userId={this.state.userId}
                logOutUser={this.logOutUser}
                addANewRecipe={this.addANewRecipe}
              />
            </Redirect>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
