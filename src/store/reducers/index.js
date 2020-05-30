import { combineReducers } from 'redux';
import { favouritesReducer } from '../reducers/favouritesReducers';
import { recipeReducer } from '../reducers/recipeReducers';

export const rootReducer = combineReducers({
  recipes: recipeReducer,
  favourites: favouritesReducer,
});
