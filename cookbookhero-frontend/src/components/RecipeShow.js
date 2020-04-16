import React, { Component } from "react";
import UserNavBar from "./UserNavBar";
import RecipeCard from './RecipeCard';
import RecipeDirections from './RecipeDirections'
import Note from './Note'

class RecipeShow extends Component {
  state = {
    recipe: ''
  }
  componentDidMount() {
    fetch(`http://localhost:3001/api/v1/recipes/${this.props.match.params.id}`)
    .then(response => response.json())
    .then(result => this.setState({recipe: result}))
  }
  render() {
    if (this.state.recipe) {
    return (
  
      <div>
        <UserNavBar />
        <div style={{ position: 'relative', left:'-400px', top: '60px'}}>
          <RecipeCard recipe={this.state.recipe}/>
        </div>
        <div style={{position: 'relative', left: '110px', top: '85px'}}>
          <strong>Notes:</strong>
          <Note recipe={this.state.recipe}/>
        </div>
        <div style={{ position: 'relative', left:'250px', top: '-450px'}}>
          <RecipeDirections recipe={this.state.recipe} />
        </div>
       
      </div>
    );
    } else return <div></div>
  }
}

export default RecipeShow;
