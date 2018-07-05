import React from 'react';
import { StyleSheet, View } from 'react-native';

import GameBoard from './GameBoard.js';
import Link from './Link.js'

export default class Phase extends React.Component {

  render() {
    // temporary hard-coded object for pattern while only working in the frontend
    const tempPattern = {
      elements: [
        {type: 'Color', color: 'red', symbol: 'A', shape: 'square'},
        {type: 'Color', color: 'blue', symbol: 'B', shape: 'square'}
      ],
      sequence: [1, 0, 1, 0, 1, '?'],
      answer: [0],
    };
    return (
      <View style={styles.phaseContainer}>
        <View>
          <Link view="HOME" title="TEST HOME" onLinkPress={this.props.changeView}/>
        </View>
        <GameBoard pattern={ tempPattern }/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  phaseContainer: {
    flex: 1,
  }
});
