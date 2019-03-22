import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import App from './App'
import reducer from './reducers'
import { install } from 'redux-loop'
import ui_promise from './middleware/ui_promise'

const enhancer = compose(
  applyMiddleware(ui_promise),
  install()
);

const store = createStore(reducer, {}, enhancer)

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

export default Root
