import React, { useEffect } from 'react';
import TabNav from '../RecipeCards/TabNav';
import { connect } from 'react-redux';
import { getRecipe } from '../../actions/index';

const Recipe = ({ }) => {
  return (
    <div>
      <TabNav />
      Individual Recipe
    </div>
  )
}

const mapStateToProps = state => {
  return {
    recipes: state.recipes
  }
}

export default connect(mapStateToProps, {})(Recipe)