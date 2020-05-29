import { TYPES } from '../types/favouriteTypes';

export const addFavourite = (id) => ({
  type: TYPES.FAVOURITE_ADD,
  id,
});

export const removeFavourite = (id) => ({
  type: TYPES.FAVOURITE_REMOVE,
  id,
});
