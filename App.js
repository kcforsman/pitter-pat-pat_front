import React from 'react';
import { StyleSheet, View } from 'react-native';

import ViewContainer from './containers/ViewContainer';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import getPattern from './reducers/reducers.js';

const loggerMiddleware = createLogger();

const store = createStore(
  getPattern,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
  )
);

console.log({location: "@ initial store", store: store.getState()});

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={ styles.mainContainer }>
          <ViewContainer />
        </View>
      </Provider>
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
});
