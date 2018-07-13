export const SET_VIEW = 'SET_VIEW';

export function setView(view) {
  return { type: SET_VIEW, view }
}

export const SET_PHASE = 'SET_PHASE';

export function setPhase(phaseId) {
  return { type: SET_PHASE, phaseId }
}

export const REQUEST_FIRST_PATTERN = 'REQUEST_FIRST_PATTERN';
export const RECEIVE_FIRST_PATTERN = 'RECEIVE_FIRST_PATTERN';

function requestFirstPatternInPhase(phaseId) {
  return {type: REQUEST_FIRST_PATTERN, phaseId}
}

export function receiveFirstPatternInPhase(json, phaseId, patternId) {
  return {type: RECEIVE_FIRST_PATTERN, pattern: json, phaseId, patternId, receivedAt: Date.now()}
}

export function fetchFirstPatternInPhase(phaseId) {
  return function (dispatch) {
    dispatch(requestFirstPatternInPhase(phaseId));
    // return fetch(`http://192.168.1.191:8080/patterns/${patternId}`)
    return fetch(`http://localhost:8080/phase/${phaseId}/patterns/1`)
      .then((response) => response.json())
      .then((responseJson) => {
        dispatch(receiveFirstPatternInPhase(responseJson, phaseId, 1));
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

export const REQUEST_PATTERN = 'REQUEST_PATTERN';
export const RECEIVE_PATTERN = 'RECEIVE_PATTERN';

function requestNextPattern(patternId) {
  return { type: REQUEST_PATTERN, patternId };
}
function receiveNextPattern(json, patternId) {
  return { type: RECEIVE_PATTERN, pattern: json, patternId, receivedAt: Date.now() };
}

// export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT'
// export function invalidateSubreddit(subreddit) {
//   return {
//     type: INVALIDATE_SUBREDDIT,
//     subreddit
//   }
// }

export function fetchPattern(phaseId, patternId) {
  return function (dispatch) {
    dispatch(requestNextPattern(patternId));
    // return fetch(`http://192.168.1.191:8080/patterns/${patternId}`)
    return fetch(`http://localhost:8080/phase/${phaseId}/patterns/${patternId}`)
      .then((response) => response.json())
      .then((responseJson) => {
        dispatch(receiveNextPattern(responseJson, patternId));
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
