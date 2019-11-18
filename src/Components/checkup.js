import React, { Component } from 'react'
import { View, Text } from 'react-native'
import moment from 'moment'
export default class CheckUp extends Component {
    constructor() {
        super()
        this.state = {
            data: [
                { name: 'bilal' },
                { name: 'bilal' },
                { name: 'bilal' },
                { name: 'bilal' },
                { name: 'bilal' },
                { name: 'bilal' }
            ]
        }
    }
    render() {
        var data = this.props.navigation.state.params.CheckUp
        var sort = Object.values(data)

        return (
            <View>

                <Text style={{ textAlign: 'center', fontSize: 28, color: '#48bdc5' }}>
                    Checkup History
                </Text>
                <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                <Text style={{ fontSize: 23 }}> Fever</Text> 
                    <Text style={{ fontSize: 23 }}>
                        Date
                    </Text>
                    <Text style={{ fontSize: 23 }}>Blood P..
                    </Text>

                </View>
                {sort.map((val, ind) => {
                    console.log(val)
                    return (
                        <View style={{ flexDirection: 'row', padding:8,justifyContent:'space-around'}}>
                                                        <Text style={{ color: '#48bdc5' , justifyContent: 'center',fontSize:23,}}> {val.fever}</Text>

                            <Text style={{fontSize: 20, }}> {moment(val.date).format('L')}</Text>

                            <Text style={{ fontSize: 20, justifyContent: 'center' }}> {val.blood_pressure}</Text>
                        </View>
                    )



                })}



            </View>
        )
    }
}