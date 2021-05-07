import {
  combineReducers, createStore, applyMiddleware, compose,
} from 'redux';
import thunk from 'redux-thunk';
import filterReducer from './stock/filter/filterReducer';
import stockReducer from './stock/stockReducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({ stock: stockReducer, filter: filterReducer });
const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk)),
);

export default store;
