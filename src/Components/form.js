import React, { Component } from 'react'

import { View, BackHandler } from 'react-native'
import { Button, Text } from 'native-base'
import { Actions } from 'react-native-router-flux'
import firebase from '../../utils/firebase'

export default class extends Component {
    back = () => {
        firebase.auth().signOut().then(function () {
            Actions.login()
        }).catch(function (error) {
            // An error happened.
        });
    }
    render() {
        var data = this.props.navigation.state.params.data
        var comment = data.examine_results
        var CheckUp = data.checkup
        var Medician = data.medications
        var id = this.props.navigation.state.params.id
        var reports= data.reports
        return (
            <View style={{ backgroundColor: 'white', flex: 1 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <View style={{ flexDirection: 'column', justifyContent: 'space-around', alignItems: 'flex-start' }}>
                        <Text style={{ fontSize: 20, }}>Name</Text>
                        <Text style={{ fontSize: 20, color: '#48bdc5' }}> {data.name}</Text>


                    </View>
                    <View style={{ flexDirection: 'column', justifyContent: 'space-around', alignItems: 'flex-start' }}>
                        <Text style={{ fontSize: 20 }}> Date</Text>
                        <Text style={{ fontSize: 20, marginTop: 10, color: '#48bdc5' }}> {data.date}</Text>


                    </View>
                    <View style={{ flexDirection: 'column', justifyContent: 'space-around', alignItems: 'flex-start' }}>
                        <Text style={{ fontSize: 20 }}> Room</Text>
                        <Text style={{ fontSize: 20, color: '#48bdc5' }}> {data.room}</Text>


                    </View>

                    <View style={{ flexDirection: 'column', justifyContent: 'space-around', alignItems: 'flex-start' }}>
                        <Text style={{ fontSize: 20 }}> Age</Text>
                        <Text style={{ fontSize: 20, color: '#48bdc5' }}> {data.age}</Text>


                    </View>
                </View>

                <View style={{ alignItems: 'center', marginTop: 22 }}>
                    <Text style={{ fontSize: 25 }}> Doctor Assigned</Text>

                    <Text style={{ fontSize: 25, color: '#48bdc5' }}> {data.doctor} </Text>
                </View>


                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 22 }}>

                    <Button style={{ backgroundColor: "#48bdc5" }} onPress={() => {
                        Actions.Medician({ Medician, id })

                    }}>
                        <Text style={{ color: 'white' }}> Medication</Text>
                    </Button>

                    <Button style={{ backgroundColor: "#48bdc5" }} onPress={() => {
                        Actions.Checkup({ CheckUp, id })
                    }}>
                        <Text style={{ color: 'white' }}> CheckUp History</Text>
                    </Button>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 22 }}>


                    <Button style={{ backgroundColor: "#48bdc5" }} onPress={() => {
                        Actions.Comment({ comment, id })
                    }}>
                        <Text style={{ color: 'white' }}> Examine Results</Text>
                    </Button>

                    <Button style={{ backgroundColor: "#48bdc5" }} onPress={() => {
                        Actions.newthing(
                            { one: 1, id, data }
                        )
                    }}>
                        <Text style={{ color: 'white' }}> New Medication</Text>
                    </Button>



                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 22 }}>

                    <Button style={{ backgroundColor: "#48bdc5" }} onPress={() => {
                        Actions.newthing(
                            { one: 2, id, data }
                        )
                    }}>
                        <Text style={{ color: 'white' }}> New Examine </Text>
                    </Button>

                    <Button style={{ backgroundColor: "#48bdc5" }} onPress={() => {
                        Actions.newthing(
                            { one: 3, id, data }
                        )
                    }}>
                        <Text style={{ color: 'white' }}> Update CheckUp </Text>
                    </Button>



                </View>
                <View style={{ marginTop: 30, width: '50%', alignSelf: 'center' }}>

                    <Button style={{ backgroundColor: "#48bdc5" }} onPress={()=>{Actions.report({reports,id, data })}}>
                        <Text style={{ textAlign: 'center', flex: 1, color: 'white' }}> View Report</Text>
                    </Button>
                </View>
                <View style={{ marginTop: 30, width: '50%', alignSelf: 'center' }}>

                    <Button style={{ backgroundColor: "#48bdc5" }} onPress={() => {
                        Actions.Qrcode()
                    }}>
                        <Text style={{ textAlign: 'center', flex: 1, color: 'white' }}> Scan</Text>
                    </Button>
                </View>
                <View style={{ marginTop: 30, width: '50%', alignSelf: 'center' }}>

                    <Button style={{ backgroundColor: "#48bdc5" }}
                        onPress={() => { this.back() }}>

                        <Text style={{ textAlign: 'center', flex: 1, color: 'white' }}> Signout</Text>
                    </Button>
                </View>
            </View>
        )
    }
}