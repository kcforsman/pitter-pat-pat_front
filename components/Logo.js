import React from 'react';
import {TouchableOpacity, Alert, Animated, Easing } from 'react-native';


export default class Logo extends React.Component {
  constructor() {
    super();

    this.rotateZ = new Animated.Value(-1);
  }


  componentDidMount() {
    Animated.loop(
      Animated.sequence([                  // Animate over time
        Animated.timing(
          this.rotateZ,
          {
            toValue: 1,
            duration: 1500,
            easing: Easing.in
        }),
        Animated.timing(
          this.rotateZ,
          {
            toValue: -1,
            duration: 1500,
            easing: Easing.in
        }),
    ])).start();                        // Starts the animation
  }

  render() {
    const spinZ = this.rotateZ.interpolate({
      inputRange: [0, 1],
      outputRange: ['-2.5deg', '2deg']
    });
    return (
      <TouchableOpacity onPress={() => {Alert.alert('Meow', `Let's Play!`)}}>
        <Animated.Image
          source={require('../images/Logo.png')}

          style={{
              transform: [
                {rotateZ: spinZ},
                {perspective: 1000},],
        }}/>
      </TouchableOpacity>
    )
  }
}
