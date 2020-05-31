import { recipesListWatchFetchData } from './recipeSagas';
import { fork } from 'redux-saga/effects';

export function* rootSaga() {
  yield fork(recipesListWatchFetchData);
  // yield fork(saga2)
  // yield fork(saga3)
  // code after fork-effect
}
