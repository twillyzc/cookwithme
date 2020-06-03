import { Types } from "../Types";

const initialState = {
  items: [],
  isLoading: false,
  totalResults: 0,
  currentSearch: "",
};

export const recipesReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case Types.RECIPES_GET_DATA_SUCCESS:
      return {
        ...state,
        items: [...payload.results],
        totalResults: payload.totalResults,
      };

    case Types.RECIPES_GET_DATA_LOADING:
      return { ...state, isLoading: payload };

    case Types.RECIPES_GET_DATA_LOAD_MORE_SUCCESS:
      return {
        ...state,
        items: [...state.items, ...payload.results],
      };

    case Types.RECIPES_SET_CURRENT_SEARCH:
      return { ...state, currentSearch: payload.value };

    default:
      return state;
  }
};
