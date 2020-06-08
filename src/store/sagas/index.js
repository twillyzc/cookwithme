import { fork } from "redux-saga/effects";

import { recipesWatchFetchData } from "./recipesSagas";
import { recipeWatchFetchData } from "./recipeSagas";

export function* rootSaga() {
  yield fork(recipesWatchFetchData);
  yield fork(recipeWatchFetchData);
}
