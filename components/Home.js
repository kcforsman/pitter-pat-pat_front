import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.homeContainer}>
        <Text>Pitter Pat Pat</Text>
        <TouchableOpacity onPress={()=>{}} style={styles.link}>
          <Text style={styles.text}>Testing Phase</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
  },
  link: {
    width: 125,
    height: 30,
    backgroundColor: 'green',
  },
  text: {
    color: 'white',
  }
});
