import {LOGIN_SUCCESS} from '../../actions/type'

const initUser = {
  islogin:false,
  userInfo:{}
}

export default function user (state = initUser,action) {
  switch (action.type){
    case LOGIN_SUCCESS:
      return {
        ...state,
        islogin:true,
        userInfo:action.payload
      }
    default:
      return state
  }
}
