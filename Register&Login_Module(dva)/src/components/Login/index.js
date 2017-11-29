import React, { Component } from 'react'
import { connect } from 'dva-react-router-3'
import { Modal, Button, Form, Icon, Input, Checkbox } from 'antd'
import './index.less'
import { login } from '../../utils/request'
import {Link} from 'dva-react-router-3/router'

const FormItem = Form.Item
const ButtonGroup = Button.Group

@Form.create()
class Login extends Component {
  constructor () {
    super()
    this.state = {
      visible: false
    }
    this.showModal = this.showModal.bind(this)
    this.handCancel = this.handCancel.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.asyncLogin=this.asyncLogin.bind(this)
  }
  asyncLogin = async function(values){
    const data = await this.props.dispatch({type:'app/login',payload:values})
    console.log(data.token)
    await this.props.dispatch({type:'app/hasLogin',token:data.token})
    console.log(this.props.app.token)
    return data
  }
  handleSubmit = () => {
    console.log('1')
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.asyncLogin(values)
      }
    })
    this.setState({visible: false})
  }
  showModal = () => {
    this.setState({
      visible: true
    })
  }
  handCancel = () => {
    this.setState({
      visible: false
    })
  }

  render () {
    const {getFieldDecorator} = this.props.form
    return (
      <div>
        <ButtonGroup className="button-container">
          <Button type='primary' onClick={this.showModal}>登录</Button>
          <Button type='primary'><Link to="/register">注册</Link></Button>
        </ButtonGroup>
        <Modal
          cancelText='取消'
          okText='登录'
          onCancel={this.handCancel}
          visible={this.state.visible}
          footer={null}
          width={300}
          closable={false}>
          <div className="login-container">
            <div className="login-container-title">
              欢迎登录NEUQ-OJ
            </div>
            <div className="login-container-form">
              <Form onSubmit={this.handleSubmit}>
                <FormItem>
                  {getFieldDecorator('identifier', {
                    rules: [{max: 20, min: 3, required: true, massage: '输入为Username/手机号/邮箱'}]
                  })
                  (
                    <Input
                      prefix={<Icon type='user' />}
                      placeholder='旧版本OJ的Username/手机号/邮箱' />
                  )}
                </FormItem>
                <FormItem>
                  {getFieldDecorator('password', {})
                  (
                    <Input
                      type='password'
                      prefix={<Icon type='lock' />} />
                  )}
                </FormItem>
                <Button className='btn-submit' ghost={true} type='primary' htmlType='submit'>登录</Button>
              </Form>
            </div>
          </div>
        </Modal>
      </div>
    )
  }
}

export default connect(({app})=>({app}))(Login)