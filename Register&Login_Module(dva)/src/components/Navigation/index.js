import React, { Component } from 'react'
import { Layout, Menu } from 'antd'
import { Link } from 'dva-react-router-3/router'
import Login from '../Login/index'
import { connect } from 'dva-react-router-3'

const {Header} = Layout
const MenuItem = Menu.Item

class Navigation extends Component {
  render () {
    const {isLogin} = this.props.app
    console.log(isLogin)
    return (
      <Header>
        <Menu theme="dark" mode="horizontal" style={{lineHeight: '62px'}}>
          <MenuItem><Link to="/">主页</Link></MenuItem>
          <MenuItem><Link to="/">页面一</Link></MenuItem>
          <MenuItem><Link to="/">页面二</Link></MenuItem>
          <MenuItem><Link to="/">页面三</Link></MenuItem>
          {isLogin ? <span>已登录</span> : <Login />}
        </Menu>
      </Header>
    )
  }
}

export default connect(({app}) => ({app}))(Navigation)
