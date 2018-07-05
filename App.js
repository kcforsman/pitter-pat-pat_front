import React from 'react';
import { StyleSheet, View } from 'react-native';

import Home from './components/Home.js';
import Phase from './components/Phase.js';

export default class App extends React.Component {
  render() {
    return (
      <View style={ styles.mainContainer }>
        <Phase />
        <Home />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  }
});
