import {take, fork, call, put} from 'redux-saga/effects'
import {actionCreator, LOGIN_SUCCESS, POSTS_REQUEST} from '../actions/type'
import {message} from 'antd'

function * fetchUrl(request) {
  const data = yield call(fetch, request)
  const json = yield data.json()
  if(json.code===0){
    message.success('登陆成功')
  }else{
    message.error('用户不存在')
  }
  yield put(actionCreator(LOGIN_SUCCESS,data.user))
}

function * watchFetchRequests() {
  while(true){
    const action = yield take(POSTS_REQUEST)
    yield fork(fetchUrl, action.payload)
  }
}

export default function * rootSaga() {
  yield watchFetchRequests()
}
