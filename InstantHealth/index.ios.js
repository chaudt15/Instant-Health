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
var Bicep = require('./Workouts/bicep');
var Abs = require('./Workouts/abs');
var Chest = require('./Workouts/chest');
var Tricep = require('./Workouts/tricep');
var Shoulder = require('./Workouts/shoulder');
var Calf = require('./Workouts/calf');
var Back = require('./Workouts/back');
var Hamstring = require('./Workouts/hamstring');

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
      case 'Bicep':
        return(<Bicep navigator={navigator} title="Bicep"/>);     
      case 'Abs':
        return(<Abs navigator={navigator} title="Abs"/>);      
      case 'Chest':
        return(<Chest navigator={navigator} title="Chest"/>);
      case 'Tricep':
        return(<Tricep navigator={navigator} title="Tricep"/>);    
      case 'Shoulder':
        return(<Shoulder navigator={navigator} title="Shoulder"/>);   
      case 'Calf':
        return(<Calf navigator={navigator} title="Calf"/>);
      case 'Back':
        return(<Back navigator={navigator} title="Back"/>);
       case 'Hamstring':
        return(<Hamstring navigator={navigator} title="Hamstring"/>);                          

    }
  }
}


AppRegistry.registerComponent('InstantHealth', () => InstantHealth);
