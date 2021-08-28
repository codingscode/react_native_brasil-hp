import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native'



class App extends Component {
   

   
   
   
   
   
   render() {
      return (
         <View style={estilos.container}  >
            <View style={estilos.box1} ></View>
            <View style={estilos.box2} ></View>
            <View style={estilos.box3} ></View>
            <View style={estilos.box4} ></View>
            
         </View>
      )
   }
}

/* 

*/

const estilos = StyleSheet.create({
   container: {
      flex: 1
   },
   box1: {
      backgroundColor: 'orange', height: 250
   },
   box2: {
      backgroundColor: 'lightgreen', height: 250
   },
   box3: {
      backgroundColor: 'lightblue', height: 250
   },
   box4: {
      backgroundColor: 'purple', height: 250
   }
 

})




export default App

