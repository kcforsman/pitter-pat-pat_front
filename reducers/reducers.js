// import { combineReducers } from 'redux'
import {
  REQUEST_FIRST_PATTERN,
  RECEIVE_FIRST_PATTERN,
  REQUEST_PATTERN,
  RECEIVE_PATTERN
} from '../actions/actions.js'
// function selectedSubreddit(state = 'reactjs', action) {
//   switch (action.type) {
//     case SELECT_SUBREDDIT:
//       return action.subreddit
//     default:
//       return state
//   }
// }
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
        isFetching: true,
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

export default getPattern
