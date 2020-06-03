import { combineReducers } from "redux";
import { recipesReducer } from "./recipesReducers";
import { recipeReducer } from "./recipeReducers";

export const rootReducer = combineReducers({
  recipes: recipesReducer,
  recipe: recipeReducer,
});
