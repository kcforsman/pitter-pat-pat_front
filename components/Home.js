import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';

import Link from './Link.js';

export default class Home extends React.Component {
  static propTypes = {
    changeView: PropTypes.func.isRequired
  }
  render() {
    return (
      <View style={styles.homeContainer}>
        <Text style={styles.text}>Pitter Pat Pat</Text>
        <View style={styles.whiteSpace}></View>
        <Link view="PHASE" title="TEST PHASE" onLinkPress={this.props.changeView}/>
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
  }
});
