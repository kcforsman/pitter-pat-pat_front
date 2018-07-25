import React from 'react';
import {TouchableOpacity, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

export default class Score extends React.Component {
  static propTypes = {
    score: PropTypes.number.isRequired,
  }
  render() {
    return (
      <TouchableOpacity onPress={() => {}} style={{flexDirection: 'row', alignItems: 'center',}}>
        <Text style={styles.text}>SCORE: { this.props.score }</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    color: 'lightgreen',
    fontFamily: 'Chalkduster',
    fontSize: 26,
    textAlignVertical: 'center',
  }
});
