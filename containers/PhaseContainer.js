// how to get api calls to state of GameBoard
// can Redux be used here to update a GameBoard's state?
import { connect } from 'react-redux';
import { fetchFirstPatternInPhase } from '../actions/actions.js';
import Phase from '../components/Phase';

const mapStateToProps = (state, props) => {
  // console.log({location: "mapStateToProps", state: state});
  return {
    phaseId: state.setPhase.phaseId,
    changeView: props.changeView
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAnswerPress: (phaseId) => {
      dispatch(fetchFirstPatternInPhase(phaseId))
    }
  }
}
const PhaseContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Phase)

export default PhaseContainer;
