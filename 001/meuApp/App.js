import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import Slider from '@react-native-community/slider';


class App extends Component {
   constructor(props) {
      super(props)
      this.state = {
         
      }
   }
   
   
   render() {

      return (
         <View style={estilos.container} >
            <Slider minimumValue={0} maximumValue={100} />
         </View>
      )
   }
}

/* 

*/

const estilos = StyleSheet.create({
   container: {
      flex: 1, marginTop: 15
   }
  
})


export default App
