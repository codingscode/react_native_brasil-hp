import React, { Component } from 'react'
import { View, Text, StyleSheet, Animated } from 'react-native'





class App extends Component {

   constructor(props) {
      super(props)
      
      this.state = {
         LarAnimada: new Animated.Value(150), AltAnimada: new Animated.Value(50), OpacidadeAnimada: new Animated.Value(0)
      }
      


      Animated.sequence([
         Animated.timing(
            this.state.OpacidadeAnimada,
            { toValue: 1, duration: 1500 }
         ),
         Animated.parallel([
            Animated.timing(
               this.state.LarAnimada,
               { toValue: 300, duration: 2000 }
            ),
            Animated.timing(
               this.state.AltAnimada,
               { toValue: 200, duration: 2000 }
            )

         ])


         
      ]).start()







      /* Animated.timing(
         this.state.LarAnimada,
         { toValue: 300, duration: 2000 }
      ).start() */
      
      
   }
  
    
   render() {
      return (
      <View style={estilos.container} >
         <Animated.View style={{ width: this.state.LarAnimada, height: this.state.AltAnimada, backgroundColor: '#4169F1', justifyContent: 'center', opacity: this.state.OpacidadeAnimada}}>
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
