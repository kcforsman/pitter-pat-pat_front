// how to get api calls to state of GameBoard
// can Redux be used here to update a GameBoard's state?
import { connect } from 'react-redux';
import { fetchPattern } from '../actions/actions.js';
import GameBoard from '../components/GameBoard';

const mapStateToProps = (state) => {
  console.log({location: "mapStateToProps", state});
  return {
    pattern: state.pattern
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAnswerPress: () => {
      dispatch(fetchPattern())
    }
  }
}
const CurrentGameBoard = connect(
  mapStateToProps,
  mapDispatchToProps
)(GameBoard)
export default CurrentGameBoard;
