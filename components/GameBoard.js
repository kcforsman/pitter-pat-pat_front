import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import Pattern from './Pattern.js';
import Element from './Element.js';

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
    onAnswerPress: PropTypes.func.isRequired
  }

  isAnswer = (index) => {
    console.log(`I am in isAnswer INDEX: ${index}`)
    if (this.props.pattern.answer[0] === index) {
      console.log("I am the Answer");
      this.props.onAnswerPress(this.props.patternId);
    }
  }

  seeProps = () => {
    console.log({location: 'GameBoard Props', props: this.props.pattern});
  }


  renderOptions = () => {
    return(
      this.props.pattern.elements.map( (element, index) => {
        console.log(`I am the INDEX: ${index}`)
        return(
          <TouchableOpacity key={ index } onPress={() => this.isAnswer(index)}>
            <Element element={ element } type={this.props.pattern.type[0]}/>
            {this.seeProps()}
          </TouchableOpacity>
        );
      })
    )
  };

  seeProps = () => {
    // console.log({location: "GameBoard", props: this.props});
  }

  render() {
    return (
      <View style={ styles.boardContainer }>
        <Pattern pattern={ this.props.pattern }/>
        <Text>Complete the Pattern</Text>
        <View style={ styles.optionsContainer }>
          { this.renderOptions() }
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
