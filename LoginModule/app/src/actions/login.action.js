
// 用sagas替代下面的thunk解决方法

// function fetchPosts (url) {
//   return dispatch => {
//     dispatch(requestPosts(subreddit))
//     return fetch(url)
//       .then(response => {
//         console.log(response)
//         return response.json()
//       })
//       .then(json => dispatch(receivePosts(subreddit, json)))
//   }
// }
//
// function shouldFetchPosts (state, subreddit) {
//   const posts = state.postsBySubreddit[subreddit]
//   if (!posts) {
//     return true
//   } else if (state.isFetching) {
//     return false
//   } else {
//     return posts.didInvalidate
//   }
// }
//
// export function fetchPostsIfNeeded (subreddit) {
//   return (dispatch, getState) => {
//     if (shouldFetchPosts(getState(), subreddit)) {
//       return dispatch(fetchPosts(subreddit))
//     }
//   }
// }
