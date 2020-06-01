import { Types } from '../Types';

export const getRecipeRequest = (id) => ({
  type: Types.RECIPE_GET_DATA_REQUEST,
  payload: id,
});

export const getRecipeSuccess = ({ data }) => ({
  type: Types.RECIPE_GET_DATA_SUCCESS,
  payload: data,
});
