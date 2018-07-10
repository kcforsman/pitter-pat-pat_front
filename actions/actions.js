export const REQUEST_PATTERN = 'REQUEST_PATTERN';
export const RECEIVE_PATTERN = 'RECEIVE_PATTERN';

function requestPattern(patternId) {
  return { type: REQUEST_PATTERN, patternId };
}
function receivePattern(json, patternId) {
  return { type: RECEIVE_PATTERN, pattern: json, patternId, receivedAt: Date.now() };
}

// export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT'
// export function invalidateSubreddit(subreddit) {
//   return {
//     type: INVALIDATE_SUBREDDIT,
//     subreddit
//   }
// }

export function fetchPattern(patternId) {
  return function (dispatch) {
    dispatch(requestPattern(patternId));

    return fetch(`http://localhost:8080/patterns/${patternId}`)
      .then((response) => response.json())
      .then((responseJson) => {
        dispatch(receivePattern(responseJson, patternId));
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
