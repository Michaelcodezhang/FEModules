/**
 * Created by out_xu on 17/3/16.
 */
import React, { Component } from 'react'
import { Link } from 'react-router'
import {Button } from 'antd'
import LoginModule from '../components/Login/index'

import './app.less'
class AppComponent extends Component {
  render () {
    return (
      <div className="App">
        <h1>This is a LoginModule~</h1>
        <LoginModule/>
      </div>
    )
  }
}

export default AppComponent
