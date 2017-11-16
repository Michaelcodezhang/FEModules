import {POSTS_RECEIVE, POSTS_REQUEST} from '../../actions/type'

const initState = {
  request:{},
  isFetching:false
}

export default function posts (state=initState,action) {
  switch (action.type){
    case POSTS_REQUEST:
      return {
        ...state,
        request:action.payload,
        isFetching:true
      }
    case POSTS_RECEIVE:
      return {
        ...state,
        isFetching:false
      }
    default:
      return state
  }
}