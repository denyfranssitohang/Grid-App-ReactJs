import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import gridReducer from '../features/Grid/reducer';

/* Gabungkan Reducer */
let rootReducer = combineReducers({
    grid: gridReducer
})
/* End Gabungkan Reducer */

/* buat 'composeEnhacers' (2) */
const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose;

let store = createStore(rootReducer, composeEnhacers(applyMiddleware(thunk))); 

export default store;
