// how to get api calls to state of GameBoard
// can Redux be used here to update a GameBoard's state?
import { connect } from 'react-redux';
import { fetchPattern } from '../actions/actions.js';
import GameBoard from '../components/GameBoard';

const mapStateToProps = (state, props) => {
  // console.log({location: "mapStateToProps", state: state});
  return {
    gameType: state.gameType,
    pattern: state.pattern,
    patternId: state.patternId,
    gameDirections: props.gameDirections,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAnswerPress: (id) => {
      id = id === 6 ? 1 : id + 1;
      dispatch(fetchPattern(id))
    }
  }
}
const CurrentGameBoard = connect(
  mapStateToProps,
  mapDispatchToProps
)(GameBoard)

export default CurrentGameBoard;
