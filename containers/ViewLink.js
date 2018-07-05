import { connect } from 'react-redux';
import { setView } from '../actions/view.js';
import Link from '../components/Link.js';

const mapStateToProps = (state, props) => {
  
  return({title: props.title});
}

const mapDispatchToProps = (dispatch, props) => {
  return({
    onPress: () => dispatch(setView(props.view))
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(Link);
