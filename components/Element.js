import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

export default class Element extends React.Component {
  static propTypes = {
    element: PropTypes.object,
    type: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  };

  renderCharacter = () => {
    if (this.props.type === 'Letter' || this.props.type === 'Question' || this.props.type === 'Shape') {
      return this.props.element.symbol;
    } else {
      return ' ';
    }
  };

  setStyles = () => {
    const width = this.props.location == 'question' ? 50 : 30;
    const height = this.props.location == 'question' ? 50 : 30;
    const fontSize = this.props.location == 'question' ? 36 : 30;
    const styles = {
      backgroundColor: this.props.type === 'Color' ? this.props.element.color : 'white',
      color: 'darkgreen',
      textAlign: 'center',
      textAlignVertical: 'center',
      fontSize: fontSize,
      fontWeight: 'bold',
      height: height,
      width: width,
    };

    return styles;
  };

  render() {
    return (
      <Text style={ this.setStyles() }>
        { this.renderCharacter() }
      </Text>
    );
  }
}
