import {
  FETCHING_RECIPES_START,
  FETCHING_RECIPES_SUCCESS,
  ADD_RECIPE_START,
  ADD_RECIPE_SUCCESS,
  DELETE_RECIPE_START,
  UPDATE_RECIPE_START
} from "../actions/index";

const initialState = {
  recipes: [],
  isFetching: false
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_RECIPES_START:
      return {
        ...state,
        isFetching: true
      };
    case FETCHING_RECIPES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        recipes: action.payload
      };
    case ADD_RECIPE_START:
      return {
        ...state,
        isFetching: true
      };
    case ADD_RECIPE_SUCCESS:
      return {
        ...state,
        recipes: [...state.recipes, action.payload],
        isFetching: false
      };
    case DELETE_RECIPE_START:
      return {
        ...state,
        recipes: state.recipes.filter(recipe => recipe.id !== action.payload)
      };

    case UPDATE_RECIPE_START:
      return {
        ...state,
        recipes: state.recipes.filter(recipe => recipe.id !== action.payload)
      };
    default:
      return state;
  }
};
