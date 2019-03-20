import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import App from './app';
import reducer from './reducers';
import promise from './middleware/promise';
import { install } from 'redux-loop';
import thunk from 'redux-thunk';

const enhancer = compose(
  applyMiddleware(thunk),
  install()
);

const store = createStore(reducer, {}, enhancer);

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default Root;
