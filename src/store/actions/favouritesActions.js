import { Types } from '../Types';

export const addFavourite = (id) => ({
  type: Types.FAVOURITES_ADD,
  payload: { id },
});

export const removeFavourite = (id) => ({
  type: Types.FAVOURITES_REMOVE,
  payload: { id },
});
