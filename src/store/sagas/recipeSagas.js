import { takeEvery, call, put } from 'redux-saga/effects';
import { Types } from '../Types';
import { fetchUrl, API_KEY, API_URL } from '../../core/api';

function* recipeFetchData(action) {
  try {
    const recipe = yield call(
      fetchUrl,
      `${API_URL}/recipes/${action.payload}/information?apiKey=${API_KEY}`
    );

    yield put({ type: Types.RECIPE_GET_DATA_SUCCESS, payload: recipe });
  } catch (e) {
    console.log(e);
  }
}

export function* recipeWatchFetchData() {
  yield takeEvery(Types.RECIPE_GET_DATA_REQUEST, recipeFetchData);
}
