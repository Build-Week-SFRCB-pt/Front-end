<<<<<<< HEAD
=======

>>>>>>> 6221365517bf9639268e0606e1a5208d591fa2e8
import { axiosWithAuth } from '../utils/axiosWithAuth';

export const FETCHING_RECIPES_START = "FETCHING_RECIPES_START"
export const FETCHING_RECIPES_SUCCESS = "FETCHING_RECIPES_SUCCESS"
export const FETCHING_RECIPES_FAIL = "FETCHING_RECIPES_FAIL"

export const getRecipes = () => dispatch => {
  dispatch({ type: FETCHING_RECIPES_START })
  axiosWithAuth()
    .get('https://lambdaschool-cookbook2.herokuapp.com/recipes')
<<<<<<< HEAD
    .then(res => {
      console.log("something", res.data)
      dispatch({ type: FETCHING_RECIPES_SUCCESS, payload: res.data.recipes })
=======
    .then(res => {
      console.log("something", res.data)
      dispatch({ type: FETCHING_RECIPES_SUCCESS, payload: res.data.recipes })
    })
}

export const ADD_RECIPE_START = "ADD_RECIPE_START"
export const ADD_RECIPE_SUCCESS = "ADD_RECIPE_SUCCESS"
export const ADD_RECIPE_FAIL = "ADD_RECIPE_FAIL"

export const addRecipe = newRecipe => dispatch => {
  dispatch({ type: ADD_RECIPE_START })
  axiosWithAuth()
    .post('https://lambdaschool-cookbook2.herokuapp.com/recipes', newRecipe)
    .then(res => {
      dispatch({ type: ADD_RECIPE_SUCCESS, payload: res.data })
>>>>>>> 6221365517bf9639268e0606e1a5208d591fa2e8
    })
    .catch(err => console.log(err))
}

export const ADD_RECIPE_START = "ADD_RECIPE_START"
export const ADD_RECIPE_SUCCESS = "ADD_RECIPE_SUCCESS"
export const ADD_RECIPE_FAIL = "ADD_RECIPE_FAIL"

export const addRecipe = newRecipe => dispatch => {
  dispatch({ type: ADD_RECIPE_START })
  axiosWithAuth()
    .post('https://lambdaschool-cookbook2.herokuapp.com/recipes', newRecipe)
    .then(res => {
      console.log(res)
      // dispatch({ type: ADD_RECIPE_SUCCESS, payload: res.data })
    })
    .catch(err => console.log(err))
}
