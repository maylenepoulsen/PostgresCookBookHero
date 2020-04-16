import React, { Component } from "react";
import UserNavBar from "./components/UserNavBar";
import RecipeList from "./components/RecipeList";
import NewRecipe from "./components/NewRecipe";
import Tags from "./components/Tags";
import RecipeCard from "./components/RecipeCard";
import SortDropDown from "./components/SortDropDown";

class UserHomePage extends Component {
  state = {
    newRecipe: false,
    sortMethod: (a,b) => 1,
  };

  

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
          userId={this.props.userId}
          logOutUser={this.props.logOutUser}
        />
        {this.state.newRecipe ? (
          <NewRecipe userId={this.state.userId} />
        ) : (
          <>
            <div>
              <h1 className="all-recipes-title" style={{position: 'relative', left: '400px'}}>All Recipes</h1>
              <div style={{position: 'relative', left:'20px'}}>
                <SortDropDown getSortMethod={(sortMethod) => this.setState({sortMethod})} array={this.props.recipes}/>
              </div>
            </div>
            <div style={{ position: "relative", left: "30px", top: "200px" }}>
              <Tags recipes={this.props.recipes.sort(this.state.sortMethod)} />
            </div>
            <div style={{ position: "relative", left: "300px", top: "-200px" }}>
              <RecipeList
                recipes={this.props.recipes.sort(this.state.sortMethod)}
                userId={this.props.userId}
                showRecipe={this.showRecipe}
              />
            </div>
            <div style={{ position: "relative", left: "350px", top: "-100px" }}>
              {this.props.recipes
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
