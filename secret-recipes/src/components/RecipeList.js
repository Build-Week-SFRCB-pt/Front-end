import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getRecipes } from "../actions/index";

const RecipeList = ({ getRecipes, recipes }) => {
  useEffect(() => {
    getRecipes();
  }, [getRecipes]);
  return (
    <div className="App">
      {recipes.map(recipe => (
        <div>
          <p>{recipe.name}</p>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    recipes: state.recipes
  };
};

export default connect(
  mapStateToProps,
  { getRecipes }
)(RecipeList);
