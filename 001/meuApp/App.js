import React, { Component } from 'react'
import { View, Text, StyleSheet, Animated, TouchableOpacity } from 'react-native'





class App extends Component {

   constructor(props) {
      super(props)
      
      this.state = {
         LarAnimada: new Animated.Value(150), AltAnimada: new Animated.Value(50), OpAnimada: 1
      }
      
      this.carregarGrafico = this.carregarGrafico.bind(this)
           
      
   }
  
   carregarGrafico() {
      Animated.sequence([
         Animated.timing(
            this.state.AltAnimada,
            { toValue: 300, duration: 1000, useNativeDriver: false }
         )
      ]).start()

   }
  
    
   render() {
      return (
      <View style={estilos.container} >
         <View style={estilos.a1} >
            <TouchableOpacity onPress={this.carregarGrafico} >
               <Text style={estilos.a2} >
                  Gerar gráfico...
               </Text>
            </TouchableOpacity>
         </View>
         <View style={estilos.a3} >
            <Animated.View style={{ width: this.state.LarAnimada, height: this.state.AltAnimada, backgroundColor: '#FF0000', justifyContent: 'center' }}>
               <Text style={{ color: '#FFFFFF', fontSize: 22, textAlign: 'center' }} >R$ 150,00</Text>
            </Animated.View>

         </View>
      </View>

      )
   
   }
}

const estilos = StyleSheet.create({
   container: {
      flex: 1
   },
   a1: {
      height: 80, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', backgroundColor: '#4169E1'
   },
   a2: {
      fontSize: 25, color: '#FFFFFF'
   },
   a3: {
      flex: 1, flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center'
   }
   
   

})


export default App
