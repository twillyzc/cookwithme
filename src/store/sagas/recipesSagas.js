import { takeEvery, call, put } from 'redux-saga/effects';
import { Types } from '../Types';
import { fetchUrl, API_KEY, API_URL } from '../../core/api';

function* recipesFetchData(action) {
  try {
    const recipes = yield call(
      fetchUrl,
      `${API_URL}/recipes/search?query=${action.payload}&number=100&apiKey=${API_KEY}`
    );

    yield put({ type: Types.RECIPES_GET_DATA_SUCCESS, payload: recipes.results });
  } catch (e) {
    console.log(e);
  }
}

export function* recipesWatchFetchData() {
  yield takeEvery(Types.RECIPES_GET_DATA_REQUEST, recipesFetchData);
}
