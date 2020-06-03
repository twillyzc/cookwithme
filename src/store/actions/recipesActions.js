import { Types } from "../Types";

export const getRecipesRequest = ({ inputValue }) => ({
  type: Types.RECIPES_GET_DATA_REQUEST,
  payload: { inputValue },
});

export const getRecipesLoading = ({ isLoading }) => ({
  type: Types.RECIPES_GET_DATA_LOADING,
  payload: isLoading,
});

export const getRecipesSuccess = (recipes) => ({
  type: Types.RECIPES_GET_DATA_SUCCESS,
  payload: recipes,
});

export const getRecipesLoadMoreSuccess = (recipe) => ({
  type: Types.RECIPES_GET_DATA_LOAD_MORE_SUCCESS,
  payload: recipe,
});

export const getRecipesLoadMoreRequest = ({ value, offset }) => ({
  type: Types.RECIPES_GET_DATA_LOAD_MORE_REQUEST,
  payload: { value, offset },
});

export const setCurrentSearch = (searchString) => ({
  type: Types.RECIPES_SET_CURRENT_SEARCH,
  payload: { value: searchString },
});
