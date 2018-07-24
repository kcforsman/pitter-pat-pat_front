import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';

export default class Link extends React.Component {
  static propTypes = {
    view: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    onPressSetView: PropTypes.func.isRequired,
    phaseId: PropTypes.number,
    onPressSetPhase: PropTypes.func.isRequired,
  }

  onLinkPress = () => {
    this.props.onPressSetView(this.props.view)
    if (this.props.phaseId) {
      this.props.onPressSetPhase(this.props.phaseId)
    }
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
    width: '60%',
    height: 35,
    borderRadius: 50,
    justifyContent: 'center',
    backgroundColor: 'lightgreen',
  },
  text: {
    color: 'darkgreen',
    fontFamily: 'Chalkduster',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
  }
});
