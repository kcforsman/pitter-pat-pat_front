import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

import CurrentGameBoard from '../containers/CurrentGameBoard.js';
import Link from './Link.js'

import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
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
store.dispatch(fetchPattern(1));
console.log({location: "@ initial store", store: store.getState()});

export default class Phase extends React.Component {

  static propTypes = {
    changeView: PropTypes.func.isRequired
  }

  componentDidMount = () => {
    fetch("http://localhost:8080/patterns/1")
      .then((response) => response.json())
      .then((responseJson) => {
        // console.log({location: "componentDidMount", responseJson});
        return responseJson;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
        <View style={styles.phaseContainer} >
          <View>
            <Link view="HOME" title="TEST HOME" onLinkPress={this.props.changeView}/>
          </View>
          <CurrentGameBoard store={ store } gameType="tapElement"/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  phaseContainer: {
    flex: 1,
  }
});
