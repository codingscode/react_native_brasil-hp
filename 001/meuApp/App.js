import React, { Component } from 'react'
import { View, Text, StyleSheet, Animated, TouchableOpacity } from 'react-native'





class App extends Component {

   constructor(props) {
      super(props)
      
      this.state = {

      }
      
      
   }
  

  
  
    
   render() {
      return (
      <View style={estilos.container} >
         <View style={estilos.a1} >

         </View>
         
      </View>

      )
   
   }
}

const estilos = StyleSheet.create({
   container: {
      flex: 1, justifyContent: 'center', alignItems: 'flex-start'
   },
   a1: {
      backgroundColor: '#4169E1', width: '75%', height: 25
   },
   a2: {
      fontSize: 25, color: '#FFFFFF'
   },
   a3: {
      flex: 1, flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center'
   }
   
   

})


export default App


