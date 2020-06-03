import { Types } from "../Types";

const initialState = {
  items: [],
  isLoading: false,
  totalResults: 0,
  currentSearch: "",
  baseUri: "",
};

export const recipesReducer = (state = initialState, action) => {
  const { type, currentSearch, isLoading, recipes } = action;
  switch (type) {
    case Types.RECIPES_GET_DATA_SUCCESS:
      return {
        ...state,
        items: [...recipes.results],
        totalResults: recipes.totalResults,
        baseUri: recipes.baseUri,
      };

    case Types.RECIPES_GET_DATA_LOADING:
      return { ...state, isLoading };

    case Types.RECIPES_GET_DATA_LOAD_MORE_SUCCESS:
      return {
        ...state,
        items: [...state.items, ...recipes.results],
      };

    case Types.RECIPES_SET_CURRENT_SEARCH:
      return { ...state, currentSearch };

    default:
      return state;
  }
};
