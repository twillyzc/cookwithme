import { Types } from '../Types';

export const getRecipesRequest = (inputValue) => ({
  type: Types.RECIPES_GET_DATA_REQUEST,
  payload: inputValue,
});

export const getRecipesSuccess = ({ data }) => ({
  type: Types.RECIPES_GET_DATA_SUCCESS,
  payload: data,
});
