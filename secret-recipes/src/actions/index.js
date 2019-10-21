// import axios from 'axios' 
import { axiosWithAuth } from '../utils/axiosWithAuth';

export const FETCHING_RECIPES_START = "FETCHING_RECIPES_START"
export const FETCHING_RECIPES_SUCCESS = "FETCHING_RECIPES_SUCCESS"
export const FETCHING_RECIPES_FAIL = "FETCHING_RECIPES_FAIL"

export const getRecipes = token => dispatch => {
  // localStorage.setItem('token', token)
  dispatch({ type: FETCHING_RECIPES_START })
  axiosWithAuth()
    .get('https://lambdaschool-cookbook2.herokuapp.com/recipes', {
      headers: {
        Authorization: token
      }
    }
    )
    .then(res => {
      console.log("something", res)
      dispatch({ type: FETCHING_RECIPES_SUCCESS, payload: res.data })
    })
}
