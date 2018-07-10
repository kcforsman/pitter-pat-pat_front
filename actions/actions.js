export const REQUEST_PATTERN = 'REQUEST_PATTERN';
export const RECEIVE_PATTERN = 'RECEIVE_PATTERN';

function requestPattern() {
  return {type: REQUEST_PATTERN};
}
function receivePattern(json) {
  return { type: RECEIVE_PATTERN, pattern: json, receivedAt: Date.now() };
}

// export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT'
// export function invalidateSubreddit(subreddit) {
//   return {
//     type: INVALIDATE_SUBREDDIT,
//     subreddit
//   }
// }

export function fetchPattern() {
  return function (dispatch) {
    dispatch(requestPattern());

    return fetch("http://localhost:8080/patterns/1")
      .then((response) => response.json())
      .then((responseJson) => {
        console.log({location: "in Action.js", responseJson: responseJson})
        dispatch(receivePattern(responseJson));
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
