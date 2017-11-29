import React, { Component } from 'react'
import { Button, Form, Input, Icon, Card } from 'antd'
import { connect } from 'dva-react-router-3'
import './index.less'

const FormItem = Form.Item

@Form.create()
@connect(({app}) => ({app}))
class Regiser extends Component {
  constructor (props) {
    super(props)
    this.state={
      captcha:''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.getCaptcha= this.getCaptcha.bind(this)
    this.asyncRegister = this.asyncRegister.bind(this)
  }
  componentDidMount(){
    this.getCaptcha()
  }
  getCaptcha = async function () {
    const data = await this.props.dispatch({type: 'app/getCaptcha'})
    console.log(data)
    this.setState({
      captcha:data.url
    })
  }
  asyncRegister = async function(values){
    const data = await this.props.dispatch({type:'app/register',payload:values})
    console.log(data)
    return data
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFieldsAndScroll((err, values) => {
      this.asyncRegister(values)
    })
  }



  render () {
    const {getFieldDecorator} = this.props.form
    const url=this.state.captcha
    return (
      <Card className='form-container' title='注册'>
        <Form onSubmit={this.handleSubmit}>
          <FormItem>
            {getFieldDecorator('name', {
              rules: [{required: true, max: 20}]
            })(
              <Input prefix={<Icon type='user' />} placeholder='请输入用户名' />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('email', {
              rules: [{required: true}]
            })(
              <Input type='email' prefix={<Icon type='mail' />} placeholder='请输入邮箱地址' />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('mobile', {
              rules: [{required: true, max: 20}]
            })(
              <Input prefix={<Icon type='mobile' />} placeholder='请输入手机号码' />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('school', {
              rules: [{required: false, max: 20}]
            })(
              <Input prefix={<Icon type='home' />} placeholder='请输入学校名称' />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{required: true, max: 20}]
            })(
              <Input type='password' prefix={<Icon type='lock' />} placeholder='请输入密码' />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password_confirmation', {
              rules: [{required: true, max: 20}]
            })(
              <Input type='password' prefix={<Icon type='lock' />} placeholder='请再次输入密码' />
            )}
          </FormItem>
          <FormItem className='form-container-captcha'>
            {getFieldDecorator('captcha', {
              rules: [{required: true, max: 20}]
            })(
              <Input placeholder='请输入右图中验证码' />
            )}
          </FormItem>
          <div className="form-container-captcha-img" onClick={this.getCaptcha}>
            <img src={url} alt="" />
          </div>
          <FormItem>
            <Button className='form-container-submit-button' type='primary' htmlType='submit'>提交</Button>
          </FormItem>
        </Form>
      </Card>
    )
  }
}

export default Regiser
