import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import PropTypes from 'prop-types';

import Pattern from './Pattern.js';
import LoadingScreen from './LoadingScreen'

export default class GameBoard extends React.Component {
  static propTypes = {
    pattern: PropTypes.object,
    isFetching: PropTypes.bool.isRequired,
    onAnswerPress: PropTypes.func.isRequired,
    patternId: PropTypes.number,
    phaseId: PropTypes.number,
    gameDirections: PropTypes.string,
  }

  isAnswer = (selectedSequence) => {
    const answerSequence = this.props.pattern.answerSequences[0];
    if (this.isSameSequence(selectedSequence, answerSequence)) {
      Alert.alert("Correct", "Good Job! Purrrfect!");
      this.props.onAnswerPress(this.props.phaseId, this.props.patternId);
    } else {
      Alert.alert("Wrong!", "Try Again");
    }
  }

  isSameSequence = (sequence1, sequence2) => {
    for (let i = 0; i < sequence1.length; i++) {
      if (sequence1[i] !== sequence2[i]) {
        return false;
      }
    }
    return true;
  }

  seeProps = () => {
    console.log({location: 'GameBoard Props', props: this.props.pattern});
  }

  questionStyles = (patternLength) => {
    const style = {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: 75 * patternLength,
    }
    return style;
  }

  renderQuestionPatterns = () => {
    return(
      this.props.pattern.questionSequences.map( (sequence, index) => {
        const pattern = {
          patternSequence: this.props.pattern.questionSequences[index],
          types: this.props.pattern.questionTypes,
          elements: this.props.pattern.questionElements,
        }
        return(
          <View  key={ index } style={ this.questionStyles(this.props.pattern.questionSequences[index].length) }>
            <Pattern pattern={ pattern } location="question" />
          </View>
        );
      })
    )
  };

  optionStyles = (patternLength) => {
    let width = 0
    if (this.props.pattern.gameType === 'tapElement') {
      width = 50;
    } else if (this.props.phaseId == 3){
      width = 50 * patternLength;
    } else {
      width = 37 * patternLength;
    }
    const style = {
      width: width,
      height: 50,
    };
    return style;
  };

  renderChoicePatterns = () => {
    return(
      this.props.pattern.choiceSequences.map( (element, index) => {
        const pattern = {
          patternSequence: this.props.pattern.choiceSequences[index],
          types: this.props.pattern.answerTypes,
          elements: this.props.pattern.answerElements,
        }
        console.log(this.props.pattern.choiceSequences[index]);
        return(
          <TouchableOpacity
            style={ this.optionStyles(this.props.pattern.choiceSequences[index].length) }
            key={ index }
            onPress={() => this.isAnswer(this.props.pattern.choiceSequences[index])}
          >
            <Pattern
              key={ index }
              pattern={ pattern }
              location="choice"
              gameType={this.props.pattern.gameType}
            />
          </TouchableOpacity>
        );
      })
    )
  };

  isFetching = () => {
    if (!this.props.isFetching) {
      return (
        <View style={ styles.boardContainer }>
          <View style={
            {
              height: '3%',
              width: '100%',
              backgroundColor: 'darkgreen',
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30}
            }>
          </View>
          <View style={ styles.questionsContainer }>
            { this.renderQuestionPatterns() }
          </View>
          <View style={styles.directionBorders}>
            <Text style={styles.text}>{this.props.gameDirections}</Text>
          </View>
          <View style={ styles.optionsContainer }>
            { this.renderChoicePatterns() }
          </View>
          <View style={
            {
              height: '3%',
              width: '100%',
              backgroundColor: 'darkgreen',
              borderBottomLeftRadius: 30,
              borderBottomRightRadius: 30}
            }>
          </View>
          <View style={{height: '2%', width: '100%'}}>
          </View>
        </View>
      );
    } else {
      return <LoadingScreen />;
    }
  }

  seeProps = () => {
    console.log({location: "in GameBoard Presentational", props: this.props.pattern.questionSequences});
  }
  render() {
    return (
      <View style={ styles.boardContainer }>
        {this.isFetching()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  boardContainer: {
    flex: 1,
    width: '100%',
    height: '80%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Chalkduster',
    color: 'lightgreen',
    fontSize: 28,
  },
  directionBorders: {
    flexDirection: 'row',
    borderColor: 'lightgreen',
    width: '100%',
    borderTopWidth: 3,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 3,
    height: 45,
  },
  questionsContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'darkgreen',
  },
  optionsContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignContent: 'space-around',
    backgroundColor: 'darkgreen',
  },
});
