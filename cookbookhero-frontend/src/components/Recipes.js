import React, { Component } from "react";
import UserNavBar from "./UserNavBar";
import Tags from './Tags'
import { Link } from 'react-router-dom';

class Recipes extends Component {
  handleClick = (event) => {
    this.props.addANewRecipe(event.target.id)

  };

  render() {
    if(this.props.allRecipes) {
      return (
        <div >
          <UserNavBar logOutUser={this.props.logOutUser}/>
          <div style={{ position: "absolute", left: "30px", top: "300px" }}>
            <Tags recipes={this.props.allRecipes} />
          </div>
          <div style={{position: 'absolute', left: '400px'}}>
          <h2 style={{ textAlign: "center" }}>Recipes from All Users</h2>
          <ul>
      {this.props.allRecipes.map(recipe => <Link to={`/recipe/${recipe.id}`} key={recipe.id}><li key={recipe.id} className='recipe-list' id={recipe.id} onClick={this.handleClick}>{recipe.name}</li></Link>)}
          </ul>
          </div>
        </div>
      );
    } else return <div></div>
  
  }
}

export default Recipes;
