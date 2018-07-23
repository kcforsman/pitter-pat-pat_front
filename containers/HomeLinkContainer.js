// how to get api calls to state of GameBoard
// can Redux be used here to update a GameBoard's state?
import { connect } from 'react-redux';
import HomeButton from '../components/HomeButton';

const mapStateToProps = (state, props) => {
  // console.log({location: "mapStateToProps in LinkContainer", state: state});
  return {
    title: props.title,
    view: props.view,
    phaseId: props.phaseId,
    onPressSetView: props.onLinkPress,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onPressSetPhase: () => {
      dispatch()
    }
  }
}
const HomeLinkContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeButton)

export default HomeLinkContainer;
