// how to get api calls to state of GameBoard
// can Redux be used here to update a GameBoard's state?
import { connect } from 'react-redux';
import { fetchFirstPatternInPhase } from '../actions/actions.js';
import Link from '../components/Link';

const mapStateToProps = (state, props) => {
  // console.log({location: "mapStateToProps in LinkContainer", state: state});
  return {
    title: props.title,
    view: props.view,
    phaseId: props.phaseId,
    onPressSetView: props.onLinkPress,
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onPressSetPhase: () => {
      dispatch(fetchFirstPatternInPhase(props.phaseId));
    }
  }
}
const LinkContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default LinkContainer;
