import fetchPosts from '../utils/request'
import {message} from 'antd'

export default {
  namespace: 'app',
  state: {},
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
    }
  },
  reducers: {}
}
