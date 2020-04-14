import React from "react";
import "./App.css";
import { Route } from "react-router-dom";

import HomePage from "./HomePage";
import UserHomePage from "./UserHomePage";
import NewRecipe from './components/NewRecipe';

function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage} />
      <Route path='/users' component={UserHomePage} />
      <Route path='/new-recipe' component={NewRecipe} />
    </div>
  );
}

export default App;
