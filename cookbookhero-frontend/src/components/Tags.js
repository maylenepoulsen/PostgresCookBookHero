import React, { Component } from "react";

class Tags extends Component {
  
  extractTags = () => {
    const tags = this.props.recipes.map(recipe => recipe.tags).flat(1)
    return tags;
  }

  render() {
    if(this.props.recipes) {
    return (
      <div>
        Tags:
        
        {this.extractTags().map((tag,idx) => <p key={idx}><button  className='tag'>{tag}</button></p>)}
  
      </div>
    );
      } else return <div></div>
  }
}

export default Tags;
