// import { combineReducers } from 'redux'
import {
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
    case REQUEST_PATTERN:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false,
        patternId: action.patternId,
      })
    case RECEIVE_PATTERN:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        pattern: action.pattern,
        patternId: action.patternId,
        lastUpdated: action.receivedAt,
      })
    default:
      return state
  }
}

export default getPattern
