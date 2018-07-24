import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';

import LinkContainer from '../containers/LinkContainer.js';
import Logo from '../components/Logo.js';

export default class Home extends React.Component {
  static propTypes = {
    changeView: PropTypes.func.isRequired
  }
  render() {
    return (
      <View style={styles.homeContainer}>
        <View style={styles.imgContainer}>
          <Logo />
        </View>
        <View style={styles.headerContainer}>
          <View style={styles.whiteSpace}></View>
          <Text style={styles.text}>Pitter Pat Pat</Text>
          <View style={styles.whiteSpace}></View>
          <View style={styles.navContainer}>
            <LinkContainer view="PHASE" title="Phase One" phaseId={1} onLinkPress={this.props.changeView}/>
            <View style={styles.smallWhiteSpace}></View>
            <LinkContainer view="PHASE" title="Phase Two" phaseId={2} onLinkPress={this.props.changeView}/>
            <View style={styles.smallWhiteSpace}></View>
            <LinkContainer view="PHASE" title="Phase Three" phaseId={3} onLinkPress={this.props.changeView}/>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    flexDirection: 'row',
    width: '95%',
    height: '95%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    height: '95%',
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 1.0,
    shadowColor: 'darkgreen',
  },
  navContainer: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  imgContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'lightgreen',
    fontSize: 60,
    fontFamily: 'Chalkduster',
    textAlign: 'center',
    textShadowRadius: 25,
  },
  whiteSpace: {
    height: '4%',
  },
  smallWhiteSpace: {
    height: '8%',
  }
});
