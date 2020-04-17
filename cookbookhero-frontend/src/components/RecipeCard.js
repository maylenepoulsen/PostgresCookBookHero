import React, { Component } from "react";

class RecipeCard extends Component {



  render() {
    return (
      <div className="card">
        <div className="container">
          <h4>{this.props.recipe.name}</h4>
        </div>
        <img style={{width: "80%", height:"80%"}} src={this.props.recipe.image_url || "https://images.pexels.com/photos/262896/pexels-photo-262896.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" } alt={this.props.recipe.name}></img>
      </div>
    );
  }
}

// RecipeCard.defaultProps = {
//   recipe: { https://images.pexels.com/photos/262896/pexels-photo-262896.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260
//    image_url: "https://via.placeholder.com/300x350"
//   }
// }
export default RecipeCard;

