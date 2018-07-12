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
    patternId: PropTypes.number,
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
          <Pattern key={ index } pattern={ pattern } />
        );
      })
    )
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
          <TouchableOpacity key={ index } onPress={() => this.isAnswer(this.props.pattern.choiceSequences[index])}>
            <Pattern
              key={ index }
              pattern={ pattern }
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
        <View style={ styles.optionsContainer }>
          { this.renderQuestionPatterns() }
        </View>
        <Text>Complete the Pattern</Text>
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
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  optionsContainer: {
    flex: 1,
    flexDirection: 'row'
  }
});
