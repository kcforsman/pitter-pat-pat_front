// how to get api calls to state of GameBoard
// can Redux be used here to update a GameBoard's state?
import { connect } from 'react-redux';
import { fetchPattern } from '../actions/actions.js';
import GameBoard from '../components/GameBoard';

const mapStateToProps = (state, props) => {
  // console.log({LOCATION: "mapStateToProps in CurrentGameBoard", state: {PATTERN: state.getPattern}});
  console.log("THIS IS A NEW RENDER OF CurrentGameBoard")
  return {
    isFetching: state.getPattern.isFetching,
    pattern: state.getPattern.pattern,
    phaseId: state.getPattern.phaseId,
    patternId: state.getPattern.patternId,
    gameDirections: props.gameDirections,
  }
}

const mapDispatchToProps = (dispatch, props) => {
  console.log({location: "mapDispatchToProps in CurrentGameBoard", PROPS: props})
  return {
    onAnswerPress: (phaseId, patternId) => {
      patternId = patternId === 6 ? 1 : patternId + 1;
      dispatch(fetchPattern(phaseId, patternId))
    }
  }
}
const CurrentGameBoard = connect(
  mapStateToProps,
  mapDispatchToProps
)(GameBoard)

export default CurrentGameBoard;
