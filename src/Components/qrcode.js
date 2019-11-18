
import React, { Component } from "react";
import {
  View,
  Alert,
  Text, StatusBar, SafeAreaView, StyleSheet, ScrollView, Header, PermissionsAndroid,TouchableOpacity
} from "react-native";
import { CameraKitCameraScreen, } from 'react-native-camera-kit';
import firebase from '../../utils/firebase'
import { Actions } from "react-native-router-flux";

class QrCode extends Component {
  constructor() {
    super();
    this.state = {
      //variable to hold the qr value
      qrvalue: '',
      opneScanner: false,
      dat: 1
    };
  }
  componentDidMount() {
    this.requestCameraPermission()
  }




  async requestCameraPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  }

  datasend(data) {
    var id = data
    this.setState({
      dat: 0
    }, () => {
      var ref = firebase.database().ref(`patients/${data}`);
      ref.on("value",
        function (snapshot) {
          var data = snapshot.val()
          Actions.Form({ data, id })
        })

    })
  }

  render() {
    console.ignoredYellowBox = ['Setting a timer'];
    return (

      <View>
        {this.state.dat == 1 ?

          <CameraKitCameraScreen
            actions={{ rightButtonText: 'Done', leftButtonText: 'Cancel' }}
            showFrame={true}
            scanBarcode={true}
            laserColor={"red"}
            surfaceColor={"black"}
            frameColor={"#48bdc5"}
            onReadCode={(event) => { this.datasend(event.nativeEvent.codeStringValue) }}
            hideControls={true}
            colorForScannerFrame={'blue'}
          />
          :
          <View>
            <Text> Get   data from base </Text>
            <TouchableOpacity onPress={() => {
              this.setState({ val: 1 })
            }}>
              <Text> Re open camera</Text>
            </TouchableOpacity>
          </View>
        }

             </View>

    );
  }
}



//              
const styles = StyleSheet.create({
  scrollView: {
  },



});






export default QrCode;