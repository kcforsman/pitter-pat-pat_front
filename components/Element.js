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
    if (this.props.type === 'Letter' || this.props.type === 'Question') {
      return <Text style={ this.setTextStyles() }>{ this.props.element.symbol }</Text>;
    } else if (this.props.type === 'Color'){
      switch(this.props.element.color) {
        case "Red":
          return <Image style={ this.setImgStyles() } source={require("../images/cats/RedCat.png")} />;
        case "Blue":
          return <Image style={ this.setImgStyles() } source={require("../images/cats/BlueCat.png")} />;
        case "LightBlue":
          return <Image style={ this.setImgStyles() } source={require("../images/cats/LightBlueCat.png")} />;
        case "Green":
          return <Image style={ this.setImgStyles() } source={require("../images/cats/GreenCat.png")} />;
        case "DarkGreen":
          return <Image style={ this.setImgStyles() } source={require("../images/cats/DarkGreenCat.png")} />;
        case "Yellow":
          return <Image style={ this.setImgStyles() } source={require("../images/cats/YellowCat.png")} />;
        case "Purple":
          return <Image style={ this.setImgStyles() } source={require("../images/cats/PurpleCat.png")} />;
        case "Orange":
          return <Image style={ this.setImgStyles() } source={require("../images/cats/OrangeCat.png")} />;
        case "Pink":
          return <Image style={ this.setImgStyles() } source={require("../images/cats/PinkCat.png")} />;
        case "Turquoise":
          return <Image style={ this.setImgStyles() } source={require("../images/cats/TurquoiseCat.png")} />;
        case "Brown":
          return <Image style={ this.setImgStyles() } source={require("../images/cats/BrownCat.png")} />;
        case "Grey":
          return <Image style={ this.setImgStyles() } source={require("../images/cats/GreyCat.png")} />;
        }
      } else if (this.props.type === 'Shape') {
        console.log(this.props.element.shape);
        switch(this.props.element.shape) {
          case "Circle":
            return <Image style={ this.setImgStyles() } source={require("../images/shapes/Circle.png")} />;
          case "Oval":
            return <Image style={ this.setImgStyles() } source={require("../images/shapes/Oval.png")} />;
          case "Square":
            return <Image style={ this.setImgStyles() } source={require("../images/shapes/Square.png")} />;
          case "Rectangle":
            return <Image style={ this.setImgStyles() } source={require("../images/shapes/Rectangle.png")} />;
          case "Diamond":
            return <Image style={ this.setImgStyles() } source={require("../images/shapes/Diamond.png")} />;
          case "Triangle":
            return <Image style={ this.setImgStyles() } source={require("../images/shapes/Triangle.png")} />;
          case "Heart":
            return <Image style={ this.setImgStyles() } source={require("../images/shapes/Heart.png")} />;
          case "Crescent":
            return <Image style={ this.setImgStyles() } source={require("../images/shapes/Crescent.png")} />;
          case "Star":
            return <Image style={ this.setImgStyles() } source={require("../images/shapes/Star.png")} />;
          case "Pentagon":
            return <Image style={ this.setImgStyles() } source={require("../images/shapes/Pentagon.png")} />;
          case "Hexagon":
            return <Image style={ this.setImgStyles() } source={require("../images/shapes/Hexagon.png")} />;
          case "Teardrop":
            return <Image style={ this.setImgStyles() } source={require("../images/shapes/Teardrop.png")} />;
        }

    }
  };

  setImgStyles = () => {
    const width = this.props.location == 'question' || this.props.gameType == 'tapElement' ? 55 : 35;
    const height = this.props.location == 'question' || this.props.gameType == 'tapElement' ? 60 : 40;
    const styles = {
      height: height,
      width: width,
      alignSelf: 'center',
    };

    return styles;
  };

  setTextStyles = () => {
    const width = this.props.location == 'question'  || this.props.gameType == 'tapElement' ? 50 : 30;
    const height = this.props.location == 'question' || this.props.gameType == 'tapElement' ? 60 : 40;
    const fontSize = this.props.location == 'question' || this.props.gameType == 'tapElement' ? 36 : 30;
    const fontColor = this.props.location == 'question' ? 'lightgreen' : 'darkgreen';
    const styles = {
      color: fontColor,
      textAlign: 'center',
      fontSize: fontSize,
      fontFamily: 'Chalkduster',
      fontWeight: 'bold',
      height: height,
      width: width,
    };
    if (this.props.location == 'question') {
      styles.alignSelf = 'center';
    } else {
      styles.alignItems = 'center';
    }
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
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  }
});
