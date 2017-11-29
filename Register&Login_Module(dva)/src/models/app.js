import fetchPosts from '../utils/request'
import { message } from 'antd'

export default {
  namespace: 'app',
  state: {
    taken: '',
    isLogin:false
  },
  subscriptions: {},
  effects: {
    * getCaptcha () {
      const res = yield fetchPosts({url: 'http://oj.marklux.cn/user/register'})
      if (res.code === 0) {
        return res.data
      }
    },
    * register (data) {
      const {payload} = data
      console.log(payload)
      const res = yield fetchPosts({
        url: 'http://oj.marklux.cn/user/register',
        method: 'post',
        data: payload
      })
      if (res.code === 0) {
        message.info('注册成功')
        return res
      }
    },
    * login (data) {
      const {payload} = data
      console.log(payload)
      const res = yield fetchPosts({
        url: 'http://oj.marklux.cn/user/login',
        method: 'post',
        data: payload
      })
      if (res.code === 0) {
        message.info('登录成功')
        return res.data
      }
    }
  },
  reducers: {
    hasLogin (state, {token} = payload) {
      return {
        ...state,
        token: token,
        isLogin:true
      }
    }
  }
}
