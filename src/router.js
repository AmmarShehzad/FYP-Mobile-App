import React ,{Component} from 'react'
import {View,Text} from 'react-native'
import { Router,Scene } from 'react-native-router-flux'
import Login from './Components/Login'
import QrCode from './Components/qrcode'
import Form from './Components/form'

import Comment from './Components/comment'
import Checkup from './Components/checkup'
import Medician from './Components/medician'
import NewThing from './Components/addform'
import Report from './Components/reports'
export default class Routes extends Component{
    render(){
        return(
          <Router>
              <Scene key="inital">
                <Scene key="login" component={Login} hideNavBar={true} initial  />
                <Scene key="Qrcode" component={QrCode} hideNavBar={true}  />
                <Scene key="Form" component={Form} hideNavBar={true}  />
                <Scene key="Comment" component={Comment}hideNavBar={true}  />
                <Scene key="Checkup" component={Checkup}hideNavBar={true}  />
                <Scene key="Medician" component={Medician}hideNavBar={true}  />
                <Scene key="newthing" component={NewThing}hideNavBar={true}  />
                <Scene key="report" component={Report}hideNavBar={true}  />



              </Scene>
          </Router>
        )
    }
}