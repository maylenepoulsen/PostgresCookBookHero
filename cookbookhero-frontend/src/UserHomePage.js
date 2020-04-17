import React, { Component } from "react";
import UserNavBar from "./components/UserNavBar";
import RecipeList from "./components/RecipeList";
import Tags from "./components/Tags";
import RecipeCard from "./components/RecipeCard";
import SortDropDown from "./components/SortDropDown";

class UserHomePage extends Component {
  state = {
    sortedRecipes: null
  }

  handleSortedRecipes = recipeArray => {
    this.setState({
      sortedRecipes: recipeArray
    })
  }


  render() {
    return (
      <div>
        <UserNavBar
          changeStateRecipe={this.changeStateRecipe}
          userId={this.props.userId}
          logOutUser={this.props.logOutUser}
        />
        <>
          <div>
            <h1
              className="all-recipes-title"
              style={{ position: "relative", left: "400px" }}
            >
              All My Recipes
            </h1>
            {/* {this.props.recipes > 2 ?  */}
            <div style={{ position: "relative", left: "20px" }}>
              <SortDropDown recipes={this.props.recipes} sortedRecipes={this.handleSortedRecipes} />
            </div>
            {/* :
            <div></div>
             } */}
          </div>
          <div style={{ position: "absolute", left: "30px", top: "300px" }}>
            <Tags recipes={this.props.recipes} />
          </div>
          <div style={{ position: "absolute", left: "300px", top: "200px" }}>
            <RecipeList
              recipes={this.state.sortedRecipes || this.props.recipes}
              userId={this.props.userId}
              showRecipe={this.showRecipe}
              addANewRecipe={this.props.addANewRecipe}
            />
          </div>
          <div style={{ position: "absolute", left: "850px", top: "400px" }}>
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
      </div>
    );
  }
}

UserHomePage.defaultProps = {
  recipes: []
}

export default UserHomePage;
