import { combineReducers } from 'redux';
import { favouritesReducer } from '../reducers/favouritesReducers';
import { recipesReducer } from './recipesReducers';
import { recipeReducer } from './recipeReducers';

export const rootReducer = combineReducers({
  recipes: recipesReducer,
  recipe: recipeReducer,
  favourites: favouritesReducer,
});
