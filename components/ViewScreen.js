import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

import PhaseContainer from '../containers/PhaseContainer';
import Home from './Home'

export default class App extends React.Component {
  static propTypes = {
    view: PropTypes.string.isRequired,
    onSetView: PropTypes.func.isRequired,
  }

  renderView = () => {
    switch (this.props.view) {
      case 'HOME':
        return <Home changeView={ this.props.onSetView }/>
      case 'PHASE':
        return <PhaseContainer changeView={ this.props.onSetView }/>
      default:
        return <Home changeView={ this.props.onSetView }/>
    }
  }
  render() {
    return (
      <View style={ styles.mainContainer }>
        { this.renderView() }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
});
