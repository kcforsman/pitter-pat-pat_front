import { combineReducers } from 'redux'
import {
  SET_VIEW,
  SET_PHASE,
  REQUEST_FIRST_PATTERN,
  RECEIVE_FIRST_PATTERN,
  REQUEST_PATTERN,
  RECEIVE_PATTERN,
} from '../actions/actions.js'


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

function setPhase( state = {}, action ) {
  switch (action.type) {
    case SET_PHASE:
      return Object.assign({}, state, {
        phaseId: action.phaseId,
      })
    default:
      return state
  }
}

function getPattern(
  state = {
    isFetching: false,
    didInvalidate: false,
    pattern: {},
    patternId: 1,
  },
  action
) {
  switch (action.type) {
    case REQUEST_FIRST_PATTERN:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
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

export default combineReducers({setView, setPhase, getPattern});
