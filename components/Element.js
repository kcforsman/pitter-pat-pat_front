import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';

export default class Element extends React.Component {
  static propTypes = {
    element: PropTypes.object,
    type: PropTypes.string.isRequired,
    gameType: PropTypes.string,
    location: PropTypes.string.isRequired,
  };

  renderElement = () => {
    if (this.props.type === 'Letter' || this.props.type === 'Question' || this.props.type === 'Shape') {
      return <Text style={ this.setTextStyles() }>{ this.props.element.symbol }</Text>;
    } else if (this.props.type === 'Color'){
      switch(this.props.element.color) {
        case "Red":
          return <Image style={ this.setImgStyles() } source={require("../images/RedCat.png")} />;
        case "Blue":
          return <Image style={ this.setImgStyles() } source={require("../images/BlueCat.png")} />;
        case "LightBlue":
          return <Image style={ this.setImgStyles() } source={require("../images/LightBlueCat.png")} />;
        case "Green":
          return <Image style={ this.setImgStyles() } source={require("../images/GreenCat.png")} />;
        case "DarkGreen":
          return <Image style={ this.setImgStyles() } source={require("../images/DarkGreenCat.png")} />;
        case "Yellow":
          return <Image style={ this.setImgStyles() } source={require("../images/YellowCat.png")} />;
        case "Purple":
          return <Image style={ this.setImgStyles() } source={require("../images/PurpleCat.png")} />;
        case "Orange":
          return <Image style={ this.setImgStyles() } source={require("../images/OrangeCat.png")} />;
        case "Pink":
          return <Image style={ this.setImgStyles() } source={require("../images/PinkCat.png")} />;
        case "Turquoise":
          return <Image style={ this.setImgStyles() } source={require("../images/TurquoiseCat.png")} />;
        case "Brown":
          return <Image style={ this.setImgStyles() } source={require("../images/BrownCat.png")} />;
        case "Grey":
          return <Image style={ this.setImgStyles() } source={require("../images/GreyCat.png")} />;
      }

    }
  };

  setImgStyles = () => {
    const width = this.props.location == 'question' || this.props.gameType == 'tapElement' ? 50 : 30;
    const height = this.props.location == 'question' || this.props.gameType == 'tapElement' ? 60 : 40;
    const styles = {
      height: height,
      width: width,
    };

    return styles;
  };

  setTextStyles = () => {
    const width = this.props.location == 'question' ? 50 : 30;
    const height = this.props.location == 'question' ? 50 : 30;
    const fontSize = this.props.location == 'question' ? 36 : 30;
    const styles = {
      color: 'darkgreen',
      textAlign: 'center',
      textAlignVertical: 'center',
      fontSize: fontSize,
      fontWeight: 'bold',
      height: height,
      width: width,
    };

    return styles;
  };

  render() {
    return (
      <View style={styles.container}>
        { this.renderElement() }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  }
});
