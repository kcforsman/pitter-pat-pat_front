import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

export default class Element extends React.Component {
  static propTypes = {
    element: PropTypes.object
  };

  renderCharacter = () => {
    if (this.props.element.type === 'Symbol' || this.props.element.type === 'Question') {
      return this.props.element.symbol;
    } else {
      return ' ';
    }
  };

  setStyles = () => {
    const styles = {
      backgroundColor: this.props.element.type === 'Color' ? this.props.element.color : 'black',
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
