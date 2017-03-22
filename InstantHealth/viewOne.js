import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, ScrollViews, TouchableHighlight, Navigator } from 'react-native';
var Dimensions = require('Dimensions');
var device = Dimensions.get('window');



export default class ViewOne extends Component {
  
  _onPressButton() {
  this.props.navigator.push({
    id: 'Two'
  });
}

  render() {
    return (

      <Image source={require('./Assets/Images/backgroundScene1.jpg')}
        style={styles.stretch}>

        <View style={styles.mainView}>
          <Image 
            source={require('./Assets/Images/logo.png')}
            style={styles.logo}
          />
          <Image 
            source={require('./Assets/Images/type.png')}
            style={styles.type}
          />
        </View>
        <View style={styles.bottomButton}>
        <TouchableHighlight onPress={this._onPressButton.bind(this)}>
          <Image 
            source={require('./Assets/Images/bottomButton.png')}
            style={styles.bottom}
          />
          </TouchableHighlight>
        </View>
    </Image>


    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  stretch: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor:'transparent'
  },
  logo: {
    width: 140,
    height: 112,
    marginTop: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  type: {
    width: 333,
    height: 84,
    marginTop: 25,
  },
  mainView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomButton: {
     position: 'absolute', 
     left: 0, 
     right: 0, 
     bottom: 0
  },
  bottom: {
    width: device.width,
    height: 70

  }

});

module.exports = ViewOne;