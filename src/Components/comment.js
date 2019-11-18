import React,{Component} from 'react'
import {View ,Text} from 'react-native'
import moment from 'moment'
export default class Data extends Component{
    constructor(){
        super()
        this.state={
            data:[
                    {name : 'bilal'},
                    {name : 'bilal'},
                    {name : 'bilal'},
                    {name : 'bilal'},
                    {name : 'bilal'},
                    {name : 'bilal'}
            ]
        }
    }
    render(){
var data=this.props.navigation.state.params.comment
var sort = Object.values(data)

        return(
            <View> 

                <Text style={{textAlign:'center',fontSize:28,color:'#48bdc5'}}> 
 Dr Remarks History
                </Text>
                    {sort.map((val,ind)=>{
                        console.log(val)
                        return(

                            <View style={{flexDirection:'row',borderWidth:0.33,margin:3,borderRadius:10}}>
                                <Text style={{textAlign:'left',justifyContent:'flex-start',color:'#48bdc5',fontSize:23}}>  {moment(val.date).format('L')}</Text>
                            <Text style={{fontSize:23,justifyContent:'center',marginLeft:25,flex:1}}> {val.examine_results}</Text>
                       </View>
                        )


                        
                    })}



            </View>
        )
    }
}