// how to get api calls to state of GameBoard
// can Redux be used here to update a GameBoard's state?
import { connect } from 'react-redux';
import { resetScore, setHighScore } from '../actions/actions.js';
import HomeButton from '../components/HomeButton';

const mapStateToProps = (state, props) => {
  console.log("__________________________")
  console.log("___________FIND___________")
  console.log("__________________________")
  console.log({location: "mapStateToProps in LinkContainer", phaseHighScore: state});
  console.log("__________________________")
  console.log("___________FIND___________")
  console.log("__________________________")
  return {
    title: props.title,
    view: props.view,
    phaseId: state.getPattern.phaseId,
    onPressSetView: props.onLinkPress,
    currentScore: state.setScore.score,
    phaseHighScore: state.setHighScores[state.getPattern.phaseId - 1]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    resetScore: () => {
      dispatch(resetScore())
    },
    setHighScore: (phaseId, currentScore, currentHighScore) => {
      if ( currentScore > currentHighScore) {
        console.log(currentScore);
        dispatch(setHighScore(phaseId, currentScore))
      }
    }
  }
}
const HomeLinkContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeButton)

export default HomeLinkContainer;
