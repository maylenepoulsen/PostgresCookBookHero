import React, { Component } from "react";
import "../App.css";
import { Link, Redirect } from 'react-router-dom';
import UserNavBar from './UserNavBar';

class NewRecipe extends Component {
  state = {
    name: "",
    history: "",
    directions: "",
    notes: "",
    unit: "",
    ingredient: "",
    ingredients: [],
    tag: "",
    tags: [],
    image: null,
    recipeId: null,
    redirect: null
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.delete('unit')
    formData.delete('ingredient')
    formData.delete('tag')
    formData.append('ingredients', JSON.stringify(this.state.ingredients))
    formData.append('tags', JSON.stringify(this.state.tags))
    formData.append('user_id', this.props.userId)
    // for (let i of formData.entries())
    //   console.log(i[0] + ", " + i[1])
    fetch('http://localhost:3001/api/v1/recipes', {
      method: 'POST',
      headers: {
        // 'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: formData
    })
      .then(response => response.json())
      .then(result => {
        // console.log(result)
        this.setState({
          recipeId: result.id,
          redirect: true
        })
        this.props.addRecipe(result.id)
      })
  }

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
      name: newIngredient
    }

    this.setState({
      ingredients: [...this.state.ingredients, listIngredient],
      ingredient: "",
      unit: "",
    });
  };

  handleImageUpload = (event) => {
    // console.log(event.target.value)
    if (event.target.value) {
      this.setState({ image: URL.createObjectURL(event.target.files[0]) })
    } else {
      this.setState({ image: null })
    }
  }

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
      user_id: this.props.userId,
      name: this.state.title,
      history: this.state.history,
      directions: this.state.directions,
      notes: this.state.notes,
      ingredients: this.state.ingredients,
      tags: this.state.tags,
      image: this.state.image,
    }

    this.setState({
      name: '',
      history: "",
      directions: "",
      notes: "",
      ingredient: "",
      ingredients: [],
      unit: "",
      tag: "",
      tags: [],
      image: null
    })

    fetch('http://localhost:3001/api/v1/recipes', {
      method: 'POST',
      headers: {
        // 'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(newRecipe)
    })
      .then(response => response.json())
      .then(result => {
        this.setState({
          recipeId: result.id,
          redirect: true
        })
        this.props.addANewRecipe(result.id)
      })
  }

  render() {
    if (this.state.redirect) {
      return (
        <Redirect to={`/recipe/${this.state.recipeId}`} />
      )
    }
    return (
      <div>
        <UserNavBar logOutUser={this.props.logOutUser} />
        <div style={{ position: 'absolute', left: '30px' }}>

          <h2 className="new-recipe-title">Add a New Recipe</h2>
          <form onSubmit={this.handleSubmit}>
            <span>
              <label >
                Title:
              <input
                  type="text"
                  style={{ width: '450px', height: '30px', fontSize: 'large' }}
                  name="title"
                  value={this.state.title}
                  onChange={this.handleChange}
                />
              </label>
            </span>
            <span style={{ paddingLeft: '20px' }}>
              <label>
                This recipe is from (ie. special person or blog):
              <input
                  type="text"
                  style={{ width: '250px', height: '30px', fontSize: 'large' }}
                  name="history"
                  value={this.state.history}
                  onChange={this.handleChange}
                />
              </label>
            </span>
            <div style={{ paddingTop: '10px' }}>
              <div style={{ position: 'relative', left: '50px' }}>
                <ul>
                  {this.state.ingredients.map((ingredient, idx) => (
                    <li key={idx} style={{ lineHeight: '1.5' }}>{ingredient.unit.concat(" ", ingredient.name)}</li>
                  ))}
                </ul>
              </div>
              <span >
                <label>Amount: </label>
                <input
                  type="text"
                  name="unit"
                  style={{ width: '200px', height: '30px', fontSize: 'large' }}
                  value={this.state.unit}
                  onChange={this.handleChange}
                />
              </span>
              <span style={{ paddingLeft: '20px' }}>
                <label>Ingredient: </label>
                <input
                  type="text"
                  name="ingredient"
                  style={{ width: '200px', height: '30px', fontSize: 'large' }}
                  value={this.state.ingredient}
                  onChange={this.handleChange}
                />
              </span>
              <br />
              <div style={{ padding: '7px' }}>
                <button className='add-ingredient' onClick={this.handleAddIngredient}>Add Ingredient</button>
              </div>
            </div>
            <div>
              <h4>Directions:</h4>
              <textarea
                name="directions"
                className='text-area'
                value={this.state.directions}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <h4>Add Some Notes:</h4>
              <textarea
                name="notes"
                className='notes'
                value={this.state.notes}
                onChange={this.handleChange}
              />
            </div>
            <div>
              {this.state.tags.map((tag, idx) => (
                <button key={idx}>{tag}</button>
              ))}
              <br />
              <label style={{ paddingRight: '10px' }}>
                Tags:
              <input
                  type="text"
                  name="tag"
                  style={{ width: '200px', height: '30px', fontSize: 'large' }}
                  value={this.state.tag}
                  onChange={this.handleChangeTag}
                />
              </label>
              <button className='add-ingredient' onClick={this.handleAddTag}>Add a Tag</button>
            </div>
            <div>
              <br />
              <label htmlFor="image" className='button'>
                <h4>Upload an Image:</h4>
              </label>
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  className="add-image"
                  onChange={this.handleImageUpload}
                />
                <br />
              {this.state.image ?
                <div>
                  <br />
                  <img
                    src={this.state.image}
                    alt=''
                    style={{ height: '20%', width: '20%' }}
                  />
                </div> :
                null
              }
            </div>
            <input type="submit" className='button' value="Save Recipe" />
          </form>
          {/* <div>
            <label>
              <h4>Upload an Image:</h4>
              <input type="file" onChange={this.handleImageUpload} className='add-image' />
            </label>
          </div> */}
          <div style={{ position: 'absolute', left: '800px', bottom: '5px' }}>
            <Link to={`/users/${this.props.userId}`}> <button className='button'>Cancel</button></Link>
          </div>
          <div style={{ position: 'absolute', left: '1000px', bottom: '5px' }}>
            <button onClick={this.handleSave} className="button">Save Recipe</button>
          </div>
        </div>
      </div>
    );
  }
}

export default NewRecipe;
