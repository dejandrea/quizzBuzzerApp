import * as React from 'react';
import { View, Text, TouchableOpacity,StyleSheet,Button } from 'react-native';
import AppHeader from '../components/AppHeader'
import SoundButton from '../components/SoundButton'

export default class BuzzerScreen extends React.Component {
  render(){
    return(
      <View>
        <AppHeader/>
        <SoundButton color={this.props.navigation.getParam('color')}/>
        <Button title='Home' style={{ width: 100, height: 100, paddingTop:200,  }}
         onPress={()=>{this.props.navigation.navigate('HomeScreen')}} />
      </View>

    )
  }
}