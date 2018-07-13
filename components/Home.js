import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';

import LinkContainer from '../containers/LinkContainer.js';

export default class Home extends React.Component {
  static propTypes = {
    changeView: PropTypes.func.isRequired
  }
  render() {
    return (
      <View style={styles.homeContainer}>
        <View style={styles.whiteSpace}></View>
        <Text style={styles.text}>Pitter Pat Pat</Text>
        <View style={styles.whiteSpace}></View>
        <LinkContainer view="PHASE" title="Phase One" phaseId={1} onLinkPress={this.props.changeView}/>
        <View style={styles.smallWhiteSpace}></View>
        <LinkContainer view="PHASE" title="Phase Two" phaseId={2} onLinkPress={this.props.changeView}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    flexDirection: 'column',
    width: '95%',
    height: '95%',
    alignItems: 'center',
  },
  text: {
    color: 'green',
    fontSize: 45,
    fontWeight: 'bold',
  },
  whiteSpace: {
    height: '10%',
  },
  smallWhiteSpace: {
    height: '3%',
  }
});
