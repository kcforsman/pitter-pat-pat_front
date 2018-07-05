import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import setViewState from './reducers/index.js';
import Home from './components/Home.js';
import Phase from './components/Phase.js';

const store = createStore({setViewState});

export default class App extends React.Component {
  seeState = () => { console.log(store)}
  renderView = () => {
    switch (store.getState()) {
      case 'HOME':
        return <Home />
      case 'PHASE':
        return <Phase />
      default:
        return <Home />
    }
  }
  render() {
    return (
      <Provider store={store}>
        <View style={ styles.mainContainer }>
          { this.renderView() }
          { this.seeState() }
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  }
});
