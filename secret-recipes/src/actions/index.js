import { axiosWithAuth } from "../utils/axiosWithAuth";

export const FETCHING_RECIPES_START = "FETCHING_RECIPES_START";
export const FETCHING_RECIPES_SUCCESS = "FETCHING_RECIPES_SUCCESS";
export const FETCHING_RECIPES_FAIL = "FETCHING_RECIPES_FAIL";

export const getRecipes = () => dispatch => {
  dispatch({ type: FETCHING_RECIPES_START });
  axiosWithAuth()
    .get("recipes")
    .then(res => {
      console.log(res)
      dispatch({ type: FETCHING_RECIPES_SUCCESS, payload: res.data.recipes });
    });
};

export const FETCHING_SINGLE_RECIPE_START = "FETCHING_SINGLE_RECIPE_START"
export const FETCHING_SINGLE_RECIPE_SUCCESS = "FETCHING_SINGLE_RECIPE_SUCCESS"
export const FETCHING_SINGLE_RECIPE_FAIL = "FETCHING_SINGLE_RECIPE_FAIL"

export const getSingleRecipe = id => dispatch => {
  dispatch({ type: FETCHING_SINGLE_RECIPE_START })
  axiosWithAuth()
    .get(`recipes/${id}`)
    .then(res => {
      dispatch({ type: FETCHING_SINGLE_RECIPE_SUCCESS, payload: res.data.recipe })
    })
}

export const ADD_RECIPE_START = "ADD_RECIPE_START";
export const ADD_RECIPE_SUCCESS = "ADD_RECIPE_SUCCESS";
export const ADD_RECIPE_FAIL = "ADD_RECIPE_FAIL";

export const addRecipe = newRecipe => dispatch => {
  dispatch({ type: ADD_RECIPE_START });
  axiosWithAuth()
    .post("recipes", newRecipe)
    .then(res => {
      console.log(res.data)
      dispatch({ type: ADD_RECIPE_SUCCESS, payload: res.data });
    })
    .catch(err => console.log(err));
};

export const DELETE_RECIPE_START = "DELETE_RECIPE_START";
export const DELETE_RECIPE_SUCCESS = "DELETE_RECIPE_SUCCESS";
export const DELETE_RECIPE_FAIL = "DELETE_RECIPE_FAIL";

export const deleteRecipe = id => dispatch => {
  dispatch({ type: DELETE_RECIPE_START });
  axiosWithAuth()
    .delete(`recipes/${id}`)
    .then(res => {
      console.log("delete", res)
      dispatch({ type: DELETE_RECIPE_SUCCESS, payload: res.data });
    })
    .catch(err => console.log(err));
};

export const UPDATE_RECIPE_START = "UPDATE_RECIPE_START";
export const UPDATE_RECIPE_SUCCESS = "UPDATE_RECIPE_SUCCESS";
export const UPDATE_RECIPE_FAIL = "UPDATE_RECIPE_FAIL";

export const updateRecipe = id => dispatch => {
  dispatch({ type: UPDATE_RECIPE_START });
  axiosWithAuth()
    .push(`recipes/${id}`)
    .then(res => {
      dispatch({ type: UPDATE_RECIPE_SUCCESS, payload: id });
    })
    .catch(err => console.log(err));
};
