import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, ScrollView, TouchableHighlight, Navigator, AlertIOS } from 'react-native';

export default class Lifts extends Component {
  

	  _onPressButtonBack() {
  this.props.navigator.push({
    id: 'Two'
  });
}

 _onPressButton() {
  this.props.navigator.push({
    id: 'Lifts'
  });
}

 _onPressButtonBicep() {
  this.props.navigator.push({
    id: 'Bicep'
  });
}

 _onPressButtonAbs() {
 AlertIOS.alert(
 'Coming Soon',
 'This feature will be coming very soon!'
);
}

 _onPressButtonChest() {
  this.props.navigator.push({
    id: 'Chest'
  });
}

 _onPressButtonTricep() {
  AlertIOS.alert(
 'Coming Soon',
 'This feature will be coming very soon!'
);
}

 _onPressButtonShoulder() {
  AlertIOS.alert(
 'Coming Soon',
 'This feature will be coming very soon!'
);
}

 _onPressButtonCalf() {
  AlertIOS.alert(
 'Coming Soon',
 'This feature will be coming very soon!'
);
}

 _onPressButtonBacks() {
  AlertIOS.alert(
 'Coming Soon',
 'This feature will be coming very soon!'
);
}

 _onPressButtonHamstring() {
  AlertIOS.alert(
 'Coming Soon',
 'This feature will be coming very soon!'
);
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
            <Text style={{fontFamily: 'AvenirNext-Regular', fontSize: 24}}>Strength Workout Generator</Text>
          </View>
        </View>


      <View style={styles.scrollView}>
      	<ScrollView style={styles.scrollViewWindow} showsVerticalScrollIndicator={false} bounces={false}>
      		<View style={styles.workoutContainer}>
      			<Image style={styles.imageBG} source={require('./Assets/Images/workoutAbs.jpg')}>
      				 <View style={styles.touchBar}>
			             <TouchableHighlight onPress={this._onPressButtonAbs.bind(this)}>
			              <Text style={{textAlign: 'center', fontFamily: 'Avenir-Light', fontSize: 20}}>Abdominal Workout</Text>
			            </TouchableHighlight>
			          </View>
      			</Image>
      		</View>
      		<View style={styles.workoutContainer2}>
      			<Image style={styles.imageBG} source={require('./Assets/Images/workoutBicep.jpg')}>
      				<View style={styles.touchBar}>
			             <TouchableHighlight onPress={this._onPressButtonBicep.bind(this)}>
			              <Text style={{textAlign: 'center', fontFamily: 'Avenir-Light', fontSize: 20}}>Bicep Workout</Text>
			            </TouchableHighlight>
			          </View>
      			</Image>
      		</View>
      		<View style={styles.workoutContainer}>
      			<Image style={styles.imageBG} source={require('./Assets/Images/workoutChest.jpg')}>
      				<View style={styles.touchBar}>
			             <TouchableHighlight onPress={this._onPressButtonChest.bind(this)}>
			              <Text style={{textAlign: 'center', fontFamily: 'Avenir-Light', fontSize: 20}}>Chest Workout</Text>
			            </TouchableHighlight>
			          </View>
      			</Image>
      		</View>
      		<View style={styles.workoutContainer2}>
      			<Image style={styles.imageBG} source={require('./Assets/Images/workoutTricep.jpg')}>
      				<View style={styles.touchBar}>
			             <TouchableHighlight onPress={this._onPressButtonTricep.bind(this)}>
			              <Text style={{textAlign: 'center', fontFamily: 'Avenir-Light', fontSize: 20}}>Tricep Workout</Text>
			            </TouchableHighlight>
			          </View>
      			</Image>
      		</View>
      		<View style={styles.workoutContainer}>
      			<Image style={styles.imageBG} source={require('./Assets/Images/workoutShoulder.jpg')}>
      				<View style={styles.touchBar}>
			             <TouchableHighlight onPress={this._onPressButtonShoulder.bind(this)}>
			              <Text style={{textAlign: 'center', fontFamily: 'Avenir-Light', fontSize: 20}}>Shoulder Workout</Text>
			            </TouchableHighlight>
			          </View>
      			</Image>
      		</View>
      		<View style={styles.workoutContainer2}>
      			<Image style={styles.imageBG} source={require('./Assets/Images/workoutCalf.jpg')}>
      				<View style={styles.touchBar}>
			             <TouchableHighlight onPress={this._onPressButtonCalf.bind(this)}>
			              <Text style={{textAlign: 'center', fontFamily: 'Avenir-Light', fontSize: 20}}>Calf Workout</Text>
			            </TouchableHighlight>
			          </View>
      			</Image>
      		</View>
      		<View style={styles.workoutContainer}>
      			<Image style={styles.imageBG} source={require('./Assets/Images/workoutLat.jpg')}>
      				<View style={styles.touchBar}>
			             <TouchableHighlight onPress={this._onPressButtonBacks.bind(this)}>
			              <Text style={{textAlign: 'center', fontFamily: 'Avenir-Light', fontSize: 20}}>Back Workout</Text>
			            </TouchableHighlight>
			          </View>
      			</Image>
      		</View>
      		<View style={styles.workoutContainer2}>
      			<Image style={styles.imageBG} source={require('./Assets/Images/workoutHamstring.jpg')}>
      				<View style={styles.touchBar}>
			             <TouchableHighlight onPress={this._onPressButtonHamstring.bind(this)}>
			              <Text style={{textAlign: 'center', fontFamily: 'Avenir-Light', fontSize: 20}}>Hamstring Workout</Text>
			            </TouchableHighlight>
			          </View>
      			</Image>
      		</View>
      	</ScrollView>
      </View>



      </View>
    );
  }

}

const styles = StyleSheet.create({
	imageBG: {
		flex: 1,
	    width: undefined,
	    height: undefined,
	    backgroundColor:'transparent',
	},
	workoutContainer: {
		flex: 1,
		height: 180,
		backgroundColor: 'yellow',
		borderBottomWidth: StyleSheet.hairlineWidth
	},
	workoutContainer2: {
		flex: 1,
		height: 180,
		backgroundColor: 'black',
		borderBottomWidth: StyleSheet.hairlineWidth
	},
	scrollViewWindow: {
  		flex: 1,
  		backgroundColor: 'white'
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

});



module.exports = Lifts;