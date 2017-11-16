import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Modal, Button, Form, Icon, Input, Checkbox } from 'antd'
import './index.less'
import {login} from '../../utils/request'
import {actionCreator, POSTS_REQUEST} from '../../actions/type'

const FormItem=Form.Item

const mapStateToProps = ()=>{}
const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit:(body) => {
      dispatch(actionCreator(POSTS_REQUEST,login(body)))
    }
  }
}

@connect(mapStateToProps,mapDispatchToProps)
@Form.create()
class LoginModule extends Component{
  constructor(){
    super()
    this.state = {
      visible:false
    }
    this.showModal=this.showModal.bind(this)
    this.handCancel=this.handCancel.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
  }
  handleSubmit = () =>{
    console.log('1')
    this.props.form.validateFields((err, values)=>{
      if(!err){
        const {identifier, password} = values
        const body = {identifier, password}
        this.props.onSubmit(body)
      }
    })
    this.setState({visible:false})
  }
  showModal = () =>{
    this.setState({
      visible:true
    })
  }
  handCancel = () =>{
    this.setState({
      visible:false
    })
  }
  render(){
    const {getFieldDecorator} = this.props.form
    return(
      <div>
        <Button type='primary' onClick={this.showModal}>Login</Button>
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
                    rules:[{max:20, min:3, required:true, massage:'输入为Username/手机号/邮箱'}]
                  })
                  (
                    <Input
                      prefix={<Icon type='user'/>}
                      placeholder='旧版本OJ的Username/手机号/邮箱'/>
                  )}
                </FormItem>
                <FormItem>
                  {getFieldDecorator('password', {})
                  (
                    <Input
                      type='password'
                      prefix={<Icon type='lock'/>}/>
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

export default LoginModule
