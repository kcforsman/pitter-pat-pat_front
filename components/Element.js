import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

export default class Element extends React.Component {
  static propTypes = {
    element: PropTypes.object,
    type: PropTypes.string.isRequired,
  };

  renderCharacter = () => {
    if (this.props.type === 'Letter' || this.props.type === 'Question' || this.props.type === 'Shape') {
      return this.props.element.symbol;
    } else {
      return ' ';
    }
  };

  setStyles = () => {
    const styles = {
      backgroundColor: this.props.type === 'Color' ? this.props.element.color : 'black',
      color: 'white',
      height: 50,
      width: 50,
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
