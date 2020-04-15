import React, {Component} from 'react'

class RecipeList extends Component {
  componentDidMount() {
    fetch('')
  }

  render() {
    console.log(this.props.recipes)
      return(
          <div>
            List of Recipes
          </div>
      )
  }
}

export default RecipeList;