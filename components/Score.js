import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet, Alert} from 'react-native';
import PropTypes from 'prop-types';

export default class Score extends React.Component {
  static propTypes = {
    score: PropTypes.number.isRequired,
    highScore: PropTypes.number.isRequired,
  }

  alertScore = () => {
    if ( this.props.score <= 6 ) {
      Alert.alert('Ah....No', 'Keep Trying');
    } else if ( this.props.score >= 18 ) {
      Alert.alert('Amazing', `You're ready for something new!`);
    } else {
      Alert.alert('Decent', `Looks like you're getting it`);
    }
  }

  render() {
    return (
      <View style={{flexDirection: 'row',}}>
        <TouchableOpacity onPress={this.alertScore} style={{flexDirection: 'row', alignItems: 'center',}}>
          <Text style={styles.text}>SCORE: { this.props.score }</Text>
        </TouchableOpacity>
        <View style={{width: 90}}></View>
        <TouchableOpacity onPress={this.alertScore} style={{flexDirection: 'row', alignItems: 'center',}}>
          <Text style={styles.text}>HIGH SCORE: { this.props.highScore }</Text>
        </TouchableOpacity>
      </View>
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
