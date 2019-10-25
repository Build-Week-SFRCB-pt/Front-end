import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getRecipes } from "../../actions/index";
import "./Recipes.css";
import TabNav from "../RecipeCards/TabNav";
import Recipes from "./Recipes";
import { Loader } from "semantic-ui-react";

const RecipeList = ({ getRecipes, recipes, isFetching, history }) => {
  useEffect(() => {
    getRecipes();
  }, [getRecipes]);

  const routeToRecipe = (e, recipe) => {
    e.preventDefault();
    history.push(`/recipe/${recipe.id}`);
  };
  return (
    <div>
      <TabNav />
      {isFetching ? (
        <div style={{ textAlign: "center" }}>
          I can hear your stomach grumbling...
          <Loader active inline="centered" />
        </div>
      ) : (
        <div className="recipes-container">
          {recipes.map(recipe => (
            <div onClick={e => routeToRecipe(e, recipe)}>
              <Recipes recipe={recipe} key={recipe.id} />
            </div>
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
