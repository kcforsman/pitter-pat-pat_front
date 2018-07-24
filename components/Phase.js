import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

import CurrentGameBoard from '../containers/CurrentGameBoard.js';
import HomeLinkContainer from '../containers/HomeLinkContainer.js'

export default class Phase extends React.Component {

  static propTypes = {
    changeView: PropTypes.func.isRequired,
  }

  render() {
    return (
        <View style={styles.phaseContainer} >
          <View style={styles.homeLink}>
            <HomeLinkContainer title="Home" onLinkPress={this.props.changeView}/>
          </View>
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
  homeLink: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
    shadowOffset: {width: 3, height: 3},
    shadowOpacity: 1.0,
    shadowColor: 'darkgreen',
  },
});
