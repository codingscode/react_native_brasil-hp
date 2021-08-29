import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'




class App extends Component {
   
      
   
   render() {
      return (
         <View style={estilos.container} >
            <Text style={estilos.logo} >Menu Pizza</Text>
            
            
            
            <Text style={estilos.pizzas} >você escolheu: pizza calabresa</Text>
            <Text style={estilos.pizzas} >R$: 59,90</Text>
         </View>
      )
   }
}

/* 

*/

const estilos = StyleSheet.create({
   container: {
      flex: 1, marginTop: 20
   },
   logo: {
      textAlign: 'center', fontSize: 28, fontWeight: 'bold'
   },
   pizzas: {
      marginTop: 15, fontSize: 28, textAlign: 'center'
   }
})


export default App
