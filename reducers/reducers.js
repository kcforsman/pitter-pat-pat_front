import { combineReducers } from 'redux'
import {
  SET_VIEW,
  REQUEST_FIRST_PATTERN,
  RECEIVE_FIRST_PATTERN,
  REQUEST_PATTERN,
  RECEIVE_PATTERN,
  SET_GAME_DIRECTIONS,
  INCREMENT_SCORE,
  RESET_SCORE,
  SET_HIGH_SCORE
} from '../actions/actions.js'

const emptyState = {
  phase: "",
  gameType:"",
  questionSequences:[],
  choiceSequences:[],
  answerSequences:[],
  questionTypes:[],
  questionElements:[],
  answerTypes:[],
  answerElements:[]
}

function setView( state = {view: 'HOME'}, action ) {
  switch (action.type) {
    case SET_VIEW:
      return Object.assign({}, state, {
        view: action.view,
      })
    default:
      return state
  }
}

function getPattern(
  state = {
    isFetching: false,
    didInvalidate: false,
    pattern: emptyState,
    patternId: 1,
  },
  action
) {
  switch (action.type) {
    case REQUEST_FIRST_PATTERN:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false,
        pattern: emptyState,
        patternId: 1,
        phaseId: action.phaseId,
      })
    case RECEIVE_FIRST_PATTERN:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        pattern: action.pattern,
        patternId: action.patternId,
        phaseId: action.phaseId,
        lastUpdated: action.receivedAt,
      })
    case REQUEST_PATTERN:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false,
        pattern: emptyState,
        patternId: action.patternId,
        phaseId: action.phaseId,
      })
    case RECEIVE_PATTERN:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        pattern: action.pattern,
        patternId: action.patternId,
        phaseId: action.phaseId,
        lastUpdated: action.receivedAt,
      })
    default:
      return state
  }
}

function setGameDirections( state = { gameDirections: 'Complete the Pattern' }, action ) {
  switch (action.type) {
    case SET_GAME_DIRECTIONS:
      return Object.assign({}, state, {
        gameDirections: action.directions
      })
    default:
      return state
  }
}

function setScore( state = { score: 0, }, action ) {
  switch (action.type) {
    case INCREMENT_SCORE:
      return Object.assign({}, state, {
        score: action.score,
      })
    case RESET_SCORE:
      return Object.assign({}, state, {
        score: action.score,
      })
    default:
      return state
  }
}

function setHighScores( state = [0, 0, 0], action ) {
  console.log(state)
  const newState = Object.assign([], state, state);
  switch (action.type) {
    case SET_HIGH_SCORE:
      newState.setHighScores[action.phaseId - 1] = action.score;
      return Object.assign({}, state, newState)
    default:
      return state
  }
}

export default combineReducers({setView, getPattern, setGameDirections, setScore, setHighScores});
