import { Types } from "../Types";

export const getRecipesRequest = (inputValue) => ({
  type: Types.RECIPES_GET_DATA_REQUEST,
  inputValue,
});

export const getRecipesLoading = ({ isLoading }) => ({
  type: Types.RECIPES_GET_DATA_LOADING,
  isLoading,
});

export const getRecipesSuccess = (recipes) => ({
  type: Types.RECIPES_GET_DATA_SUCCESS,
  recipes,
});

export const getRecipesLoadMoreSuccess = (recipes) => ({
  type: Types.RECIPES_GET_DATA_LOAD_MORE_SUCCESS,
  recipes,
});

export const getRecipesLoadMoreRequest = (data) => ({
  type: Types.RECIPES_GET_DATA_LOAD_MORE_REQUEST,
  data,
});

export const setCurrentSearch = (currentSearch) => ({
  type: Types.RECIPES_SET_CURRENT_SEARCH,
  currentSearch,
});
