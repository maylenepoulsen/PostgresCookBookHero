import React, {Component} from 'react'

class RecipeList extends Component {
  componentDidMount() {
    fetch('')
  }

  render() {
    console.log(this.props.recipes)
      return(
          <div>
            {this.props.recipes.map(recipe => <p key={recipe.id}>{recipe.name}</p>)}
          </div>
      )
  }
}

export default RecipeList;