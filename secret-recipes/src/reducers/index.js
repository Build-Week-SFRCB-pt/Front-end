import {
  FETCHING_RECIPES_START,
  FETCHING_RECIPES_SUCCESS,
  FETCHING_RECIPES_FAIL,
  FETCHING_SINGLE_RECIPE_START,
  FETCHING_SINGLE_RECIPE_SUCCESS,
  FETCHING_SINGLE_RECIPE_FAIL,
  ADD_RECIPE_START,
  ADD_RECIPE_SUCCESS,
  DELETE_RECIPE_SUCCESS,
  UPDATE_RECIPE_SUCCESS
} from "../actions/index";

const initialState = {
  recipes: [],
  singleRecipe: null,
  isFetching: false
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_RECIPES_START:
      return {
        ...state,
        isFetching: true
      }
    case FETCHING_RECIPES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        recipes: action.payload
      }
    case FETCHING_SINGLE_RECIPE_START:
      return {
        ...state,
        isFetching: true
      }
    case FETCHING_SINGLE_RECIPE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        singleRecipe: action.payload
      }
    case ADD_RECIPE_START:
      return {
        ...state,
        isFetching: true
      }
    case ADD_RECIPE_SUCCESS:
      return {
        ...state,
        recipes: action.payload,
        isFetching: false
      };
    case DELETE_RECIPE_SUCCESS:
      return {
        ...state,
        recipes: action.payload
      };

    case UPDATE_RECIPE_SUCCESS:
      return {
        ...state,
        // recipes: state.recipes.filter(recipe => recipe.id !== action.payload)
      };
    default:
      return state
  }
}