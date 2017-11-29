import React, {Component} from 'react'
import { Helmet } from 'react-helmet'
import config from '../config/app'
import { connect } from 'dva-react-router-3'
import Navigation from '../components/Navigation/index'

class AppComponent extends Component {
  render() {
    const {loading} = this.props
    const {logoSrc = '', name = '', iconFontJS, iconFontCSS} = config
    return (
      <div>
        <Helmet>
          <title>{name}</title>
          <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        </Helmet>
        <Navigation/>
        {this.props.children}
      </div>
    )
  }
}

export default connect(({loading, app, user}) => ({loading, app, user}))(AppComponent)
