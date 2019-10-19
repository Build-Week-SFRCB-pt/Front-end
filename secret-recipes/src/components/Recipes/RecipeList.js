import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getRecipes } from "../../actions/index";
import "../../App.css";
import TabNav from "../RecipeCards/TabNav";
import Header from "../RecipeCards/Header.js";

const RecipeList = ({ getRecipes, recipes }) => {
  useEffect(() => {
    getRecipes();
  }, [getRecipes]);
  return (
    <div className="App">
      <Header />
      <TabNav />
      {recipes.map(recipe => (
        <div key={recipe.id}>
          <p>{recipe.title}</p>
          <p>{recipe.source}</p>
          <p>{recipe.notes}</p>
          <ul>
            {recipe.tags.map(tag => (
              <li>{tag}</li>
            ))}
          </ul>
        </div>
      ))}
      Recipe List
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
