import { combineReducers } from 'redux';
import { favouritesReducer } from '../reducers/favouritesReducers';

export const reducer = combineReducers({ favourites: favouritesReducer });
