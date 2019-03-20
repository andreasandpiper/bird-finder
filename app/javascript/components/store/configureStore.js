import { createStore, compose, applyMiddleware } from 'redux';
import reducer from '../reducers';
import { install } from 'redux-loop';
import thunk from 'redux-thunk';

const enhancer = compose(
  applyMiddleware(thunk),
  install()
);

const store = createStore(reducer, initialState, enhancer);
