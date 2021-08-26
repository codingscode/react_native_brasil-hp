import React, { Component } from 'react'
import { View, Text, Image, Button, StyleSheet } from 'react-native'



class App extends Component {
   


 
   render() {
      return (
         <View style={estilos.area} >
            <Text>texto 1</Text>
            <Text>texto 2</Text>
            <Text>texto 3</Text>
            <Text>texto 4</Text>
            
         </View>
      )
   }
}

const estilos = StyleSheet.create({
   area: { marginTop: 40 }
})


export default App

