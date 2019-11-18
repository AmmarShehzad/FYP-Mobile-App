import React, { Component } from "react";
import { View, StatusBar ,Text} from "react-native";
import Routes from "./src/router";
export default class App extends Component {

 
  
  render() {
    
    return (

      <View style={{ flex: 1, backgroundColor: "#48bdc5" }}>
      <StatusBar backgroundColor="#48bdc5" barStyle="light-content" />
        <Routes />
    </View>
    );
  }
 
}