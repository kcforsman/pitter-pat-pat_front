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
    pattern: PropTypes.object.isRequired,
    location: PropTypes.string.isRequired
  }

  renderElements = () => {
    return (
      this.props.pattern.patternSequence.map( (element, index) => {
        if (element === -1) {
          const questionElement = {
            color: 'black',
            shape: 'square',
            symbol: '?'
          }
          return(<Element element={ questionElement } type='Question' key={index} location={this.props.location}/>);
        } else {
          return(
            <Element
              element={ this.props.pattern.elements[element] }
              type={this.props.pattern.types[0]}
              key={index}
              location={this.props.location}
            />
          );
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
    justifyContent: 'space-around',
    width: '100%',
    height: '100%',
  }
});
