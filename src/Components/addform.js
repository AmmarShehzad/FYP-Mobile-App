import React, { Component } from 'react'
import { View, TextInput } from 'react-native'
import { Text, Textarea, Button, Input } from 'native-base'
import firebase from '../../utils/firebase'
import AsyncStorage from '@react-native-community/async-storage';
import { Actions } from 'react-native-router-flux';
import moment from 'moment'
export default class Update extends Component {
    constructor() {
        super()
        this.state = {
            value: "",
            blood_pressure: "",
            fever: ""
        }
    }

    send = (param) => {

        var data = this.props.navigation.state.params.id
        var ref = firebase.database().ref(`patients/${data}/checkup`);
        var ref1 = firebase.database().ref(`patients/${data}/examine_results`);
        var ref2 = firebase.database().ref(`patients/${data}/medications`);
        var repeat = this.props.navigation.state.params.data
        var date = new Date()
        console.log({data})
        AsyncStorage.getItem('userid').then((val) => {

            var perform = JSON.parse(val)
            console.log(perform)


            if (param !== 3) {
                console.log('first if')
                if (this.state.value.trim() == "") {
                    alert('You must to enter the feild')
                }


                else if (param == 1 && perform !== undefined) {
                    console.log('second if')

                    ref2.push({
                        UID: perform,
                        medications: this.state.value,
                        date:moment().format()


                    })
                    alert('Successfully Add ')
                    Actions.Form({ data:repeat,id})



                }
                else if (param == 2 && perform !== undefined) {
                    console.log('third if')

                    ref1.push({
                        UID: perform,
                        examine_results: this.state.value,
                        date:moment().format()


                    })
                    alert('Successfully Add ')
                    Actions.Form({ data:repeat,id})

                }
            }




            else if (param == 3 && perform !== undefined) {
                console.log('forth if')

                if (this.state.blood_pressure == "" && this.state.fever == '') {
                    alert('Enter this feild')
                }
                else {
                    ref.push({
                        UID: perform,
                        blood_pressure: this.state.blood_pressure,
                        fever: this.state.fever,
                        date:moment().format()


                    })
                    alert('Successfully Add ')
                    Actions.Form({ data:repeat,id})
                }

            }

        })

    }

    render() {


        var one = this.props.navigation.state.params.one
console.log({one})

        return (


            <View style={{ width: '80%', alignSelf: 'center', marginTop: 10 }}>
                <Text style={{ fontSize: 20, textAlign: 'center' }}> Add Detail</Text>

                {
                    one == 3 ?
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
                            <TextInput
                                editable
                                keyboardType="numeric"
                                maxLength={10}
                                placeholder="Enter  blood Pressure"
                                style={{ borderWidth: 1, borderRadius: 5 }}
                                onChangeText={(e) => {
                                    this.setState({ blood_pressure: e })
                                }}
                            />
                            <TextInput
                                editable
                                keyboardType="numeric"

                                maxLength={10}
                                placeholder="Enter the fiver"
                                style={{ borderWidth: 1, borderRadius: 5 }}
                                onChangeText={(e) => {
                                    this.setState({ fever: e })
                                }}
                            />
                        </View> :
                        <Textarea style={{ borderWidth: 2, borderColor: 'green' }} rowSpan={5} bordered placeholder="Add Detail" onChangeText={(e) => {
                            this.setState({
                                value: e
                            })

                        }} />
                }


                <Button style={{ marginTop: 15 ,backgroundColor:"#48bdc5"}} onPress={() => { this.send(one) }}>
                    <Text style={{ color: 'white', flex: 1, textAlign: 'center' }}> Done</Text>
                </Button>
            </View>
        )
    }
}