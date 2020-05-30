export const addFavourite = (id) => ({
  type: 'FAVOURITE_ADD',
  payload: { id },
});

export const removeFavourite = (id) => ({
  type: 'FAVOURITE_REMOVE',
  payload: { id },
});
