import { takeLatest, takeEvery, call, put } from 'redux-saga/effects';
import { Types } from '../Types';
import { fetchUrl, API_KEY, API_URL } from '../../core/api';
import {  getRecipesSuccess, getRecipesLoading, getRecipesLoadMoreSuccess, setCurrentSearch} from '../actions/recipesActions'

function* recipesFetchData(action) {
  try {
    yield put(getRecipesLoading({isLoading: true}))

    const recipes = yield call(
      fetchUrl,
      `${API_URL}/recipes/search?query=${action.payload.inputValue}&number=10&apiKey=${API_KEY}`
    );

    yield put(getRecipesSuccess(recipes));
    yield put(getRecipesLoading({isLoading: false}))

    yield put(setCurrentSearch(action.payload.inputValue))

  } catch (e) {
    console.log(e);
  }
}

function* recipesFetchMoreData(action) {
  try {
    yield put(getRecipesLoading({isLoading: true}))
  console.log('fetching saga 1')
    const recipes = yield call(
        fetchUrl,
        `${API_URL}/recipes/search?query=${action.payload.value}&number=10&offset=${action.payload.offset}&apiKey=${API_KEY}`
    );

    yield put(getRecipesLoadMoreSuccess(recipes));
    console.log('fetching saga 2')

    yield put(getRecipesLoading({isLoading: false}))


  } catch (e) {
    console.log(e);
  }
}

export function* recipesWatchFetchData() {
  yield takeLatest(Types.RECIPES_GET_DATA_REQUEST, recipesFetchData);
  yield takeEvery(Types.RECIPES_GET_DATA_LOAD_MORE_REQUEST, recipesFetchMoreData);
}
