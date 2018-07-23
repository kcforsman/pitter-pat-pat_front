import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

import PropTypes from 'prop-types';

export default class Logo extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    onPressSetView: PropTypes.func.isRequired,
    phaseId: PropTypes.number,
    onPressSetPhase: PropTypes.func.isRequired,
  }

  onLinkPress = () => {
    this.props.onPressSetView('HOME')
  }
  render() {
    return (
      <TouchableOpacity style={{width: 65, height: 55}} onPress={this.onLinkPress}>
        <Image source={require('../images/Home.png')} style={{width: 65, height: 55}}/>
      </TouchableOpacity>
    )
  }
}
