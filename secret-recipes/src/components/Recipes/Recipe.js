import React, { useEffect } from 'react';
import TabNav from '../RecipeCards/TabNav';
import { connect } from 'react-redux';
import { getRecipes } from '../../actions/index';

const Recipe = ({ getRecipes, history, recipes, match }) => {
  const item = recipes.find(
    thing => `${thing.id}` === match.params.id
  );
  
  return (
    <div>
      <TabNav />
      <p>{item.title}</p>
      <button>Delete</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    recipes: state.recipes
  }
}

export default connect(mapStateToProps, { getRecipes })(Recipe)