import { Types } from '../Types';

const initialState = {
  item: {},
  isLoading: false
};

export const recipeReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case Types.RECIPE_GET_DATA_SUCCESS:
      return {...state,
        item: payload,
      };
    case Types.RECIPE_GET_DATA_LOADING:
      return {...state, isLoading: payload
      };
    default:
      return state;
  }
};
