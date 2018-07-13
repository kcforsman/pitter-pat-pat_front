// how to get api calls to state of GameBoard
// can Redux be used here to update a GameBoard's state?
import { connect } from 'react-redux';
import { setPhase } from '../actions/actions.js';
import Link from '../components/Link';

const mapStateToProps = (state, props) => {
  // console.log({location: "mapStateToProps", state: state});
  return {
    title: props.title,
    view: props.view,
    phaseId: props.phaseId,
    onPressSetView: props.onLinkPress,
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
