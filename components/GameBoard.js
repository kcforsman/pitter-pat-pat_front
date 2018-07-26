import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import PropTypes from 'prop-types';

import Pattern from './Pattern.js';
import LoadingScreen from './LoadingScreen'

export default class GameBoard extends React.Component {
  static propTypes = {
    pattern: PropTypes.object.isRequired,
    isFetching: PropTypes.bool.isRequired,
    onAnswerPress: PropTypes.func.isRequired,
    patternId: PropTypes.number.isRequired,
    phaseId: PropTypes.number.isRequired,
    gameDirections: PropTypes.string.isRequired,
    currentScore: PropTypes.number.isRequired,
    resetScore: PropTypes.func.isRequired,
    incrementScore: PropTypes.func.isRequired,
    setHighScore: PropTypes.func.isRequired,
    currentHighScore: PropTypes.number.isRequired,
  }

  isAnswer = (selectedSequence) => {
    const answerSequence = this.props.pattern.answerSequences[0];
    if (this.isSameSequence(selectedSequence, answerSequence)) {
      this.props.incrementScore(this.props.currentScore);
      this.props.onAnswerPress(this.props.phaseId, this.props.patternId);
    } else {
      this.props.setHighScore(this.props.phaseId, this.props.currentScore, this.props.currentHighScore);
      this.props.resetScore();
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
      alignItems: 'flex-start',
      width: 75 * patternLength,
      height: '50%',
    }
    return style;
  }

  renderQuestionPatterns = () => {
    if (this.props.phaseId == 2) {
          const mainQuestion = {
            patternSequence: this.props.pattern.questionSequences[0],
            types: this.props.pattern.questionTypes,
            elements: this.props.pattern.questionElements,
          };
          const comparisonSequence = [];
          const length = this.props.pattern.questionElements.length
          for (let i = 0; i < length; i++) {
            comparisonSequence.push(i);
          }

          const questionElements = {
            patternSequence: comparisonSequence,
            types: this.props.pattern.questionTypes,
            elements: this.props.pattern.questionElements,
          };
          const answerElements = {
            patternSequence: comparisonSequence,
            types: this.props.pattern.answerTypes,
            elements: this.props.pattern.answerElements,
          }
          return(
            <View style={ styles.questionsContainer }>
              <View style={ this.questionStyles(this.props.pattern.questionSequences[0].length) }>
                <Pattern pattern={ mainQuestion } location="question" />
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
                <View style={ this.questionStyles(length) }>
                  <Pattern pattern={ questionElements } location="answerKey" />
                </View>
                <Text style={{color: 'lightgreen', fontFamily: 'Chalkduster', fontSize: 26,}}>=</Text>
                <View style={ this.questionStyles(length) }>
                  <Pattern pattern={ answerElements } location="answerKey" />
                </View>
              </View>
              <View style={{height: '8%'}}></View>
            </View>
          );
    } else {
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
      }))
    }
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
