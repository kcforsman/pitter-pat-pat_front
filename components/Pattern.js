import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

import Element from './Element.js';

// static propTypes = {
//   pattern: PropTypes.shapeOf(
//     elements: PropTypes.arrayOf(PropTypes.object).isRequired,
//     answer: PropTypes.arrayOf(PropTypes.integer).isRequired,
//     sequence: PropTypes.arrayOf(PropTypes.integer).isRequired
//   )
// }

export default class Pattern extends React.Component {
  static propTypes = {
    pattern: PropTypes.object.isRequired
  }

  renderElements = () => {
    return (
      this.props.pattern.sequence.map( (element, index) => {
        if (element === '?') {
          const questionElement = {
            type: 'Question',
            color: 'black',
            shape: 'square',
            symbol: '?'
          }
          return(<Element element={ questionElement } key={index}/>);
        } else {
          return(<Element element={ this.props.pattern.elements[element] } key={index}/>);
        }
      })
    );
  }

  render() {
    return (
      <View style={styles.patternContainer} >
        { this.renderElements() }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  patternContainer: {
    flex: 1,
    flexDirection: 'row',
  }
});
