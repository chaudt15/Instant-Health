/**
 * Instant Health application designed 
 * and developed by Tristan Chaudhry
 *
 * http://www.TristanChaudhry.com
 * https://github.com/tchaud
 * 
 */


import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, ScrollViews, TouchableHighlight, Navigator } from 'react-native';
var Dimensions = require('Dimensions');
var device = Dimensions.get('window');
var One = require('./viewOne');
var Two = require('./viewTwo');
var Cardio = require('./cardio');
var Food = require('./food');
var Lifts = require('./lifts');

export default class InstantHealth extends Component {
  

  render() {
    return(
        <Navigator 
          initialRoute ={{
            id: 'One'
          }}
          renderScene={
            this.navigationRenderScene
          }
        />
      );
  }

  navigationRenderScene(route,navigator){
    _navigator = navigator;
    switch(route.id){
      case 'One':
        return(<One navigator={navigator} title="One"/>); 
      case 'Two':
        return(<Two navigator={navigator} title="Two"/>);   
      case 'Cardio':
        return(<Cardio navigator={navigator} title="Cardio"/>);   
      case 'Food':
        return(<Food navigator={navigator} title="Food"/>);   
      case 'Lifts':
        return(<Lifts navigator={navigator} title="Lifts"/>);     

    }
  }
}


AppRegistry.registerComponent('InstantHealth', () => InstantHealth);
