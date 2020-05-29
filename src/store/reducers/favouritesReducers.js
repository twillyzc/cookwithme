import { TYPES } from '../types/favouriteTypes';

const initialState = {
  items: [],
};

const addToFavourite = (state, { id }) => {
  return { items: [...state.items, id] };
};

const removeFromFavourite = (state, { id }) => {
  return {
    items: [...state.items.filter((item) => item !== id)],
  };
};

export const favouritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.FAVOURITE_ADD:
      return addToFavourite(state, action);
    case TYPES.FAVOURITE_REMOVE:
      return removeFromFavourite(state, action);
    default:
      return state;
  }
};
