import React, { Component } from "react";

class Tags extends Component {
  
  extractTags = () => {
    const tags = this.props.recipes.map(recipe => recipe.tags).flat(1)
    // console.log(tags)
    return tags;
  }

  render() {
    // console.log("tags", this.props.recipes);
    if(this.props.recipes) {
    return (
      <div>
        Tags:
        
        {this.extractTags().map((tag,idx) => <p><button key={idx} className='tag'>{tag}</button></p>)}
  
      </div>
    );
      } else return <div></div>
  }
}

export default Tags;
