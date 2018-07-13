// how to get api calls to state of GameBoard
// can Redux be used here to update a GameBoard's state?
import { connect } from 'react-redux';
import { setPhase } from '../actions/actions.js';
import Link from '../components/Link';

const mapStateToProps = (state, props) => {
  // console.log({location: "mapStateToProps", state: state});
  return {
    phaseId: props.phaseId,
    title: state.title,
    view: props.view,
    onLinkPress: props.onLinkPress,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onPressSetPhase: (id) => {
      dispatch(setPhase(id))
    }
  }
}
const LinkContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default LinkContainer;
