import React, { Component } from "react";

class Tags extends Component {
  render() {
    //console.log("tags", this.props.recipes.tags);
    if(this.props.recipe) {
    return (
      <div>
        Tags:
        {/* {this.props.recipes.tags.map((tag, idx) => (
          <p key={idx}>{tag}</p>
        ))} */}
      </div>
    );
      } else return <div></div>
  }
}

export default Tags;
