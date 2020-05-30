import { Types } from '../Types';

const initialState = {
  items: 'hello world',
};

export const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_DATA_SUCCESS:
      console.log('redux ->', action.payload.recipes);
      return {
        items: action.payload.recipes,
      };
    default:
      return state;
  }
};
