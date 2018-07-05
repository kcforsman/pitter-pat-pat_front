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
        <Text>Pitter Pat Pat</Text>
        <Link view="PHASE" title="TEST PHASE" onLinkPress={this.props.changeView}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
  },
  link: {
    width: 125,
    height: 30,
    backgroundColor: 'green',
  },
  text: {
    color: 'white',
  }
});
