import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import Pattern from './Pattern.js';
import Element from './Element.js';

// static propTypes = {
//   pattern: PropTypes.shapeOf(
//     elements: PropTypes.arrayOf(PropTypes.object).isRequired,
//     answer: PropTypes.arrayOf(PropTypes.integer).isRequired,
//     sequence: PropTypes.arrayOf(PropTypes.integer).isRequired
//   )
// }

export default class GameBoard extends React.Component {
  static propTypes = {
    pattern: PropTypes.object.isRequired
  }

  renderOptions = () => {
    return(
      this.props.pattern.elements.map( (element, index) => {
        return(
          <TouchableOpacity key={ index } onPress={()=>{}}>
            <Element element={ element }/>
          </TouchableOpacity>
        );
      })
    )
  };

  render() {
    return (
      <View style={ styles.boardContainer }>
        <Pattern pattern={ this.props.pattern }/>
        <Text>This is some Question?</Text>
        <View style={ styles.optionsContainer }>
          { this.renderOptions() }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  boardContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  optionsContainer: {
    flex: 1,
    flexDirection: 'row'
  }
});
