import React from 'react';
import { StyleSheet, View } from 'react-native';

import ViewContainer from './containers/ViewContainer';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers/reducers.js';

const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer,
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
        <View style={styles.background}>
          <View style={styles.mainContainer}>
            <ViewContainer />
          </View>
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
    backgroundColor: 'forestgreen',
    borderWidth: 5,
    borderColor: 'lightgreen',
    borderRadius: 25,
  },
  background: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: 'lightgreen',
  },
});
