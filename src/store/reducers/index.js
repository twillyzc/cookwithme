import { combineReducers } from 'redux';
import { favouritesReducer } from '../reducers/favouritesReducers';
import { recipeReducer } from './recipesReducers';

export const rootReducer = combineReducers({
  recipes: recipeReducer,
  favourites: favouritesReducer,
});
