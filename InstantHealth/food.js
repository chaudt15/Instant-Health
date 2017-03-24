import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, ScrollView, TouchableHighlight, Navigator, AlertIOS } from 'react-native';

export default class Food extends Component {
  
	  _onPressButtonBack() {
  this.props.navigator.push({
    id: 'Two'
  });
}


  render() {
    return (

<View style={{flex: 1, flexDirection: 'column'}}>

  <View style={styles.topBannerView}>

        <View style={styles.uiBar}></View>

          <View style={styles.logoBox}>
          <View style={styles.arrowContainer}>
          		<TouchableHighlight onPress={this._onPressButtonBack.bind(this)}>
              <Image source={require('./Assets/Images/arrowLeft.png')} style={{width: 35, height: 25}}></Image>
              	</TouchableHighlight>
            </View>
            <View style={styles.logoContainer}>
              <Image source={require('./Assets/Images/logo2.png')} style={{width: 60, height: 50}}></Image>
            </View>
          </View>

          <View style={styles.welcomeBar}>
            <Text style={{fontFamily: 'AvenirNext-Regular', fontSize: 24}}>Custom Meal Generator</Text>
          </View>
        </View>


      <View style={styles.scrollView}></View>



      </View>

    );
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
      alignItems: 'center',
      flexDirection: 'row'
      
    },
    arrowContainer: {
    	flex: 1,
    	width: 50,
    	backgroundColor: 'transparent',
    	position: 'absolute',
    	left: 10
    },
    logoContainer: {
      width: 80,
      backgroundColor: 'transparent',
      alignItems: 'center',
    },
     welcomeBar: {
      flex: 2.5,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center'
    },
    topBannerView: {
      backgroundColor: 'rgba(86,171,47,0.9)',
      flex: 1.2,
      flexDirection: 'column'
    },
    scrollView: {
    	flex: 5.5,
    	backgroundColor: 'black'
    }

});


module.exports = Food;