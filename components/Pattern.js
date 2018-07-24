import React from 'react';
import { View } from 'react-native';
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
    location: PropTypes.string.isRequired,
    gameType: PropTypes.string,
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
              gameType={this.props.gameType}
            />
          );
        }
      })
    );
  }
  renderPatternStyles = () => {
    const patternStyles = {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      width: '100%',
      height: '100%',
    };
    if (this.props.location == 'choice') {
      // patternStyles.borderColor = 'lightgreen';
      patternStyles.borderRadius = 50;
      patternStyles.backgroundColor = 'darkgreen';
    }
    return patternStyles;
  }
  render() {
    return (
      <View style={this.renderPatternStyles()} >
        { this.renderElements() }
      </View>
    );
  }
}
