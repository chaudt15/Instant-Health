import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, ScrollView, TouchableHighlight, Navigator, AlertIOS } from 'react-native';





class Data extends Component {

  render(){
      if(this.props.api === 'false'){
        return(
         <View style={{flex: 1, backgroundColor: 'transparent'}}>
           <Text>Nothing yet</Text>
        </View>
        );
      }
      else{
        return(
        <View style={{flex: 1, backgroundColor: 'transparent'}}>
           <Text>Name: {this.props.name}{"\n"}Calories: {this.props.calories}{"\n"}Reps: {this.props.reps}{"\n"}Rest: {this.props.rest}{"\n"}Sets: {this.props.sets}{"\n"}Image: {this.props.imageURL}{"\n"}</Text>
        </View>
        );
      }
      
  }

}


export default class Tricep extends Component {
  
  constructor(props){
    super(props);
    this.state = {apiCalled: false};
  }



	  _onPressButtonBack() {
  this.props.navigator.push({
    id: 'Lifts'
  });
}


_finishedAPICall(){
    this.apiCalled = 'true';
    this.setState({
      name: this.name,
      calories: this.calories,
      sets: this.sets,
      reps: this.reps,
      rest: this.rest,
      imageURL: this.imageURL
    });
}


name: String;
calories: String;
result: String;
sets: String;
reps: String;
rest: String;
imageURL: String;
apiCalled = 'false';

_generateTricep(){
  console.log('executed');
  fetch("http://45.55.168.202:3300/lifts/tricep", {method: "GET"})
  .then((response) => response.json())
  .then((responseData) => {
    var result = JSON.stringify(responseData)
    this.name = responseData.name
    this.result = result
    this.calories = responseData.calories
    this.sets = responseData.sets
    this.reps = responseData.reps
    this.rest = responseData.rest
    this.imageURL = responseData.imageURL
    this._finishedAPICall()

  })
  .done(); 
}



  render() {
    return (
       <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={styles.topBannerView}>

                <View style={styles.uiBar}></View>

                  <View style={styles.logoBox}>
                  <View style={styles.arrowContainer}>
                      <TouchableHighlight onPress={this._onPressButtonBack.bind(this)}>
                      <Image source={require('../Assets/Images/arrowLeft.png')} style={{width: 35, height: 25}}></Image>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.logoContainer}>
                      <Image source={require('../Assets/Images/logo2.png')} style={{width: 60, height: 50}}></Image>
                    </View>
                  </View>

                  <View style={styles.welcomeBar}>
                    <Text style={{fontFamily: 'AvenirNext-Regular', fontSize: 24}}>Tricep Workout Generator</Text>
                  </View>
                </View>

              <View style={styles.lowView}>
                <View style={styles.display}>
                  <Data api={this.apiCalled} name={this.name} calories={this.calories} reps={this.reps} sets={this.sets} rest={this.rest} imageURL={this.imageURL}></Data>
                </View>
                <View style={styles.generate}>
                  <TouchableHighlight onPress={this._generateTricep.bind(this)}>
                    <Text style={{textAlign: 'center', fontFamily: 'Avenir-Light', fontSize: 20}}>Click Here To Generate Tricep Workout</Text>
                  </TouchableHighlight>
                </View>
              </View>
              
         </View>       

    );
  }

}

const styles = StyleSheet.create({
  display: {
      flex: 6,
      backgroundColor: 'rgba(236,233,231,0.99)'
    },
    generate: {
      flex: 1,
      backgroundColor: 'rgba(86,171,47,0.99)',
      justifyContent: 'center',
      alignItems: 'center'
    },
    lowView: {
      flex: 5.5,
      backgroundColor: 'transparent'
    },
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
      alignItems: 'center',
      borderBottomWidth: StyleSheet.hairlineWidth
    },
    topBannerView: {
      backgroundColor: 'rgba(86,171,47,0.9)',
      flex: 1.2,
      flexDirection: 'column'
    },
    scrollView: {
      flex: 5.5,
      backgroundColor: 'transparent'
    },

});

module.exports = Tricep;