
import React, { useEffect } from 'react';
import TabNav from '../RecipeCards/TabNav';
import { connect } from 'react-redux';
import { getSingleRecipe } from '../../actions/index';

const Recipe = ({ getSingleRecipe, singleRecipe, history, recipes, match }) => {


  useEffect(() => {
    getSingleRecipe(match.params.id)
    console.log(singleRecipe)
  }, [match.params.id])

  if(singleRecipe === null){
    return <p>Loading...</p>
  }

  return (
    <div>
      <TabNav />
      <p>{singleRecipe.title}</p>
      <button>Delete</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    recipes: state.recipes,
    singleRecipe: state.singleRecipe
  }
}

export default connect(mapStateToProps, { getSingleRecipe })(Recipe)

