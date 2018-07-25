import React from 'react';
import {TouchableOpacity, Alert, Animated, Easing } from 'react-native';

export default class LoadingScreen extends React.Component {
  constructor() {
    super();

    this.rotateZ = new Animated.Value(0);
  }


  componentDidMount() {
    Animated.loop(
        Animated.timing(
          this.rotateZ,
          {
            toValue: -3,
            duration: 3000,
            easing: Easing.linear
        }),
    ).start();                        // Starts the animation
  }

  render() {
    const spinZ = this.rotateZ.interpolate({
      inputRange: [0, 3],
      outputRange: ['0deg', '360deg']
    });
    return (
      <TouchableOpacity
        style={{width: 200, height: 200, flexDirection: 'row', justifyContent: 'center'}}
        onPress={() => {Alert.alert('Just One More Moment', 'Hopefully')}}
      >
        <Animated.Image
          source={require('../images/Load.png')}

          style={{
              width: '100%',
              height: '100%',
              transform: [
                {rotateZ: spinZ},
                {perspective: 1000},],
        }}/>
      </TouchableOpacity>
    )
  }
}
