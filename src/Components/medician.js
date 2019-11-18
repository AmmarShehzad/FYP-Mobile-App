import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'
import moment from 'moment'
moment
export default class Medician extends Component {
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
        var data = this.props.navigation.state.params.Medician
        var sort = Object.values(data)
        console.log(sort)
        return (
            <View>

                <Text style={{ textAlign: 'center', fontSize: 28, color: '#48bdc5' }}>
                    Patient Medication History
                </Text>
                <ScrollView>

                    {sort.map((val, ind) => {
                        console.log(val)
                        return (

                            <View style={{ flexDirection: 'row', margin: 8 }}>
                                <Text style={{ fontSize: 23, textAlign: 'left', justifyContent: 'flex-start', color: '#48bdc5' }}> {moment(val.date).format('L')}</Text>
                                <Text style={{ fontSize: 23, justifyContent: 'center', paddingLeft: 6 }}> {val.medications}</Text>

                            </View>
                        )



                    })}
                </ScrollView>




            </View>
        )
    }
}