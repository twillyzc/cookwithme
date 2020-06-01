import { recipesWatchFetchData } from './recipesSagas';
import { recipeWatchFetchData } from './recipeSagas';

import { fork } from 'redux-saga/effects';

export function* rootSaga() {
  yield fork(recipesWatchFetchData);
  yield fork(recipeWatchFetchData);
}
