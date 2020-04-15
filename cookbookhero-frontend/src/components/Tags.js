import React, { Component } from "react";

class Tags extends Component {
  render() {
    console.log(this.props.recipes);
    return (
      <div>
        Tags:
        {this.props.recipes.map((recipe) => {
          recipe.tags.map((tag) => <p>{tag}</p>);
        })}
      </div>
    );
  }
}

export default Tags;
