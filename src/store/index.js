import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { reducer } from './reducers';
import { all } from 'redux-saga/effects';
import recipeSagas from './sagas/recipeSagas';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(recipeSagas);

export default function* rootSaga() {
  yield all([...recipeSagas]);
}
