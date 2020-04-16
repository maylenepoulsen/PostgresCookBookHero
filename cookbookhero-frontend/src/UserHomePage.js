import React, { Component } from "react";
import UserNavBar from "./components/UserNavBar";
import RecipeList from "./components/RecipeList";
import NewRecipe from "./components/NewRecipe";
import Tags from "./components/Tags";
import RecipeCard from "./components/RecipeCard";
import SortDropDown from "./components/SortDropDown";

class UserHomePage extends Component {
  state = {
    recipes: [],
    userId: null,
    newRecipe: false,
  };

  componentDidMount() {
    fetch(
      `http://localhost:3001/api/v1/users/${this.props.match.params.id}/recipes`
    )
      .then((response) => response.json())
      .then((result) => {
        this.setState({ recipes: result });
      });
    this.setState({
      userId: this.props.match.params.id,
    });
  }

  changeStateRecipe = () => {
    this.setState({ newRecipe: true });
  };

  showRecipe = (recipeId) => {
    this.props.history.push(`/recipe/${recipeId}`);
  };

  render() {
    return (
      <div>
        <UserNavBar
          changeStateRecipe={this.changeStateRecipe}
          userId={this.state.userId}
        />
        {this.state.newRecipe ? (
          <NewRecipe userId={this.state.userId} />
        ) : (
          <>
            <div>
              <h1 className="all-recipes-title" style={{position: 'relative', left: '400px'}}>All Recipes</h1>
              <div style={{position: 'relative', left:'20px'}}>
                <SortDropDown />
              </div>
            </div>
            <div style={{ position: "relative", left: "30px", top: "200px" }}>
              <Tags recipes={this.state.recipes} />
            </div>
            <div style={{ position: "relative", left: "300px", top: "-200px" }}>
              <RecipeList
                recipes={this.state.recipes}
                userId={this.state.userId}
                showRecipe={this.showRecipe}
              />
            </div>
            <div style={{ position: "relative", left: "350px", top: "-100px" }}>
              {this.state.recipes
                .reverse()
                .slice(0, 2)
                .map((recipe) => (
                  <div
                    key={recipe.id}
                    style={{
                      position: "relative",
                      left: "10px",
                      top: "-250px",
                    }}
                  >
                    <RecipeCard
                      key={recipe.id}
                      recipe={recipe}
                      showRecipe={this.showRecipe}
                    />
                    <br />
                  </div>
                ))}
            </div>
          </>
        )}
      </div>
    );
  }
}

export default UserHomePage;
