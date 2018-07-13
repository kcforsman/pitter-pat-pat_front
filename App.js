import React from 'react';
import { StyleSheet, View } from 'react-native';

import Home from './components/Home.js';
import Phase from './components/Phase.js';

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

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      view: 'HOME'
    }
  }
  setView = (newView) => {
    this.setState({view: newView})
  }
  renderView = () => {
    switch (this.state.view) {
      case 'HOME':
        return <Home changeView={ this.setView }/>
      case 'PHASE':
        return <Phase changeView={ this.setView }/>
      default:
        return <Home changeView={ this.setView }/>
    }
  }

  render() {
    return (
      <View style={ styles.mainContainer }>
        <View style={ styles.whiteSpace }></View>
        { this.renderView() }
        <View style={ styles.whiteSpace }></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  whiteSpace: {
    height: '5%',
  }
});
