import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';

export default class Link extends React.Component {
  static propTypes = {
    view: PropTypes.string.isRequired,
    onLinkPress: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
  }
  onLinkPress = () => {
    this.props.onLinkPress(this.props.view)
  }
  render() {
    return (
      <TouchableOpacity onPress={this.onLinkPress} style={styles.link}>
        <Text style={styles.text}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  link: {
    width: 125,
    height: 30,
    backgroundColor: 'green',
  },
  text: {
    color: 'white',
  }
});
