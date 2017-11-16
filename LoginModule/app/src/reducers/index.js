/**
 * Created by out_xu on 16/12/20.
 */
import { combineReducers } from 'redux'
import user from './Login/index'
import posts from './Posts/index'

const rootReducer = combineReducers({
  user,
  posts
})

export default rootReducer
