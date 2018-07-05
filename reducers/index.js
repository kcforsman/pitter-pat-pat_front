import { SET_VIEW } from '../actions/view.js'

function setViewState(state = [], action) {
  switch (action.type) {
    case SET_VIEW:
      return action.filter
    default:
      return state
  }
}

export default setViewState;
