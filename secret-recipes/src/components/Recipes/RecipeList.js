<<<<<<< HEAD
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
=======

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getRecipes } from '../../actions/index';
import './Recipes.css'
import TabNav from '../RecipeCards/TabNav';
import Recipes from './Recipes';
import { Loader } from 'semantic-ui-react'


const RecipeList = ({ getRecipes, recipes, isFetching, history }) => {

  useEffect(() => {
    getRecipes()
  }, [getRecipes])

  const routeToRecipe = (e, recipe) => {
    e.preventDefault();
    history.push(`/recipe/${recipe.id}`)
  }
  return (
    <div>
      <TabNav />
      {isFetching ? <div style={{ textAlign: 'center' }}>I can hear your stomach grumbling...<Loader active inline='centered' /></div> : (
        <div className="recipes-container">
          {recipes.map(recipe => (
            <div onClick={e => routeToRecipe(e, recipe)}>
              <Recipes recipe={recipe} key={recipe.id} />
            </div>
>>>>>>> 6221365517bf9639268e0606e1a5208d591fa2e8
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
<<<<<<< HEAD
=======

>>>>>>> 6221365517bf9639268e0606e1a5208d591fa2e8

export default connect(
  mapStateToProps,
  { getRecipes }
)(RecipeList);
