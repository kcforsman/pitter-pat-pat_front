export const SET_VIEW = 'SET_VIEW';

export function setView(view) {
  return { type: SET_VIEW, view }
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

function requestNextPattern(phaseId, patternId) {
  return { type: REQUEST_PATTERN, phaseId, patternId };
}
function receiveNextPattern(json, phaseId, patternId) {
  return { type: RECEIVE_PATTERN, pattern: json, phaseId, patternId, receivedAt: Date.now() };
}

// export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT'
// export function invalidateSubreddit(subreddit) {
//   return {
//     type: INVALIDATE_SUBREDDIT,
//     subreddit
//   }
// }

export function fetchPattern(phaseId, patternId) {
  console.log(`THIS IS FETCH INPUT: PHASEiD - ${phaseId} and PATTERNiD = ${patternId}`)
  return function (dispatch) {
    dispatch(requestNextPattern(phaseId, patternId));
    // return fetch(`http://192.168.1.191:8080/phase/${phaseId}/patterns/${patternId}`)
    return fetch(`http://localhost:8080/phase/${phaseId}/patterns/${patternId}`)
      .then((response) => response.json())
      .then((responseJson) => {
        dispatch(receiveNextPattern(responseJson, phaseId, patternId));
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
