// how to get api calls to state of GameBoard
// can Redux be used here to update a GameBoard's state?
import { connect } from 'react-redux';
import { setView } from '../actions/actions.js';
import ViewScreen from '../components/ViewScreen';

const mapStateToProps = (state) => {
  // console.log({location: "mapStateToProps in ViewContainer", state: state});
  return {
    view: state.setView.view,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSetView: (view) => {
      dispatch(setView(view))
    }
  }
}
const ViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewScreen)

export default ViewContainer;
