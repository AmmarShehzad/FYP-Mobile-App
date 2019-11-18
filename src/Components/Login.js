import React, { Component } from 'react'
import { View, TextInput,BackHandler } from 'react-native'
import { Form, Label, Input, Item, Button, Text } from 'native-base'
import firebase from '../../utils/firebase'
import { Actions } from 'react-native-router-flux'
import AsyncStorage from '@react-native-community/async-storage';

export default class Login extends Component {
    constructor(props) {

        super(props)
        this.state = {
            email: '',
            Password: ''
        }
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.back);


    }
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.back);
    }


    back = () => {
        BackHandler.exitApp();
        return true;
    }


    senddatatofirebase = () => {

        firebase
            .auth()
            .signInWithEmailAndPassword(this.state.email, this.state.Password)
            .then(res => {
                firebase.auth().onAuthStateChanged(userid => {
                    if (userid) {
                        AsyncStorage.setItem('userid', JSON.stringify(userid.uid))
                        Actions.Qrcode()


                        console.log(userid)



                    }
                })
            })
            .catch((err) => {
                alert(err)

            }
            )
    }
    render() {
        return (

            <View style={{ backgroundColor: 'white', flex: 1 }}>
                <Text style={{ color: '#48bdc5', textAlign: 'center', fontSize: 25, marginTop: 40 }}>  Qr Based Filing System
                </Text>
                <View style={{ alignItems: 'center' }}>
                    <Form style={{ marginTop: 20, width: '90%', justifyContent: 'center' }}>
                        <Item floatingLabel>
                            <Label style={{ color: '#48bdc5' }}>Email  Address</Label>
                            <Input onChangeText={(val) => {
                                this.setState({
                                    email: val
                                })
                            }} />
                        </Item>
                        <Item floatingLabel last>
                            <Label style={{ color: '#48bdc5' }}>Password</Label>
                            <Input secureTextEntry={true} onChangeText={(val) => {
                                this.setState({
                                    Password: val
                                })
                            }} />
                        </Item>
                    </Form>

                </View>

                <Button bordered onPress={() => {
                    this.senddatatofirebase()
                }} style={{ alignSelf: 'center', justifyContent: 'center', width: "80%", marginTop: 40, borderWidth: 2, borderColor: '#48bdc5' }}>
                    <Text style={{ flex: 1, textAlign: 'center', color: '#48bdc5' }}>Login</Text>
                </Button>
            </View>
        )
    }
}