import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet, Alert} from 'react-native';
import PropTypes from 'prop-types';

export default class Score extends React.Component {
  static propTypes = {
    score: PropTypes.number.isRequired,
    highScore: PropTypes.number.isRequired,
  }

  alertScorePress = () => {
    if (this.props.highScore == 0) {
      if (this.props.score == 0) {
        Alert.alert('Ah....No', `You haven't even started`);
      } else if (this.props.score <= 6) {
        Alert.alert('Ummm.....', `You're getting started. Keep going`);
      } else if (this.props.score >= 18) {
        Alert.alert('Amazing', `You got it on your first try`);
      } else {
        Alert.alert('Decent', `Looks like you're getting it on the first go`);
      }
    } else if (this.props.highScore <= 6) {
      if (this.props.score <= 6) {
        Alert.alert('Ah....No', `You're still learning`);
      } else if (this.props.score >= 18) {
        Alert.alert('Amazing', `You're really starting to get it!`);
      } else {
        Alert.alert('Decent', `That's definitely a good start!`);
      }
    } else if (this.props.highScore >= 18) {
      if (this.props.score <= 6) {
        Alert.alert('Ummm.....', `Well, your high score says you can do better`);
      } else if (this.props.score >= 18) {
        Alert.alert('Amazing', `You're ready for something new!`);
      } else {
        Alert.alert('Decent', `Looks like you're getting it. Maybe one more time.`);
      }
    } else {
      if (this.props.score <= 6) {
        Alert.alert('Ummm.....', `Well, maybe you want a little more practice`);
      } else if (this.props.score >= 18) {
        Alert.alert('Amazing', `You're almost ready for the next level`);
      } else {
        Alert.alert('Decent', `It's definitely progress!`);
      }
    }

  }

  alertHighScorePress = () => {
    if ( this.props.highScore <= 6 ) {
      Alert.alert('Ah....No', 'Keep Trying');
    } else if ( this.props.highScore >= 18 ) {
      Alert.alert('Amazing', `That's an awesome High Score`);
    } else {
      Alert.alert('Decent', `Looks like you're starting to get it`);
    }
  }

  render() {
    return (
      <View style={{flexDirection: 'row',}}>
        <TouchableOpacity onPress={this.alertScorePress} style={{flexDirection: 'row', alignItems: 'center',}}>
          <Text style={styles.text}>SCORE: { this.props.score }</Text>
        </TouchableOpacity>
        <View style={{width: 90}}></View>
        <TouchableOpacity onPress={this.alertHighScorePress} style={{flexDirection: 'row', alignItems: 'center',}}>
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
