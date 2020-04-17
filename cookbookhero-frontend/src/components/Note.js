import React, { Component } from "react";

class Note extends Component {
  render() {
    return (
      <div className='note'>
        {this.props.recipe.notes.map((note, idx) => (<p key={idx}>{note}</p>))}
      </div>
    );
  }
}

export default Note;
