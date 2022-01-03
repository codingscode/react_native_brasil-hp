import React, { Component } from 'react'
import { View, Text, StyleSheet, Animated } from 'react-native'





class App extends Component {

   constructor(props) {
      super(props)
      
      this.state = {
         LarAnimada: 150, AltAnimada: 50
      }
      
   }
  
    
   render() {
      return (
      <View style={estilos.container} >
         <Animated.View style={{ width: this.state.LarAnimada, height: this.state.AltAnimada, backgroundColor: '#4169F1', justifyContent: 'center'}}>
            <Text style={{ color: '#FFFFFF', fontSize: 22, textAlign: 'center' }} >Carregando...</Text>
         </Animated.View>
      </View>

      )
   
   }
}

const estilos = StyleSheet.create({
   container: {
      flex: 1, justifyContent: 'center', alignItems: 'center'
   }
   

})


export default App
