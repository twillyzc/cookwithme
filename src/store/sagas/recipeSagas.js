import { takeLatest, call, put } from "redux-saga/effects";

import { getRecipeLoading, getRecipeSuccess } from "../actions/recipeActions";
import { fetchUrl, API_KEY, API_URL } from "../../core/api";
import { Types } from "../Types";

function* recipeFetchData(action) {
  try {
    yield put(getRecipeLoading({ isLoading: true }));

    const recipe = yield call(
      fetchUrl,
      `${API_URL}/recipes/${action.id}/information?apiKey=${API_KEY}`
    );

    yield put(getRecipeSuccess(recipe));
    yield put(getRecipeLoading({ isLoading: false }));
  } catch (e) {
    console.log(e);
  }
}

export function* recipeWatchFetchData() {
  yield takeLatest(Types.RECIPE_GET_DATA_REQUEST, recipeFetchData);
}
