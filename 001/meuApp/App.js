import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, Button, Image } from 'react-native'



class App extends Component {
   
  
   
  
   
   
   render() {
      return (
         <View style={estilos.container}  >
            <Image source={require('./src/biscoito.png')} style={estilos.imagem} />

         </View>
      )
   }
}

const estilos = StyleSheet.create({
   container: {
      flex: 1
   },
   imagem: {
      width: 250, height: 250
   }
})




export default App

