import React, { Component } from 'react'
import { View, Text, Image, Button, StyleSheet } from 'react-native'



class App extends Component {
   


 
   render() {
      return (
         <View style={estilos.area} >
            <Text style={[estilos.textoPrincipal, estilos.alinhaTexto]} >texto 1</Text>
            <Text>texto 2</Text>
            <Text style={estilos.alinhaTexto} >texto 3</Text>
            <Text>texto 4</Text>
            
         </View>
      )
   }
}

const estilos = StyleSheet.create({
   area: { marginTop: 40 },
   textoPrincipal: {
      fontSize: 25, color: 'green'
   },
   alinhaTexto: {
      textAlign: 'center'
   }
})


export default App

