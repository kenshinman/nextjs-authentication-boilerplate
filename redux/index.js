import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import { composeWithDevTools } from "redux-devtools-extension";

const middlewares = [thunk]


export const initStore = (initialState = {}) => {
  return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middlewares)));
};
