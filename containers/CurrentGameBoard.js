// how to get api calls to state of GameBoard
// can Redux be used here to update a GameBoard's state?
import { connect } from 'react-redux';
import { fetchPattern, resetScore, incrementScore, setHighScore } from '../actions/actions.js';

import GameBoard from '../components/GameBoard';

const mapStateToProps = (state) => {
  // console.log({LOCATION: "mapStateToProps in CurrentGameBoard", state: {PATTERN: state.getPattern}});
  return {
    isFetching: state.getPattern.isFetching,
    pattern: state.getPattern.pattern,
    phaseId: state.getPattern.phaseId,
    patternId: state.getPattern.patternId,
    gameDirections: state.setGameDirections.gameDirections,
    currentScore: state.setScore.score,
    currentHighScore: state.setHighScores[state.getPattern.phaseId - 1],
  }
}

const mapDispatchToProps = (dispatch, props) => {
  console.log({location: "mapDispatchToProps in CurrentGameBoard", PROPS: props})
  return {
    onAnswerPress: (phaseId, patternId) => {
      patternId = patternId === 6 ? 1 : patternId + 1;
      dispatch(fetchPattern(phaseId, patternId))
    },
    resetScore: () => {
      dispatch(resetScore())
    },
    incrementScore: (previousScore) => {
      dispatch(incrementScore(previousScore))
    },
    setHighScore: (phaseId, currentScore, currentHighScore) => {
      if ( currentScore > currentHighScore) {
        dispatch(setHighScore(phaseId, currentScore))
      }
    }
  }
}
const CurrentGameBoard = connect(
  mapStateToProps,
  mapDispatchToProps
)(GameBoard)

export default CurrentGameBoard;
