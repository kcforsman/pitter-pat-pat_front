import { connect } from 'react-redux';
import Score from '../components/Score';

const mapStateToProps = (state) => {
  console.log(state);
  return {
    score: state.setScore.score,
    highScore: state.setHighScores[state.getPattern.phaseId - 1],
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onNothing: () => {
      dispatch()
    }
  }
}
const ScoreContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Score)

export default ScoreContainer;
