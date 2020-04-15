import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import HomePage from "./HomePage";
import UserHomePage from "./UserHomePage";
import NewRecipe from "./components/NewRecipe";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Recipes from "./components/Recipes";
import RecipeShow from "./components/RecipeShow";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/users/:id" component={UserHomePage} />
        <Route path="/new-recipe" component={NewRecipe} />
        <Route exact path="/recipe" component={RecipeShow} />
        <Route path="/recipes" component={Recipes} />
        <Route path="/sign-up" component={Signup} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
