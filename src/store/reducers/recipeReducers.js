import { Types } from "../Types";

const initialState = {
  item: {},
  isLoading: false,
};

const getData = (state, { item }) => ({
  ...state,
  item,
});

const dataIsLoading = (state, { isLoading }) => ({
  ...state,
  isLoading,
});

export const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.RECIPE_GET_DATA_SUCCESS:
      return getData(state, action);
    case Types.RECIPE_GET_DATA_LOADING:
      return dataIsLoading(state, action);
    default:
      return state;
  }
};
