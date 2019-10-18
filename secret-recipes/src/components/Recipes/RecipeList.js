import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getRecipes } from '../../actions/index';
import '../../App.css';
import TabNav from '../RecipeCards/TabNav';

const RecipeList = ({ getRecipes, recipes }) => {
  // useEffect(() => {
  //   getRecipes()
  // }, [getRecipes])
  return (
    <div className="App">
      {/* {recipes.map(recipe => (
        <div>
          <p>{recipe.name}</p>
        </div>
      ))} */}
      <TabNav />
      Recipe List
    </div>
  );
}

const mapStateToProps = state => {
  return {
    recipes: state.recipes
  }
}

export default connect(mapStateToProps, { getRecipes })(RecipeList);
