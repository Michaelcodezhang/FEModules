import React from 'react'
import AppComponent from './routes/app'
import { Router, Route, IndexRoute, hashHistory } from 'dva-react-router-3/router'
import HomePage from './components/HomePage/index'
import Regiser from './components/Register/index'
// import AsyncComponent from 'components/AsyncComponent'

const RouterApp = () => {
  return (
    <Router history={hashHistory}>
      <Route path='/' component={AppComponent}>
        <IndexRoute component={HomePage} />
        <Route path='register' component={Regiser} />
      </Route>
    </Router>
  )
}

export default RouterApp
