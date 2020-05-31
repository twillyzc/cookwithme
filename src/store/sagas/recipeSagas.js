import { takeEvery, call, put } from 'redux-saga/effects';
import { Types } from '../Types';
import { fetchUrl, API_KEY, API_URL } from '../../core/api';

function* recipesListFetchData(action) {
  try {
    const recipes = yield call(
      fetchUrl,
      `${API_URL}/recipes/search?query=${action.payload}&apiKey=${API_KEY}`
    );

    yield put({ type: Types.RECIPES_GET_DATA_SUCCESS, payload: recipes.results });
  } catch (e) {
    console.log(e);
  }
}

export function* recipesListWatchFetchData() {
  yield takeEvery(Types.RECIPES_GET_DATA_REQUEST, recipesListFetchData);
}
