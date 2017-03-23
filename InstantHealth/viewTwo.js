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

 
        <View style={styles.topBannerView}>

        <View style={styles.uiBar}></View>

          <View style={styles.logoBox}>
            <View style={styles.logoContainer}>
              <Image source={require('./Assets/Images/logo2.png')} style={{width: 60, height: 50}}></Image>
            </View>
          </View>

          <View style={styles.welcomeBar}>
            <Text>What Do You Need?</Text>
          </View>
        </View>


       <Image source={require('./Assets/Images/liftsBG.jpg')}
        style={styles.liftsBG}>
 
          <View style={styles.touchBar}>
             <TouchableHighlight onPress={this._onPressButton.bind(this)}>
              <Text style={{textAlign: 'center'}}>Go to lift section</Text>
            </TouchableHighlight>
          </View>
        </Image>

      <Image source={require('./Assets/Images/foodBG.jpg')}
        style={styles.liftsBG}>  

         <View style={styles.touchBar}>
            <TouchableHighlight onPress={this._onPressButton2.bind(this)}>
            <Text style={{textAlign: 'center'}}>Go to food section</Text>
          </TouchableHighlight>
          </View>
      </Image>  

      <Image source={require('./Assets/Images/cardioBG.jpg')}
        style={styles.liftsBG}>

         <View style={styles.touchBar}>
            <TouchableHighlight onPress={this._onPressButton3.bind(this)}>
              <Text style={{textAlign: 'center'}}>Go to cardio section</Text>
            </TouchableHighlight>
          </View>
      </Image>  



      </View>

    )
  }
}


  const styles = StyleSheet.create({
    uiBar: {
      flex: 1.1,
      backgroundColor: 'transparent',
    },
    logoBox: {
      flex: 3,
      backgroundColor: 'transparent',
      justifyContent: 'center',
      alignItems: 'center'
    },
    logoContainer: {
      flex: 2,
      width: 80,
      backgroundColor: 'transparent',
      alignItems: 'center'
    },
     welcomeBar: {
      flex: 2.5,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center'
    },
    liftsBG:{
      flex: 2,
      width: undefined,
      height: undefined,
      backgroundColor:'transparent',

    },
    topBannerView: {
      backgroundColor: 'rgba(86,171,47,0.9)',
      flex: 1.2,
      flexDirection: 'column'
    },
    touchBar: {
      flex: 1,
      height: 40,
      backgroundColor: 'rgba(255,255,255,0.85)',
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      justifyContent: 'center',
      alignItems: 'center'
    },
   

  })

  


module.exports = ViewTwo;