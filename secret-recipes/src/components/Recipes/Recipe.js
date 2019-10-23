
import React, { useEffect } from 'react';
import TabNav from '../RecipeCards/TabNav';
import { connect } from 'react-redux';
import { getSingleRecipe, deleteRecipe } from '../../actions/index';

const Recipe = ({ getSingleRecipe, deleteRecipe, singleRecipe, history, recipes, match }) => {


  useEffect(() => {
    getSingleRecipe(match.params.id)
  }, [match.params.id, getSingleRecipe])

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
      <p>{singleRecipe.source}</p>
      <p>{singleRecipe.notes}</p>
      <p>{singleRecipe.ingredients}</p>
      <p>{singleRecipe.instructions}</p>
      <button onClick={deleteFunction}>Delete</button>
      <button onClick={(e) => history.push(`/recipe/${match.params.id}/edit`)}>Edit Recipe</button>
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

