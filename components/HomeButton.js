import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

import PropTypes from 'prop-types';

export default class HomeButton extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    onPressSetView: PropTypes.func.isRequired,
    phaseId: PropTypes.number,
    resetScore: PropTypes.func.isRequired,
    setHighScore: PropTypes.func.isRequired,
    currentScore: PropTypes.number.isRequired,
    phaseHighScore: PropTypes.number.isRequired,
  }

  onLinkPress = () => {
    this.props.onPressSetView('HOME');
    this.props.setHighScore(this.props.phaseId, this.props.currentScore, this.props.phaseHighScore);
    this.props.resetScore();
  }
  render() {
    return (
      <TouchableOpacity style={{width: 55, height: 50}} onPress={this.onLinkPress}>
        <Image source={require('../images/Home.png')} style={{width: 55, height: 50}}/>
      </TouchableOpacity>
    )
  }
}
