import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

import CurrentGameBoard from '../containers/CurrentGameBoard.js';
import LinkContainer from '../containers/LinkContainer.js'

export default class Phase extends React.Component {

  static propTypes = {
    changeView: PropTypes.func.isRequired,
  }

  render() {
    return (
        <View style={styles.phaseContainer} >
          <View>
            <LinkContainer view="HOME" title="Home" onLinkPress={this.props.changeView}/>
          </View>
          <View style={ styles.whiteSpace }/>
          <CurrentGameBoard gameDirections="Complete the Pattern" />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  phaseContainer: {
    flex: 1,
    flexDirection: 'column',
    width: '95%',
    height: '95%',
  },
  whiteSpace: {
    height: '10%',
  }
});
