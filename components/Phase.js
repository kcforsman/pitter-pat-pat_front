import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

import CurrentGameBoard from '../containers/CurrentGameBoard.js';
import Link from './Link.js'

import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { fetchPattern } from '../actions/actions.js'
import getPattern from '../reducers/reducers.js'

const loggerMiddleware = createLogger();

const store = createStore(
  getPattern,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
  )
);
store.dispatch(fetchPattern());
// console.log(store.getState());

export default class Phase extends React.Component {

  static propTypes = {
    changeView: PropTypes.func.isRequired
  }

  componentDidMount = () => {
    fetch("http://localhost:8080/patterns")
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        return responseJson;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  renderGameBoard = () => {
    return this.state.pattern ? <GameBoard pattern={ this.state.pattern }/> : ' ';
  }

  render() {
    // temporary hard-coded object for pattern while only working in the frontend
    const tempPattern = {
      elements: [
        {color: 'red', symbol: 'A', shape: 'square'},
        {color: 'blue', symbol: 'B', shape: 'square'}
      ],
      type: 'Color',
      patternQuestion: [1, 0, 1, 0, 1, -1],
      answer: [0],
    };
    return (
        <View style={styles.phaseContainer} >
          <View>
            <Link view="HOME" title="TEST HOME" onLinkPress={this.props.changeView}/>
          </View>
          <CurrentGameBoard store={ store }/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  phaseContainer: {
    flex: 1,
  }
});
