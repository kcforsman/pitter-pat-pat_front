import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class LoadingScreen extends React.Component {
  render() {
    return (
      <View style={styles.messageContainer}>
        <Text>Loading Game</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  messageContainer: {
    flex: 1,
    width: '100%',
  }
});
