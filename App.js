import React from 'react';
import { StyleSheet, View } from 'react-native';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';

import Home from './components/Home.js';
import Phase from './components/Phase.js';


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
        { this.renderView() }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  }
});
