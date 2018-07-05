import { SET_VIEW } from '../actions/view.js'

function setViewState(state = 'HOME', action) {
  switch (action.type) {
    case SET_VIEW:
      return action.view
    default:
      return state
  }
}

export default setViewState;
