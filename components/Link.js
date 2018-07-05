import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

export default class Link extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} style={styles.link}>
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
