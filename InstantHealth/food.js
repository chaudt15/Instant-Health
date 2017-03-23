import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, ScrollViews, TouchableHighlight, Navigator, AlertIOS } from 'react-native';

export default class Food extends Component {
  
	pressThis() {
  	AlertIOS.alert(
        "Response",
        "This is it: " + this.number
    )
}

	number = 1;

  render() {
    return (


 <View style={{flex: 1, flexDirection: 'column'}}>
        <TouchableHighlight onPress={()=>{this.pressThis.bind(this)}}>
        	<Text style={{top: 15}}>Press This</Text>
        </TouchableHighlight>
 </View>
    );
  }

}

const styles = StyleSheet.create({
  

});


module.exports = Food;