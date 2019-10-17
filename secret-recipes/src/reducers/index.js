import {
  FETCHING_RECIPES_START,
  FETCHING_RECIPES_SUCCESS,
  FETCHING_RECIPES_FAIL
}

  from '../actions/index';

const initialState = {
  recipes: [],
  currentUser: {},
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
    default:
      return state
  }
}