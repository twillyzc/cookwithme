import { Types } from "../Types";

export const getRecipeRequest = (id) => ({
  type: Types.RECIPE_GET_DATA_REQUEST,
  id,
});

export const getRecipeLoading = ({ isLoading }) => ({
  type: Types.RECIPE_GET_DATA_LOADING,
  isLoading,
});

export const getRecipeSuccess = (item) => ({
  type: Types.RECIPE_GET_DATA_SUCCESS,
  item,
});
