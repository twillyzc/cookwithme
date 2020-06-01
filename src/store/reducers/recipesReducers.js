import { Types } from '../Types';

const initialState = {
  items: [
    {
      id: 492560,
      title: 'Quick and Easy St. Louis-Style Pizza',
      readyInMinutes: 27,
      servings: 8,
      sourceUrl: 'https://www.cinnamonspiceandeverythingnice.com/st-louis-style-pizza/',
      openLicense: 0,
      image: 'St--Louis-Style-Pizza-492560.jpg',
    },
  ],
};

export const recipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.RECIPES_GET_DATA_SUCCESS:
      return {
        items: action.payload,
      };
    default:
      return state;
  }
};
