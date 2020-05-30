import { takeEvery, call, fork, put } from 'redux-saga/effects';
import { Types } from '../Types';

const api = (url) => fetch(url).then((res) => res.json());

function* fetchData() {
  try {
    const recipes = yield call(
      api,
      'https://api.spoonacular.com/recipes/search?query=pizza&apiKey=eabcd8e465554eb996d607d272f86d49'
    );

    yield put({ type: Types.GET_DATA_SUCCESS, payload: recipes.results });
  } catch (e) {
    console.log(e);
  }
}

export function* watchFetchData() {
  yield takeEvery(Types.GET_DATA_REQUEST, fetchData);
}
