import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getRecipes } from '../../actions/index';
import './Recipes.css'
import TabNav from '../RecipeCards/TabNav';
import Recipe from './Recipe';

const RecipeList = ({ getRecipes, recipes }) => {

  useEffect(() => {
    getRecipes()
  }, [getRecipes])
  return (
    <div>
      <TabNav />
      <div className="recipes-container">
        {recipes.map(recipe => (
          <Recipe recipe={recipe} key={recipe.id} />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    recipes: state.recipes
  }
}

export default connect(mapStateToProps, { getRecipes })(RecipeList);
