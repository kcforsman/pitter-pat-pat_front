import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import Pattern from './Pattern.js';

// static propTypes = {
//   pattern: PropTypes.shapeOf(
//     elements: PropTypes.arrayOf(PropTypes.object).isRequired,
//     answer: PropTypes.arrayOf(PropTypes.integer).isRequired,
//     sequence: PropTypes.arrayOf(PropTypes.integer).isRequired
//   )
// }
export default class GameBoard extends React.Component {
  static propTypes = {
    pattern: PropTypes.object.isRequired,
    onAnswerPress: PropTypes.func.isRequired,
    patternId: PropTypes.number.isRequired,
    gameDirections: PropTypes.string.isRequired,
  }

  isAnswer = (selectedSequence) => {
    const answerSequence = this.props.pattern.answerSequences[0];
    if (this.isSameSequence(selectedSequence, answerSequence)) {
      console.log("I am the Answer");
      this.props.onAnswerPress(this.props.patternId);
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

  renderQuestionPatterns = () => {
    return(
      this.props.pattern.questionSequences.map( (sequence, index) => {
        const pattern = {
          patternSequence: this.props.pattern.questionSequences[index],
          types: this.props.pattern.questionTypes,
          elements: this.props.pattern.questionElements,
        }
        return(
          <Pattern key={ index } pattern={ pattern } location="question"/>
        );
      })
    )
  };

  optionStyles = () => {
    const width = this.props.pattern.gameType === 'tapElement' ? 50 : 290;
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
            style={ this.optionStyles() }
            key={ index }
            onPress={() => this.isAnswer(this.props.pattern.choiceSequences[index])}
          >
            <Pattern
              key={ index }
              pattern={ pattern }
              location="choice"
            />
          </TouchableOpacity>
        );
      })
    )
  };

  seeProps = () => {
    console.log({location: "GameBoard", props: this.props.pattern});
  }
  render() {
    return (
      <View style={ styles.boardContainer }>
        <View style={ styles.questionsContainer }>
          { this.renderQuestionPatterns() }
        </View>
        <Text style={styles.text}>{this.props.gameDirections}</Text>
        <View style={ styles.optionsContainer }>
          { this.renderChoicePatterns() }
        </View>
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
    alignItems: 'center'
  },
  text: {
    height: '25%',
    alignItems: 'center',
    color: 'green',
    fontWeight: 'bold',
    fontSize: 28,
  },
  questionsContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    width: '90%',
    height: '25%',
  },
  optionsContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    height: '30%',
    justifyContent: 'space-around',
  },
});
