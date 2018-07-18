import React from 'react';
import {View, Animated, Easing } from 'react-native';


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
            easing: Easing.linear
        }),
        Animated.timing(
          this.rotateZ,
          {
            toValue: -1,
            duration: 1500,
            easing: Easing.linear
        }),
    ])).start();                        // Starts the animation
  }

  render() {
    const spinZ = this.rotateZ.interpolate({
      inputRange: [0, 1],
      outputRange: ['-3deg', '3deg']
    });
    return (
      <View>
        <Animated.Image
          source={require('../images/RainbowCat.png')}

          style={{
              transform: [
                {rotateZ: spinZ},
                {perspective: 1000},],
        }}/>
      </View>
    )
  }
}
