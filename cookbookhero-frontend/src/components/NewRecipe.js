import React, { Component } from "react";
import UserNavBar from "./UserNavBar";
import "../App.css";

class NewRecipe extends Component {
  state = {
    title: "",
    history: "",
    directions: "",
    notes: "",
    ingredient: "",
    ingredients: [],
    unit: "",
    tag: "",
    tags: [],
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleAddIngredient = (event) => {
    event.preventDefault();
    const newAmount = this.state.unit;
    const newIngredient = this.state.ingredient;

    const listIngredient = {
      unit: newAmount,
      ingredient: newIngredient
    } 

    this.setState({
      ingredients: [...this.state.ingredients, listIngredient],
      ingredient: "",
      unit: "",
    });
  };

  handleChangeTag = (event) => {
    const newTag = event.target.value;
    this.setState({
      [event.target.name]: newTag,
    });
  };

  handleAddTag = (event) => {
    event.preventDefault();
    const newTag = this.state.tag;
    this.setState({
      tags: [...this.state.tags, newTag],
      tag: "",
    });
  };

  handleSave = () => {
    const newRecipe = {
      name: this.state.title,
      history: this.state.history,
      directions: this.state.directions,
      ingredients: this.state.ingredients,
      tags: this.state.tags,
      userId: 5
    }
    
    console.log("sending recipe", newRecipe)
    fetch('http://localhost:3001/api/v1/recipes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(newRecipe)
    })
  }

  handleCancel = () => {
    this.props.history.push('/users')
  }

  render() {
    return (
      <div>
        <UserNavBar />
        <h2 className="new-recipe-title">Add a New Recipe</h2>
        <form>
          <span>
            <label >
              Title:
              <input
                type="text"
                style={{width: '400px', height: '30px'}}
                name="title"
                value={this.state.title}
                onChange={this.handleChange}
              />
            </label>
          </span>
          <span>
            <label>
              This recipe is from (ie. special person or blog):
              <input
                type="text"
                style={{width: '250px', height: '30px'}}
                name="history"
                value={this.state.history}
                onChange={this.handleChange}
              />
            </label>
          </span>
          <div>
            <ul>
              {this.state.ingredients.map((ingredient, idx) => (
                <li key={idx}>{ingredient.unit.concat(" ", ingredient.ingredient)}</li>
              ))}
            </ul>
            <span>
              <label>Amount: </label>
              <input
                type="text"
                name="unit"
                value={this.state.unit}
                onChange={this.handleChange}
              />
            </span>
            <span>
              <label>Ingredient: </label>
              <input
                type="text"
                name="ingredient"
                value={this.state.ingredient}
                onChange={this.handleChange}
              />
            </span>
            <br />
            <button onClick={this.handleAddIngredient}>Add Ingredient</button>
          </div>
          <div>
            <label>
              Directions:
              <textarea
                name="directions"
                value={this.state.directions}
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div>
            Add Some Notes:
            <textarea
              name="notes"
              value={this.state.notes}
              onChange={this.handleChange}
            />
          </div>
          <div>
            {this.state.tags.map((tag, idx) => (
              <button key={idx}>{tag}</button>
            ))}
            <br />
            <label>
              Tags:
              <input
                type="text"
                name="tag"
                value={this.state.tag}
                onChange={this.handleChangeTag}
              />
            </label>
            <button onClick={this.handleAddTag}>Add a Tag</button>
          </div>
        </form>
        <div>
          <label>
            Upload an Image:
            <br />
            <input type="file" onChange={this.handleImageUpload} />
          </label>
        </div>
        <button onClick={this.handleCancel}>Cancel</button>
        <button onClick={this.handleSave} className="save-recipe">Save Recipe</button>
      </div>
    );
  }
}

export default NewRecipe;
