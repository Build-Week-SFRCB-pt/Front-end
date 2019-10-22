import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getRecipes } from "../../actions/index";
import "./Recipes.css";
import TabNav from "../RecipeCards/TabNav";
import Recipe from "./Recipe";
import { Loader } from "semantic-ui-react";

const RecipeList = ({ getRecipes, recipes, isFetching }) => {
  useEffect(() => {
    getRecipes();
  }, [getRecipes]);

  return (
    <div>
      <TabNav />
      {isFetching ? (
        <p style={{ textAlign: "center" }}>
          I can hear your stomach grumbling...
          <Loader active inline="centered" />
        </p>
      ) : (
        <div className="recipes-container">
          {recipes.map(recipe => (
            <Recipe recipe={recipe} key={recipe.id} />
          ))}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    recipes: state.recipes,
    isFetching: state.isFetching
  };
};

export default connect(
  mapStateToProps,
  { getRecipes }
)(RecipeList);
