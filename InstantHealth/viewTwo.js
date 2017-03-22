import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, ScrollViews, TouchableHighlight, Navigator, AlertIOS } from 'react-native';

export default class ViewTwo extends Component {


/*
<TouchableHighlight onPress={this.getMoviesFromApiAsync.bind(this)}>
        <Text>Apple</Text>
        </TouchableHighlight>
*/

//This function get the JSON data from the API
/*  getMoviesFromApiAsync() {
    console.log('executed');
fetch("http://45.55.168.202:3300/food/", {method: "GET"})
.then((response) => response.json())
.then((responseData) => {
  var result = JSON.stringify(responseData)
    AlertIOS.alert(

        "GET Response",
        "This is it: " + result
    )
})
.done(); 
  }
*/
   _onPressButton() {
  this.props.navigator.push({
    id: 'Lifts'
  });
}

 _onPressButton2() {
  this.props.navigator.push({
    id: 'Food'
  });
}

 _onPressButton3() {
  this.props.navigator.push({
    id: 'Cardio'
  });
}

//This is the rendered content
  render() {
    return (
       
       <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{flex:1, backgroundColor: 'powderblue'}}>
          <TouchableHighlight onPress={this._onPressButton.bind(this)}>
            <Text style={{top:30}}>Go to lift section</Text>
          </TouchableHighlight>
        </View>
        <View style={{flex:1, height: 50, backgroundColor: 'skyblue'}}> 
          <TouchableHighlight onPress={this._onPressButton2.bind(this)}>
            <Text style={{top:30}}>Go to food section</Text>
          </TouchableHighlight>
        </View>
        <View style={{flex:1, height: 50, backgroundColor: 'steelblue'}}> 
          <TouchableHighlight onPress={this._onPressButton3.bind(this)}>
            <Text style={{top:30}}>Go to cardio section</Text>
          </TouchableHighlight>
        </View>
      </View>

    )
  }
}


  const styles = StyleSheet.create({

  })

  


module.exports = ViewTwo;