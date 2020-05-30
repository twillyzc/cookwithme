import { takeEvery, call, fork, put } from 'redux-saga/effects';
import { getDataRequest, getDataSuccess } from '../actions/repiceActions';
import { getRecipes } from '../api/data';
import { Types } from '../Types';

function* fetchData() {
  try {
    const data = yield call(getRecipes);
    yield put(getDataSuccess({ recipes: data.results }));
  } catch (error) {
    console.log(error);
  }
}

function* watchFetchData() {
  yield takeEvery(Types.GET_DATA_REQUEST, fetchData);
}

export default function* (recipeSagas) {
  return [fork(watchFetchData)];
}
