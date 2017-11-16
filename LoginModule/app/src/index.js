import React from 'react'
import ReactDOM from 'react-dom'
// 使用Sagas
import createSagaMiddleware from 'redux-saga'
// 引入redux
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import RouterApp from './router/index'

import rootReducer from './reducers/index'
import rootSaga from './sagas/index'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <RouterApp />
  </Provider>,
  document.getElementById('app')
)
