import React, { Component } from 'react'
import { View, Text, StyleSheet, Animated, TouchableOpacity } from 'react-native'





class App extends Component {

   constructor(props) {
      super(props)
      
      this.state = {
         LarAnimada: new Animated.Value(50)
      }
      
      Animated.timing(
         this.state.LarAnimada,
         { toValue: 100, duration: 3000, useNativeDriver: false }
      ).start()
      
      
      
      
   }
  
  
    
   render() {
   
      let porcentagemAnimate = this.state.LarAnimada.interpolate({
         inputRange: [0, 100], outputRange: ['0%', '100%']
      })
   
      return (
      <View style={estilos.container} >
         <Animated.View style={{ backgroundColor: '#4169E1', width: porcentagemAnimate, height: 25 }} >

         </Animated.View>
         
      </View>

      )
   
   }
}

const estilos = StyleSheet.create({
   container: {
      flex: 1, justifyContent: 'center', alignItems: 'flex-start'
   },
   a1: {
      
   },
   a2: {
      fontSize: 25, color: '#FFFFFF'
   },
   a3: {
      flex: 1, flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center'
   }
   
   

})


export default App


