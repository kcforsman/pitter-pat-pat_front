import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import ViewLink from '../containers/ViewLink.js';

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.homeContainer}>
        <Text>Pitter Pat Pat</Text>
        <ViewLink view="PHASE" title="TEST PHASE"/>
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
