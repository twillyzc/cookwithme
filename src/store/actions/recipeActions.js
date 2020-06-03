import { Types } from "../Types";

export const getRecipeRequest = (id) => ({
  type: Types.RECIPE_GET_DATA_REQUEST,
  payload: id,
});

export const getRecipeLoading = ({ isLoading }) => ({
  type: Types.RECIPE_GET_DATA_LOADING,
  payload: isLoading,
});

export const getRecipeSuccess = (recipe) => ({
  type: Types.RECIPE_GET_DATA_SUCCESS,
  payload: recipe,
});
