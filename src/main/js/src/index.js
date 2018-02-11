import React from 'react'
import { render } from 'react-dom'
import { applyMiddleware, createStore } from "redux"

import { Provider } from 'react-redux'
import App from './containers/App'
import reducer from './reducers'

import logger from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"

import 'todomvc-app-css/index.css'

const middleware = applyMiddleware(promise(), thunk, logger)

const store = createStore(reducer,middleware)


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
