import { Types } from "../Types";

const initialState = {
  items: [],
  isLoading: false,
  totalResults: 0,
  currentSearch: "",
  baseUri: "",
};

const setRecipes = (state, { results, totalResults, baseUri }) => {
  return {
    ...state,
    items: [...results],
    totalResults,
    baseUri,
  };
};

const setLoading = (state, { isLoading }) => ({
  ...state,
  isLoading,
});

const loadMoreRecipes = (state, { recipes }) => ({
  ...state,
  items: [...state.items, ...recipes.results],
});

const setCurrentSearch = (state, { currentSearch }) => ({
  ...state,
  currentSearch,
});

export const recipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.RECIPES_GET_DATA_SUCCESS:
      return setRecipes(state, action.recipes);

    case Types.RECIPES_GET_DATA_LOADING:
      return setLoading(state, action);

    case Types.RECIPES_GET_DATA_LOAD_MORE_SUCCESS:
      return loadMoreRecipes(state, action);

    case Types.RECIPES_SET_CURRENT_SEARCH:
      return setCurrentSearch(state, action);

    default:
      return state;
  }
};
