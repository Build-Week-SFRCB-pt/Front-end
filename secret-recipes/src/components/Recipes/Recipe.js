
import React, { useEffect } from 'react';
import TabNav from '../RecipeCards/TabNav';
import { connect } from 'react-redux';
import { getSingleRecipe, deleteRecipe } from '../../actions/index';

const Recipe = ({ getSingleRecipe, deleteRecipe, singleRecipe, history, recipes, match }) => {


  useEffect(() => {
    getSingleRecipe(match.params.id)
    console.log(singleRecipe)
  }, [match.params.id])

  if (singleRecipe === null) {
    return <p>Loading...</p>
  }

  const deleteFunction = e => {
    e.preventDefault();
    deleteRecipe(match.params.id)
    history.push('/recipes')
  }

  return (
    <div>
      <TabNav />
      <p>{singleRecipe.title}</p>
      <button onClick={deleteFunction}>Delete</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    recipes: state.recipes,
    singleRecipe: state.singleRecipe
  }
}

export default connect(mapStateToProps, { getSingleRecipe, deleteRecipe })(Recipe)

