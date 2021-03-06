export const SET_VIEW = 'SET_VIEW';

export function setView(view) {
  return { type: SET_VIEW, view }
}

const GAME_DIRECTIONS = [
  {
    tapElement: 'Complete the Pattern',
    tapPattern: 'Select the Matching Pattern',
  },
  {
    tapPattern: 'Translate the Pattern',
  },
  {
    tapPattern: 'Select the Smallest Pattern Unit',
  },
]

export const SET_GAME_DIRECTIONS = 'SET_GAME_DIRECTIONS';
export function setGameDirections(phaseId, gameType) {
  return { type: SET_GAME_DIRECTIONS,  directions: GAME_DIRECTIONS[phaseId - 1][gameType]}
}

export const INCREMENT_SCORE = 'INCREMENT_SCORE';
export function incrementScore(score) {
  return { type: INCREMENT_SCORE,  score: score + 1}
}

export const RESET_SCORE = 'RESET_SCORE';
export function resetScore() {
  return { type: RESET_SCORE, score: 0 }
}

export const SET_HIGH_SCORE = 'SET_HIGH_SCORE';
export function setHighScore(phaseId, score) {
  return { type: SET_HIGH_SCORE,  phaseId, highScore: score }
}

export const REQUEST_FIRST_PATTERN = 'REQUEST_FIRST_PATTERN';
function requestFirstPatternInPhase(phaseId) {
  return {type: REQUEST_FIRST_PATTERN, phaseId}
}

export const RECEIVE_FIRST_PATTERN = 'RECEIVE_FIRST_PATTERN';
export function receiveFirstPatternInPhase(json, phaseId, patternId) {
  return {type: RECEIVE_FIRST_PATTERN, pattern: json, phaseId, patternId, receivedAt: Date.now()}
}

export function fetchFirstPatternInPhase(phaseId) {
  return function (dispatch) {
    dispatch(requestFirstPatternInPhase(phaseId));
    return fetch(`https://pitter-pat-pat-api.herokuapp.com/phase/${phaseId}/patterns/1`)
    // return fetch(`http://localhost:8080/phase/${phaseId}/patterns/1`)
      .then((response) => response.json())
      .then((responseJson) => {
        dispatch(resetScore());
        dispatch(setGameDirections(phaseId, responseJson.gameType));
        dispatch(receiveFirstPatternInPhase(responseJson, phaseId, 1));
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

export const REQUEST_PATTERN = 'REQUEST_PATTERN';
function requestNextPattern(phaseId, patternId) {
  return { type: REQUEST_PATTERN, phaseId, patternId };
}

export const RECEIVE_PATTERN = 'RECEIVE_PATTERN';
function receiveNextPattern(json, phaseId, patternId) {
  return { type: RECEIVE_PATTERN, pattern: json, phaseId, patternId, receivedAt: Date.now() };
}


export function fetchPattern(phaseId, patternId) {
  console.log(`THIS IS FETCH INPUT: PHASEiD - ${phaseId} and PATTERNiD = ${patternId}`)
  return function (dispatch) {
    dispatch(requestNextPattern(phaseId, patternId));
    return fetch(`https://pitter-pat-pat-api.herokuapp.com/phase/${phaseId}/patterns/${patternId}`)
    // return fetch(`http://localhost:8080/phase/${phaseId}/patterns/${patternId}`)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log({location: 'ACTIONS TO BE LOOKED AT', gameType: responseJson.gameType });
        dispatch(setGameDirections(phaseId, responseJson.gameType));
        dispatch(receiveNextPattern(responseJson, phaseId, patternId));
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
