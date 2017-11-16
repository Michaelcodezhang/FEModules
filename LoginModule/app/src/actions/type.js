export const LOGIN_SUCCESS='LOGIN_SUCCESS'
export const POSTS_REQUEST='POSTS_REQUEST'
export const POSTS_RECEIVE='POSTS_RECEIVE'

export const actionCreator = (type, payload={}) =>{
  return {
    type,
    payload:payload
  }
}
