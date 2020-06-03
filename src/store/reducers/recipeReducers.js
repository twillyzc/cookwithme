import { Types } from "../Types";

const initialState = {
  item: {},
  isLoading: false,
};

const getData = (state, action) => ({
  ...state,
  item: action.payload,
});

export const recipeReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case Types.RECIPE_GET_DATA_SUCCESS:
      return getData(state, action);
    case Types.RECIPE_GET_DATA_LOADING:
      return {
        ...state,
        isLoading: payload,
      };
    default:
      return state;
  }
};
